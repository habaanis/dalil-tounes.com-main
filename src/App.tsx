import React, { useState } from 'react'
import Hero from './components/Hero'
import EstablishmentCard from './components/EstablishmentCard'
import Footer from './components/Footer'

// Exemple de données pour tester l'affichage
const mockEstablishments = [
  {
    id: '1',
    name: 'Restaurant Tunisien',
    imageUrl: '/images/restaurant1.jpg',
    category: 'Restauration',
  },
  {
    id: '2',
    name: 'Pharmacie Centrale',
    imageUrl: '/images/pharmacie1.jpg',
    category: 'Santé',
  },
]

function App() {
  const [activeTab, setActiveTab] = useState('home')

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-600 via-white to-green-600">
      
      {/* Section Hero */}
      <Hero />

      {/* Section principale */}
      <main className="flex-1 container mx-auto px-4 py-8">
        <h2 className="text-center text-3xl font-bold mb-8 text-gray-800">
          Bienvenue sur Dalil-Tounes
        </h2>

        {/* Liste des établissements */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockEstablishments.map(est => (
            <EstablishmentCard 
              key={est.id} 
              establishment={est} 
              className="max-w-full h-48 object-cover rounded-lg"
            />
          ))}
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default App
