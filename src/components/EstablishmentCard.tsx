import React from 'react'

interface Establishment {
  id: string
  name: string
  imageUrl: string
  category: string
}

interface Props {
  establishment: Establishment
  className?: string
}

export default function EstablishmentCard({ establishment, className }: Props) {
  return (
    <div className={`bg-white rounded-lg shadow-md overflow-hidden ${className}`}>
      <img 
        src={establishment.imageUrl} 
        alt={establishment.name} 
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold">{establishment.name}</h3>
        <p className="text-gray-600">{establishment.category}</p>
      </div>
    </div>
  )
}
