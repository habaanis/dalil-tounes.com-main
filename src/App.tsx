import Hero from './components/Hero';
import React, { useState, useMemo } from 'react'

import AdvancedFilters, { FilterOptions } from './components/AdvancedFilters'
import FilterChips from './components/FilterChips'
import SortOptions from './components/SortOptions'
import CategoryFilter from './components/CategoryFilter'
import GovernorateFilter from './components/GovernorateFilter'
import DistrictFilter from './components/DistrictFilter'
import EstablishmentCard from './components/EstablishmentCard'
import EstablishmentDetails from './components/EstablishmentDetails'
import SuggestionForm from './components/SuggestionForm'
import SubscriptionPlansPlaceholder from './components/SubscriptionPlansPlaceholder'
import PWAInstallPrompt from './components/PWAInstallPrompt'
import OfflineIndicator from './components/OfflineIndicator'
import MobileNavigation from './components/MobileNavigation'
import PullToRefresh from './components/PullToRefresh'
import SEOHead from './components/SEOHead'
import Footer from './components/Footer'
import MapView from './components/MapView'
import { useSupabaseData } from './hooks/useSupabaseData'
import PerformanceOptimizer from './components/PerformanceOptimizer'
import { Establishment, EstablishmentCategory, Governorate, TunisDistrict } from './types'
import { useLanguage } from './hooks/useLanguage'
import { useDebounce } from './hooks/useDebounce'
import { useSearchIndex, searchInIndex } from './hooks/useSearchIndex'
import { usePWA } from './hooks/usePWA'

// ----------------------------
// COMPOSANT PRINCIPAL
// ----------------------------
function App() {
  // ----------------------------
  // STATES
  // ----------------------------
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [searchFilters, setSearchFilters] = useState<FilterOptions>({})
  const [showAdvancedFilters, setShowAdvancedFilters] = useState(false)
  const [sortBy, setSortBy] = useState('relevance')
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc')
  const [selectedCategory, setSelectedCategory] = useState<EstablishmentCategory | null>(null)
  const [selectedGovernorate, setSelectedGovernorate] = useState<Governorate | null>(null)
  const [selectedDistrict, setSelectedDistrict] = useState<TunisDistrict | null>(null)
  const [selectedEstablishment, setSelectedEstablishment] = useState<Establishment | null>(null)
  const [showSuggestionForm, setShowSuggestionForm] = useState(false)
  const [activeTab, setActiveTab] = useState('home')
  const [, setIsRefreshing] = useState(false)
  const [showMap, setShowMap] = useState(false)
  const { t, isRTL } = useLanguage()
  const { requestNotificationPermission } = usePWA()

  // ----------------------------
  // Supabase
  // ----------------------------
  const { 
    establishments: supabaseEstablishments, 
    loading: supabaseLoading, 
    error: supabaseError,
    isSupabaseConfigured,
    refreshData 
  } = useSupabaseData()

  // ----------------------------
  // Optimisation de la recherche
  // ----------------------------
  const debouncedSearchQuery = useDebounce(searchQuery, 200)
  const searchIndex = useSearchIndex(supabaseEstablishments)

  // ----------------------------
  // FILTRAGE & TRI
  // ----------------------------
  const filteredEstablishments = useMemo(() => {
    let filtered: Establishment[] = supabaseEstablishments
    if (debouncedSearchQuery && debouncedSearchQuery.length >= 2) {
      const searchResults = searchInIndex(searchIndex, debouncedSearchQuery)
      filtered = searchResults.length > 0 ? searchResults : filtered.filter(e =>
        e.name.toLowerCase().includes(debouncedSearchQuery.toLowerCase()) ||
        e.description.toLowerCase().includes(debouncedSearchQuery.toLowerCase())
      )
    }

    filtered = filtered.filter(est => {
      const matchesCategory = selectedCategory === null || est.category === selectedCategory
      const matchesGovernorate = selectedGovernorate === null || est.governorate === selectedGovernorate
      const matchesDistrict = selectedDistrict === null || true
      return matchesCategory && matchesGovernorate && matchesDistrict
    })

    if (sortBy === 'rating') filtered.sort((a,b) => sortOrder==='asc'? a.rating-b.rating : b.rating-a.rating)
    return filtered
  }, [debouncedSearchQuery, selectedCategory, selectedGovernorate, selectedDistrict, searchFilters, sortBy, sortOrder, searchIndex, supabaseEstablishments])

  // ----------------------------
  // HANDLERS
  // ----------------------------
  const handleSearch = (query: string) => setSearchQuery(query)
  const handleFilterChange = (filters: FilterOptions) => setSearchFilters(filters)
  const handleTabChange = (tab: string) => setActiveTab(tab)

  // ----------------------------
  // Effet pour notifications
  // ----------------------------
  React.useEffect(() => {
    const askForNotificationPermission = async () => {
      if ('Notification' in window && Notification.permission === 'default') {
        await requestNotificationPermission()
      }
    }
    askForNotificationPermission()
  }, [requestNotificationPermission])

  // ----------------------------
  // RENDER
  // ----------------------------
  return (
    <div className={`min-h-screen bg-gradient-to-br from-gray-50 via-blue-50/30 to-purple-50/30 ${isRTL?'rtl':'ltr'}`} dir={isRTL?'rtl':'ltr'}>
      <SEOHead />
      <PullToRefresh onRefresh={() => setIsRefreshing(true)} />

      {/* Section principale */}
      <main className="flex-1">
        {/* Hero / Accueil */}
        <section className="py-6">
          {/* Exemple: composant Hero */}
          {/* <Hero /> */}
        </section>

        {/* Filtres */}
        <section className="px-4">
          <FilterChips 
            filters={searchFilters} 
            onChange={handleFilterChange} 
            onClear={() => setSearchFilters({})} 
          />

          <CategoryFilter 
            selected={selectedCategory}
            onSelect={setSelectedCategory}
          />

          <GovernorateFilter 
            selected={selectedGovernorate}
            onSelect={setSelectedGovernorate}
          />

          <DistrictFilter 
            selected={selectedDistrict}
            onSelect={setSelectedDistrict}
          />

          <SortOptions 
            sortBy={sortBy}
            sortOrder={sortOrder}
            onChange={(s,o) => { setSortBy(s); setSortOrder(o) }}
          />
        </section>

        {/* Résultats */}
        <section className="grid gap-4 p-4">
          {filteredEstablishments.map(est => (
            <EstablishmentCard 
              key={est.id} 
              establishment={est} 
              onClick={() => setSelectedEstablishment(est)} 
            />
          ))}
        </section>

        {/* Détails d'un établissement */}
        {selectedEstablishment && (
          <EstablishmentDetails 
            establishment={selectedEstablishment} 
            onClose={() => setSelectedEstablishment(null)} 
          />
        )}

        {/* Formulaire suggestion */}
        {showSuggestionForm && (
          <SuggestionForm onClose={() => setShowSuggestionForm(false)} />
        )}
      </main>

      <OfflineIndicator />
      <MobileNavigation 
        activeTab={activeTab}
        onTabChange={handleTabChange}
        onSuggestClick={() => setShowSuggestionForm(true)}
      />
      <Footer />
    </div>
  )
}

// ----------------------------
// EXPORT
// ----------------------------
export default App

