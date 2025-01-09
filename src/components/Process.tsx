import { ProcessStep } from '@/types'
import React from 'react'

const Process: React.FC = () => {
  const steps: ProcessStep[] = [
    {
      phase: 'CONCEPTION',
      items: [
        'Define goals and objectives',
        'Develop an event blue print and measure of success',
        'Work plans and timelines',
        'Build a team',
        'Establish a budget'
      ]
    },
    {
      phase: 'PLANNING',
      items: [
        'Develop a checklist',
        'Develop event branding',
        'Supplier shortlisting and contract negotiation',
        'Create a marketing and promotional plan',
        'Event layout approvals'
      ]
    },
    {
      phase: 'EXECUTION',
      items: [
        'Event logistics',
        'Event coordination',
        'Event set up',
        'Managing the day of the event',
        'Event valuation'
      ]
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-16">Our Process</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={step.phase} className="relative">
              <div className="bg-purple-100 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-purple-900">{step.phase}</h3>
                <ul className="space-y-3">
                  {step.items.map((item) => (
                    <li key={item} className="flex items-start">
                      <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-2"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                  <span className="text-2xl text-purple-500">→</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Process;
