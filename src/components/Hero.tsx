import React from 'react'

export default function Hero() {
  return (
    <section className="relative bg-red-600 text-white py-16 px-4 text-center">
      <h1 className="text-4xl md:text-5xl font-bold mb-4">Dalil-Tounes</h1>
      <p className="text-lg md:text-xl max-w-2xl mx-auto">
        Votre guide complet des établissements tunisiens : restaurants, pharmacies, services et plus.
      </p>
      <img 
        src="/images/tunisia-flag.png" 
        alt="Tunisie" 
        className="mx-auto mt-8 w-48 h-auto rounded-lg shadow-lg"
      />
    </section>
  )
}


