import React from 'react'

const Clients: React.FC = () => {
  const clients: string[] = [
    'Microsoft',
    'Taimba',
    'Vaal real estate',
    'AAD Real Estate',
    'LVCT',
    'EX – Momentum',
    'Studylink',
    'ADRA Kenya'
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-16">Satisfied Customers</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {clients.map((client) => (
            <div key={client} className="bg-white p-6 rounded-lg shadow text-center">
              <p className="font-semibold">{client}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Clients;