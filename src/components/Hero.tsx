import React from 'react';

function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-red-600 to-red-700 text-white py-20 px-6 text-center rounded-2xl shadow-xl overflow-hidden">
      {/* Fond décoratif discret */}
      <div className="absolute inset-0 opacity-10">
        {/* Drapeau tunisien en background */}
        <div
          className="w-full h-full bg-no-repeat bg-center bg-contain"
          style={{
            backgroundImage: "url('https://upload.wikimedia.org/wikipedia/commons/c/ce/Flag_of_Tunisia.svg')",
          }}
        ></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
          Bienvenue sur <span className="text-white">Dalil-Tounes</span>
        </h1>
        <p className="text-lg md:text-xl mb-8 text-gray-100">
          Le guide digital de la Tunisie 🇹🇳 <br />
          Retrouvez facilement commerces, services et établissements partout dans le pays.
        </p>
        <div className="flex justify-center gap-4">
          <a
            href="#explorer"
            className="bg-white hover:bg-gray-100 text-red-700 font-semibold px-6 py-3 rounded-full shadow-lg transition"
          >
            Explorer
          </a>
          <a
            href="#suggestion"
            className="bg-red-800 hover:bg-red-900 text-white font-semibold px-6 py-3 rounded-full shadow-lg transition"
          >
            Suggérer un établissement
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
