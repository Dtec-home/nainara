import { CoreValue } from '@/types'
import React from 'react'

const About: React.FC = () => {
  const values: CoreValue[] = [
    { letter: 'E', value: 'Efficiency' },
    { letter: 'V', value: 'Vigor' },
    { letter: 'E', value: 'Excellence' },
    { letter: 'N', value: 'Nerve' },
    { letter: 'T', value: 'Teamwork' }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">About Us</h2>
          <p className="text-gray-600 mb-12">
            We provide bespoke event planning and management services that excite, engage and inspire. 
            Our client-led approach combines ethical creativity with passion and craftsmanship.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-purple-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Mission</h3>
              <p>To make our clients successful through building relationships and creating memorable experiences.</p>
            </div>
            <div className="bg-purple-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Vision</h3>
              <p>To be the industry leader in innovatively designing and executing memorable and successful events that meet our client&apos;s specific needs.</p>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {values.map((item) => (
              <div key={item.letter} className="bg-purple-100 p-4 rounded-lg">
                <div className="text-2xl font-bold text-purple-900 mb-2">{item.letter}</div>
                <div className="text-sm">{item.value}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About;
