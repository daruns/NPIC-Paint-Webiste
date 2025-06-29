'use client'
import { useEffect, useState } from 'react'

export default function CompanyPhilosophy() {
  const [isHydrated, setIsHydrated] = useState(false)
  const [animatedNumbers, setAnimatedNumbers] = useState({
    clients: 0,
    branches: 0,
    employees: 0,
    salesRep: 0
  })

  const finalNumbers = {
    clients: 1200,
    branches: 20,
    employees: 200,
    salesRep: 315
  }

  useEffect(() => {
    setIsHydrated(true)
  }, [])

  useEffect(() => {
    if (!isHydrated) return

    const duration = 2000
    const steps = 60
    const interval = duration / steps

    let step = 0
    const timer = setInterval(() => {
      step++
      const progress = step / steps

      setAnimatedNumbers({
        clients: Math.floor(finalNumbers.clients * progress),
        branches: Math.floor(finalNumbers.branches * progress),
        employees: Math.floor(finalNumbers.employees * progress),
        salesRep: Math.floor(finalNumbers.salesRep * progress)
      })

      if (step >= steps) {
        clearInterval(timer)
        setAnimatedNumbers(finalNumbers)
      }
    }, interval)

    return () => clearInterval(timer)
  }, [isHydrated])

  const stats = [
    {
      number: isHydrated ? animatedNumbers.branches : finalNumbers.branches,
      suffix: '+',
      label: 'Branches'
    },
    {
      number: isHydrated ? animatedNumbers.clients : finalNumbers.clients,
      suffix: '+',
      label: 'Clients'
    },
    {
      number: isHydrated ? animatedNumbers.salesRep : finalNumbers.salesRep,
      suffix: '+',
      label: 'Sales Representative'
    },
    {
      number: isHydrated ? animatedNumbers.employees : finalNumbers.employees,
      suffix: '+',
      label: 'Number of Employees'
    }
  ]

  return (
    <section className="bg-custom-black py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center mb-8">
          <div className="w-2 h-2 bg-primary rounded-full mr-4"></div>
          <span className="text-primary text-lg font-medium">The company's philosophy</span>
          <div className="flex-1 h-px bg-gray-700 ml-4"></div>
        </div>
        <div className="grid md:grid-cols-[1fr_auto] gap-16 items-start">
          <div className="space-y-8 max-w-150">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="text-primary">We bear the responsibility of developing the sector.</span>
            </h2>

            <div className="space-y-6 custom-text-gray text-2xl leading-relaxed">
                Elevate your brand with our comprehensive marketing solutions, including Digital Marketing, Content Creation, and Social Media Strategy. Enhance visibility through expert SEO and PPC management,
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-1 gap-8 md:space-y-12 md:gap-0">
            {stats.map((stat, index) => (
              <div key={index} className="text-left whitespace-nowrap">
                <div className="text-4xl md:text-6xl lg:text-6xl font-bold text-custom-white mb-2">
                  {stat.number.toLocaleString()}{stat.suffix}
                </div>
                <div className="custom-text-gray text-base md:text-xl">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}