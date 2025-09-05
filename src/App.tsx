import React, { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Footer from './components/Footer'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <Header 
        isMenuOpen={isMenuOpen} 
        onMenuToggle={() => setIsMenuOpen(!isMenuOpen)} 
      />

      {/* Section principale */}
      <main className="flex-1">
        <Hero />
        <div className="text-center py-8">
          <h2>Bienvenue sur Dalil-Tounes</h2>
          <p>Le contenu du site sera ajouté progressivement.</p>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default App



