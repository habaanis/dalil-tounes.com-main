import React, { useEffect, useState } from 'react'
import { supabase } from './supabase' // ton supabase.ts

export default function TestSupabase() {
  const [status, setStatus] = useState('…') // état pour afficher le résultat

  useEffect(() => {
    // useEffect = fonction qui s'exécute quand le composant est monté
    async function checkConnection() {
      try {
        const { data, error } = await supabase
          .from('base de donne établissement') // remplace par une table existante
          .select('*')
        if (error) {
          setStatus(`Erreur : ${error.message}`)
        } else {
          setStatus('Connexion réussie !')
          console.log('Données Supabase :', data)
        }
      } catch (err) {
        setStatus(`Erreur inattendue : ${err}`)
      }
    }

    checkConnection()
  }, []) // le tableau vide [] = exécuter seulement une fois au montage

  return (
    <div>
      <h2>Test Supabase</h2>
      <p>{status}</p>
    </div>
  )
}
