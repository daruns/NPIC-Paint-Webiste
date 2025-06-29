'use client'
import { useState } from 'react'
import Image from 'next/image'
import Badge from './Badge'

export default function Footer() {
  const [email, setEmail] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Email submitted:', email)
  }

  return (
    <footer className="bg-primary py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-16">
            <div className='w-fill text-left'>
                <h2 className="text-4xl md:text-5xl lg:text-5xl font-bold text-custom-white mb-8 leading-tight">
                    What are you waiting for?
                </h2>
                <div className="text-custom-white/90 text-lg text-left md:text-xl mb-12 max-w-2xl">
                    Register now to get the best delivery experience for you and your clients in Iraq!
                </div>
            </div>

          <form onSubmit={handleSubmit} className="md:max-w-md mb-16">
            <div className=" text-left md:flex md:space-y-0 space-y-6 gap-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
                className="w-full md:min-w-80 h-15 flex-1 px-6 py-2 rounded-full custom-text-gray placeholder-gray-500 bg-white border-none outline-none text-lg"
                required
              />
              <button
                type="submit"
                className="w-full md:min-w-fit h-15 bg-black text-white px-8 py-4 rounded-full font-medium hover:bg-gray-800 transition-colors text-lg"
              >
                register now
              </button>
            </div>
          </form>
        </div>

        <div className='md:flex md:justify-between'>
          <div className="grid grid-cols-2 w-full md:grid-cols-3 gap-8 md:gap-12 mb-16">
            <div className="col-span-2 md:col-span-1">
              <div className="bg-custom-white p-4 rounded-lg inline-block">
                <Image
                  src="/logo-header.jpg"
                  alt="PAINT Logo"
                  width={120}
                  height={36}
                  className="rounded"
                />
              </div>
            </div>

            <div className="">
              <h3 className="text-custom-white font-bold text-xl mb-6">The company</h3>
              <ul className="space-y-4">
                <li>
                  <a href="#" className="text-custom-white/80 hover:text-custom-white transition-colors text-lg">
                    Who are we
                  </a>
                </li>
                <li>
                  <a href="#" className="text-custom-white/80 hover:text-custom-white transition-colors text-lg">
                    Services
                  </a>
                </li>
                <li>
                  <div className="flex items-center space-x-2">
                    <a href="#" className="text-custom-white/80 hover:text-custom-white transition-colors text-lg">
                      Jobs
                    </a>
                    <Badge variant="purple" size="sm" className="bg-custom-white text-custom-black">
                      12
                    </Badge>
                  </div>
                </li>
                <li>
                  <a href="#" className="text-custom-white/80 hover:text-custom-white transition-colors text-lg">
                    Branches
                  </a>
                </li>
              </ul>
            </div>

            <div className="">
              <h3 className="text-custom-white font-bold text-xl mb-6">Help center</h3>
              <ul className="space-y-4">
                <li>
                  <a href="#" className="text-custom-white/80 hover:text-custom-white transition-colors text-lg">
                    Common questions
                  </a>
                </li>
                <li>
                  <a href="#" className="text-custom-white/80 hover:text-custom-white transition-colors text-lg">
                    Contact us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-custom-white/80 hover:text-custom-white transition-colors text-lg">
                    Register as merchant
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="md:col-span-3">
            <div className="space-y-4">
              <a 
                href="#" 
                className="min-w-50 flex items-center space-x-4 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-1 transition-colors group"
              >
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </div>
                <span className="text-white text-lg font-medium">Facebook</span>
              </a>

              <a 
                href="#" 
                className="min-w-50 flex items-center space-x-4 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-1 transition-colors group"
              >
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.346-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z"/>
                  </svg>
                </div>
                <span className="text-white text-lg font-medium">Instagram</span>
              </a>

              <a 
                href="#" 
                className="min-w-50 flex items-center space-x-4 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-1 transition-colors group"
              >
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </div>
                <span className="text-white text-lg font-medium">LinkedIn</span>
              </a>
            </div>

        </div>
        </div>

        <div className="text-center pt-8">
          <div className="text-white/70 text-md md:text-sm">
            © 2024 Leader Express Delivery Company. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  )
}