'use client'
import { useState } from 'react'
import Button from './Button'
import Badge from './Badge'

export default function Pricing() {
  const [openSection, setOpenSection] = useState<string | null>('pro')

  const toggleSection = (section: string) => {

    setOpenSection(openSection === section ? section : section)
  }

  return (
    <section className="py-20">
      <div className="md:max-w-7xl md:flex md:mx-auto px-4 sm:px-6 lg:px-8">
        <div className="md:w-auto w-full text-center md:text-left mb-16 max-w-4xl">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-custom-white mb-8 leading-tight">
            Simple pricing for your Business
          </h2>
          <p className="text-gray-400 text-lg md:text-xl leading-relaxed">
            We have several powerful plans to showcase your business and get discovered as a creative entrepreneurs. Everything you need.
          </p>
        </div>

        <div className="md:w-auto w-full space-y-6">
          <div className="rounded-2xl overflow-hidden shadow-md shadow-black">
            <button
              onClick={() => toggleSection('intro')}
              className="w-full p-6 md:p-8 flex justify-between items-center text-left hover:bg-gray-800/30 transition-colors"
            >
              <h3 className="text-2xl md:text-3xl font-bold text-primary">Intro</h3>
              <div className={`w-10 h-10 bg-primary rounded-full flex items-center justify-center transform transition-transform ${
                openSection === 'intro' ? 'rotate-180' : ''
              }`}>
                <svg className="w-5 h-5 text-custom-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </button>
            {openSection === 'intro' && (
              <div className="px-6 md:px-8 pb-6 md:pb-8">
                <div className="bg-primary/10 rounded-xl p-6 border border-primary/20">
                  <p className="text-gray-300 mb-6">
                    Perfect for getting started with basic features and exploring our platform.
                  </p>
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-3xl md:text-4xl font-bold text-custom-white">$49</span>
                      <span className="text-gray-400 ml-2">/month</span>
                    </div>
                    <Button variant="outline" className="border-custom-white text-custom-white hover:bg-white hover:text-custom-black">
                      Get started
                    </Button>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="rounded-2xl overflow-hidden shadow-md shadow-black">
            <button
              onClick={() => toggleSection('base')}
              className="w-full p-6 md:p-8 flex justify-between items-center text-left hover:bg-gray-800/30 transition-colors"
            >
              <h3 className="text-2xl md:text-3xl font-bold text-primary">Base</h3>
              <div className={`w-10 h-10 bg-primary rounded-full flex items-center justify-center transform transition-transform ${
                openSection === 'base' ? 'rotate-180' : ''
              }`}>
                <svg className="w-5 h-5 text-custom-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </button>
            {openSection === 'base' && (
              <div className="px-6 md:px-8 pb-6 md:pb-8">
                <div className="bg-primary/10 rounded-xl p-6 border border-primary/20">
                  <p className="text-gray-300 mb-6">
                    Enhanced features for growing businesses with additional capabilities and support.
                  </p>
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-3xl md:text-4xl font-bold text-custom-white">$89</span>
                      <span className="text-gray-400 ml-2">/month</span>
                    </div>
                    <Button variant="outline" className="border-custom-white text-custom-white hover:bg-custom-white hover:text-custom-black">
                      Get started
                    </Button>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="bg-primary rounded-2xl shadow-md shadow-black">
            <div className="bg-custom-black rounded-xl">
              <button
                onClick={() => toggleSection('pro')}
                className="w-full p-6 md:p-8 flex justify-between items-center text-left"
              >
                <div className="flex items-center gap-4">
                  <h3 className="text-2xl md:text-3xl font-bold text-white">Pro</h3>
                  <span className="bg-white text-primary px-4 py-3 rounded-lg text-sm font-medium">
                        Save $40
                  </span>
                </div>
                <div className={`w-10 h-10 bg-white rounded-full flex items-center justify-center transform transition-transform ${
                  openSection === 'pro' ? 'rotate-180' : ''
                }`}>
                  <svg className="w-5 h-5 text-custom-black rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                  </svg>
                </div>
              </button>
              {openSection === 'pro' && (
                <div className="px-6 md:px-8 pb-6 md:pb-8">
                  <div className="bg-primary rounded-xl p-6 relative overflow-hidden">
                    <div className="absolute inset-0 opacity-20">
                      <svg className="w-full h-full" viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0,100 Q100,0 200,50 T400,75" stroke="rgba(255,255,255,0.3)" strokeWidth="2" fill="none"/>
                        <path d="M0,150 Q150,50 300,100 T400,125" stroke="rgba(255,255,255,0.2)" strokeWidth="2" fill="none"/>
                      </svg>
                    </div>
                    <div className="relative z-10">
                      <p className="text-custom-white mb-6 text-lg">
                        Pro account gives you freedom with uploading HD videos and can also meet all your business needs apasih kamu
                      </p>
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                        <div>
                          <span className="text-4xl md:text-5xl font-bold text-custom-white">$123</span>
                          <span className="text-custom-white/80 ml-2 text-lg">/month</span>
                        </div>
                        <Button 
                          variant="secondary" 
                          className="bg-white text-black rounded-lg hover:bg-gray-100 px-8 py-3 text-lg font-semibold"
                        >
                          Try 1 month
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden shadow-md shadow-black">
            <button
              onClick={() => toggleSection('enterprise')}
              className="w-full p-6 md:p-8 flex justify-between items-center text-left hover:bg-gray-800/30 transition-colors"
            >
              <h3 className="text-2xl md:text-3xl font-bold text-primary">Enterprise</h3>
              <div className={`w-10 h-10 bg-primary rounded-full flex items-center justify-center transform transition-transform ${
                openSection === 'enterprise' ? 'rotate-180' : ''
              }`}>
                <svg className="w-5 h-5 text-custom-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </button>
            {openSection === 'enterprise' && (
              <div className="px-6 md:px-8 pb-6 md:pb-8">
                <div className="bg-primary/10 rounded-xl p-6 border border-primary/20">
                  <p className="text-gray-300 mb-6">
                    Complete enterprise solution with custom features, dedicated support, and unlimited resources.
                  </p>
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-3xl md:text-4xl font-bold text-custom-white">Custom</span>
                      <span className="text-gray-400 ml-2">pricing</span>
                    </div>
                    <Button variant="outline" className="border-custom-white text-custom-white hover:bg-custom-white hover:text-custom-black">
                      Contact us
                    </Button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}