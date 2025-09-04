import React, { useState, useMemo } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import SearchBar from './components/SearchBar';
import AdvancedFilters, { FilterOptions } from './components/AdvancedFilters';
import FilterChips from './components/FilterChips';
import SortOptions from './components/SortOptions';
import CategoryFilter from './components/CategoryFilter';
import GovernorateFilter from './components/GovernorateFilter';
import DistrictFilter from './components/DistrictFilter';
import EstablishmentCard from './components/EstablishmentCard';
import EstablishmentDetails from './components/EstablishmentDetails';
import SuggestionForm from './components/SuggestionForm';
import SubscriptionPlansPlaceholder from './components/SubscriptionPlansPlaceholder';
import PWAInstallPrompt from './components/PWAInstallPrompt';
import OfflineIndicator from './components/OfflineIndicator';
import MobileNavigation from './components/MobileNavigation';
import PullToRefresh from './components/PullToRefresh';
import SEOHead from './components/SEOHead';
import Footer from './components/Footer';
import MapView from './components/MapView';
import { useSupabaseData } from './hooks/useSupabaseData';
import PerformanceOptimizer from './components/PerformanceOptimizer';
import { Establishment, EstablishmentCategory, Governorate, TunisDistrict } from './types';
import { useLanguage } from './hooks/useLanguage';
import { useDebounce } from './hooks/useDebounce';
import { useSearchIndex, searchInIndex } from './hooks/useSearchIndex';
import { usePWA } from './hooks/usePWA';
import SetupInstructions from './components/SetupInstructions';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchFilters, setSearchFilters] = useState<FilterOptions>({});
  const [showAdvancedFilters, setShowAdvancedFilters] = useState(false);
  const [sortBy, setSortBy] = useState('relevance');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc');
  const [selectedCategory, setSelectedCategory] = useState<EstablishmentCategory | null>(null);
  const [selectedGovernorate, setSelectedGovernorate] = useState<Governorate | null>(null);
  const [selectedDistrict, setSelectedDistrict] = useState<TunisDistrict | null>(null);
  const [selectedEstablishment, setSelectedEstablishment] = useState<Establishment | null>(null);
  const [showSuggestionForm, setShowSuggestionForm] = useState(false);
  const [showSetupInstructions, setShowSetupInstructions] = useState(false);
  const [activeTab, setActiveTab] = useState('home');
  const [, setIsRefreshing] = useState(false);
  const [showMap, setShowMap] = useState(false);
  const { t, isRTL } = useLanguage();
  const { requestNotificationPermission } = usePWA();

  // Utiliser les données Supabase au lieu des données locales
  const { 
    establishments: supabaseEstablishments, 
    loading: supabaseLoading, 
    error: supabaseError,
    isSupabaseConfigured,
    refreshData 
  } = useSupabaseData();

  // Optimisation de la recherche
  const debouncedSearchQuery = useDebounce(searchQuery, 200);
  const searchIndex = useSearchIndex(supabaseEstablishments);

  const filteredEstablishments = useMemo(() => {
    let filtered: Establishment[];

    // Utiliser la recherche indexée pour de meilleures performances
    if (debouncedSearchQuery && debouncedSearchQuery.length >= 2) {
      const searchResults = searchInIndex(searchIndex, debouncedSearchQuery);

      // Si pas de résultats dans l'index, fallback vers recherche traditionnelle
      if (searchResults.length === 0) {
        filtered = supabaseEstablishments.filter(establishment => 
          establishment.name.toLowerCase().includes(debouncedSearchQuery.toLowerCase()) ||
          establishment.description.toLowerCase().includes(debouncedSearchQuery.toLowerCase()) ||
          establishment.phone.includes(debouncedSearchQuery) ||
          (establishment.email && establishment.email.toLowerCase().includes(debouncedSearchQuery.toLowerCase()))
        );
      } else {
        filtered = searchResults;
      }
    } else if (debouncedSearchQuery === '') {
      filtered = supabaseEstablishments;
    } else {
      filtered = supabaseEstablishments;
    }

    // Appliquer les autres filtres
    filtered = filtered.filter(establishment => {

      const matchesCategory = selectedCategory === null || establishment.category === selectedCategory;
      const matchesGovernorate = selectedGovernorate === null || establishment.governorate === selectedGovernorate;
      const matchesDistrict = selectedDistrict === null || selectedGovernorate !== 'tunis' || true; // Pour l'instant, on accepte tous les districts

      // Appliquer les filtres avancés
      const matchesVerified = !searchFilters.verified || establishment.verified;
      const matchesPremium = !searchFilters.premium || establishment.premium;
      const matchesRating = !searchFilters.minRating || establishment.rating >= searchFilters.minRating;
      const matchesMaxRating = !searchFilters.maxRating || establishment.rating <= searchFilters.maxRating;

      // Filtres de services (simulation basée sur les services existants)
      const matchesParking = !searchFilters.hasParking || 
        establishment.services.some(service => service.toLowerCase().includes('parking'));
      const matchesWifi = !searchFilters.hasWifi || 
        establishment.services.some(service => service.toLowerCase().includes('wifi'));
      const matchesCards = !searchFilters.acceptsCards || 
        establishment.services.some(service => service.toLowerCase().includes('carte'));
      const matchesAccessible = !searchFilters.wheelchairAccessible || 
        establishment.services.some(service => service.toLowerCase().includes('accessib'));

      return matchesCategory && matchesGovernorate && 
            matchesDistrict &&
            matchesVerified && matchesPremium && matchesRating && matchesMaxRating &&
            matchesParking && matchesWifi && matchesCards && matchesAccessible;
    });

    // Appliquer le tri
    if (sortBy === 'rating') {
      filtered.sort((a, b) => sortOrder === 'asc' ? a.rating - b.rating : b.rating - a.rating);
    } else if (sortBy === 'name') {
      filtered.sort((a, b) => sortOrder === 'asc' ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name));
    } else if (sortBy === 'newest') {
      // Simulation du tri par date (basé sur l'ID pour cet exemple)
      filtered.sort((a, b) => sortOrder === 'asc' ? a.id.localeCompare(b.id) : b.id.localeCompare(a.id));
    }
    // Pour 'relevance' et 'distance', on garde l'ordre par défaut

    return filtered;
  }, [debouncedSearchQuery, selectedCategory, selectedGovernorate, selectedDistrict, searchFilters, sortBy, sortOrder, searchIndex, supabaseEstablishments]);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const handleFilterChange = (filters: FilterOptions) => {
    setSearchFilters(filters);
  };

  const handleRemoveFilter = (key: keyof FilterOptions) => {
    setSearchFilters(prev => {
      const newFilters = { ...prev };
      delete newFilters[key];
      return newFilters;
    });
  };

  const handleClearAllFilters = () => {
    setSearchFilters({});
  };

  const handleSortChange = (newSortBy: string, newSortOrder: 'asc' | 'desc') => {
    setSortBy(newSortBy);
    setSortOrder(newSortOrder);
  };

  const handleCategoryChange = (category: EstablishmentCategory | null) => {
    setSelectedCategory(category);
  };

  const handleGovernorateChange = (governorate: Governorate | null) => {
    setSelectedGovernorate(governorate);
    // Réinitialiser le district si on change de gouvernorat
    if (governorate !== 'tunis') {
      setSelectedDistrict(null);
    }
  };

  const handleDistrictChange = (district: TunisDistrict | null) => {
    setSelectedDistrict(district);
  };

  const handleEstablishmentSelect = (establishment: Establishment) => {
    setSelectedEstablishment(establishment);
  };

  const handleCloseDetails = () => {
    setSelectedEstablishment(null);
  };

  const handleSuggestClick = () => {
    setShowSuggestionForm(true);
    setIsMenuOpen(false);
  };

  const handleCloseSuggestionForm = () => {
    setShowSuggestionForm(false);
  };


  const handleCloseSetup = () => {
    setShowSetupInstructions(false);
  };


  const handleRefresh = async () => {
    setIsRefreshing(true);
    // Rafraîchir les données Airtable
    await refreshData();
    setIsRefreshing(false);
  };

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);

    // Navigation basée sur l'onglet
    switch (tab) {
      case 'home':
        // Retour à l'accueil
        setSelectedCategory(null);
        setSelectedGovernorate(null);
        setSelectedDistrict(null);
        setSearchQuery('');
        break;
      case 'search':
        // Focus sur la recherche
        (document.querySelector('input[type="text"]') as HTMLElement)?.focus();
        break;
      case 'favorites':
        // Afficher les favoris (à implémenter)
        break;
      case 'profile':
        // Afficher le profil (à implémenter)
        break;
    }
  };

  // Demander la permission pour les notifications au premier chargement
  React.useEffect(() => {
    const askForNotificationPermission = async () => {
      if ('Notification' in window && Notification.permission === 'default') {
        await requestNotificationPermission();
      }
    };

    askForNotificationPermission();
  }, [requestNotificationPermission]);

  return (
    <div className={`min-h-screen bg-gradient-to-br from-gray-50 via-blue-50/30 to-purple-50/30 ${isRTL ? 'rtl' : 'ltr'} pb-16 md:pb-0`} dir={isRTL ? 'rtl' : 'ltr'}>
      <PerformanceOptimizer />
      <SEOHead 
        title={selectedCategory ? `${t('establishments')} ${t(selectedCategory)} - daliltounes` : 'daliltounes - Guide des établissements tunisiens'}
        description={selectedCategory ? `Découvrez les meilleurs établissements ${t(selectedCategory)} en Tunisie` : 'Votre annuaire complet des services et métiers en Tunisie. Trouvez médecins, restaurants, artisans et plus.'}
        keywords={`daliltounes, tunisie, ${selectedCategory ? t(selectedCategory) : 'établissements'}, ${selectedGovernorate ? t(selectedGovernorate) : 'guide'}`}
      />

      {/* Skip to main content link for accessibility */}
      <a href="#main-content" className="skip-link">
        Aller au contenu principal
      </a>

      <Header 
        onMenuToggle={() => setIsMenuOpen(!isMenuOpen)} 
        isMenuOpen={isMenuOpen}
        onSuggestClick={handleSuggestClick}
      />

      <Hero />

      <PullToRefresh onRefresh={handleRefresh}>
        <main id="main-content" className="container mx-auto px-4 py-8">

          {/* Indicateur de chargement Supabase */}
          {supabaseLoading && (
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-6">
              <div className="flex items-center space-x-3">
                <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-blue-600"></div>
                <span className="text-blue-800 font-medium">
                  Chargement des établissements depuis Supabase...
                </span>
              </div>
            </div>
          )}

          {/* Message d'erreur Supabase */}
          {supabaseError && (
            <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 mb-6">
              <div className="flex items-center space-x-3">
                <span className="text-yellow-600">⚠️</span>
                <div>
                  <p className="text-yellow-800 font-medium">Problème de connexion Supabase</p>
                  <p className="text-yellow-700 text-sm">{supabaseError}</p>
                  {!isSupabaseConfigured && (
                    <p className="text-yellow-700 text-sm mt-1">
                      Configurez vos variables d'environnement Supabase pour voir vos données.
                    </p>
                  )}
                </div>
              </div>
            </div>
          )}

          <div className="max-w-5xl mx-auto mb-12">
            <SearchBar 
              onSearch={handleSearch} 
              onFilterChange={handleFilterChange}
              onEstablishmentSelect={handleEstablishmentSelect}
              establishments={supabaseEstablishments}
            />
          </div>

          {/* Filtres actifs */}
          <FilterChips
            filters={searchFilters}
            onRemoveFilter={handleRemoveFilter}
            onClearAll={handleClearAllFilters}
          />

          <GovernorateFilter 
            selectedGovernorate={selectedGovernorate}
            onGovernorateChange={handleGovernorateChange}
          />

          <DistrictFilter 
            selectedDistrict={selectedDistrict}
            onDistrictChange={handleDistrictChange}
            show={selectedGovernorate === 'tunis'}
          />

          <CategoryFilter 
            selectedCategory={selectedCategory} 
            onCategoryChange={handleCategoryChange} 
          />

          <div className="mt-8">
            <div className={`flex items-center justify-between mb-6 ${isRTL ? 'flex-row-reverse' : ''}`}>
              <div>
                <h2 className={`text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent ${isRTL ? 'text-right' : 'text-left'}`}>
                  {selectedCategory ? `${t('establishments')} ${t(selectedCategory)} - daliltounes` : t('establishments')}
                  {selectedGovernorate && ` - ${t(selectedGovernorate)}`}
                  {selectedDistrict && ` - ${t(selectedDistrict)}`}
                </h2>
                <p className="text-gray-600 mt-1">
                  {filteredEstablishments.length} résultat{filteredEstablishments.length !== 1 ? 's' : ''} trouvé{filteredEstablishments.length !== 1 ? 's' : ''}
                  {isSupabaseConfigured && (
                    <span className="text-green-600 ml-2">🗄️ Données Supabase</span>
                  )}
                </p>
              </div>
              <div className={`flex items-center space-x-3 ${isRTL ? 'space-x-reverse' : ''}`}>
                <button
                  onClick={() => setShowAdvancedFilters(true)}
                  className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium"
                >
                  Filtres avancés
                </button>
                <button
                  onClick={() => setShowMap(!showMap)}
                  className={`px-4 py-2 rounded-full font-semibold transition-colors ${
                    showMap 
                      ? 'bg-blue-600 text-white' 
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {showMap ? 'Liste' : 'Carte'}
                </button>
              </div>
            </div>

            {/* Options de tri */}
            {!showMap && filteredEstablishments.length > 0 && (
              <div className="mb-6">
                <SortOptions
                  sortBy={sortBy}
                  sortOrder={sortOrder}
                  onSortChange={handleSortChange}
                />
              </div>
            )}

            {showMap ? (
              <MapView
                establishments={filteredEstablishments}
                selectedEstablishment={selectedEstablishment}
                onEstablishmentSelect={handleEstablishmentSelect}
              />
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredEstablishments.map(establishment => (
                  <EstablishmentCard
                    key={establishment.id}
                    establishment={establishment}
                    onSelect={handleEstablishmentSelect}
                  />
                ))}
              </div>
            )}

            {filteredEstablishments.length === 0 && (
              <div className="text-center py-20 bg-white rounded-2xl shadow-xl">
                <div className="text-gray-400 text-2xl mb-6 font-bold">
                  Aucun établissement trouvé
                </div>
                <p className="text-gray-600 text-lg">
                  Essayez de modifier votre recherche ou vos filtres
                </p>
                <button 
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedCategory(null);
                    setSelectedGovernorate(null);
                    setSelectedDistrict(null);
                  }}
                  className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Réinitialiser les filtres
                </button>
              </div>
            )}
          </div>
        </main>
      </PullToRefresh>

      <SubscriptionPlansPlaceholder />
      <div data-section="subscriptions">
        <SubscriptionPlansPlaceholder />
      </div>
      <Footer />

      {selectedEstablishment && (
        <EstablishmentDetails
          establishment={selectedEstablishment}
          onClose={handleCloseDetails}
        />
      )}

      {showSuggestionForm && (
        <SuggestionForm onClose={handleCloseSuggestionForm} />
      )}

{showSetupInstructions && (
     <SetupInstructions 
       onClose={handleCloseSetup}
      />
)}

      {/* Filtres avancés */}
      <AdvancedFilters
        isOpen={showAdvancedFilters}
        onClose={() => setShowAdvancedFilters(false)}
        onApplyFilters={handleFilterChange}
        currentFilters={searchFilters}
      />

      {/* Composants PWA */}
      <PWAInstallPrompt />
      <OfflineIndicator />
      <MobileNavigation 
        activeTab={activeTab}
        onTabChange={handleTabChange}
        onSuggestClick={handleSuggestClick}
      />
    </div>
  );
}

export default App;