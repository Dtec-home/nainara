import { ServiceType } from '@/types'
import React from 'react'

const Services: React.FC = () => {
  const services: ServiceType[] = [
    {
      title: 'Corporate Events Management',
      items: [
        'Strategic consulting and procurement',
        'Full event management',
        'Exhibitions and tradeshows',
        'Quality virtual and hybrid conferences',
        'Event staffing'
      ]
    },
    {
      title: 'Social Celebrations',
      items: [
        'Festivals, concerts and ticketing',
        'Private parties',
        'Gala events',
        'Event models'
      ]
    },
    {
      title: 'Event Branding',
      items: [
        'Brand activations',
        'Graphic designs',
        'Corporate branding',
        'Custom Printing'
      ]
    }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-16">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.title} className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
              <ul className="space-y-2">
                {service.items.map((item) => (
                  <li key={item} className="flex items-center">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services;