'use client'
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Badge from '../components/Badge'

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About us', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Branches', href: '/branches' },
    { name: 'Jobs', href: '/jobs', badge: 12 },
    { name: 'Contact us', href: '/contact' },
  ]

  return (
    <header className="absolute sticky top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto lg:my-5">
        <div className="hidden lg:flex items-center justify-between w-full bg-black/20 backdrop-blur-sm rounded-full px-4 py-4">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Image
                src="/logo-header.jpg"
                alt="PAINT Logo"
                width={135}
                height={40}
                className="rounded"
                priority
              />
            </Link>
          </div>

          <nav className="flex items-center space-x-6">
            {navItems.filter(item => item.name !== 'Contact us').map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-white flex items-center space-x-2 hover:text-gray-300 font-medium transition-colors"
              >
                {item.name}
                <Badge variant="purple" size="sm" show={!!item.badge}>
                  {item.badge}
                </Badge>
              </Link>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            <button className="border-2 border-white text-white hover:bg-white hover:text-black px-6 py-2 rounded-full font-medium transition-colors">
              Contact us
            </button>
            <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-full font-medium transition-colors">
              Join us
            </button>
          </div>
        </div>
      </div>

      <div className="lg:hidden flex items-center bg-black/20 backdrop-blur-sm justify-between w-full p-4">
          <div className="lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white p-2"
            >
              <div className="w-6 h-6 flex flex-col justify-center space-y-1">
                <div className={`w-full h-0.5 bg-white transition-transform duration-300 ${
                  isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''
                }`}></div>
                <div className={`w-full h-0.5 bg-white transition-opacity duration-300 ${
                  isMobileMenuOpen ? 'opacity-0' : ''
                }`}></div>
                <div className={`w-full h-0.5 bg-white transition-transform duration-300 ${
                  isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
                }`}></div>
              </div>
            </button>
          </div>

          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Image
                src="/logo-header.jpg"
                alt="PAINT Logo"
                width={100}
                height={30}
                className="rounded"
                priority
              />
            </Link>
          </div>
        </div>
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-black/20 backdrop-blur-sm w-full">

            <div className="p-6">
              <nav className="flex flex-col space-y-6">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-white text-xl font-medium hover:text-purple-400 transition-colors flex items-center justify-between"
                  >
                    <span className='flex items-center'>{item.name}
                    <Badge variant="purple" size="sm" show={!!item.badge}>
                      {item.badge}
                    </Badge>
                    </span>
                  </Link>
                ))}
                
                <div className="flex flex-col space-y-4 mt-8 pt-8 border-t border-gray-800">
                  <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-full font-medium transition-colors">
                    Join us
                  </button>
                  <button className="border-2 border-white text-white hover:bg-white hover:text-black px-8 py-3 rounded-full font-medium transition-colors">
                    Contact us
                  </button>
                </div>
              </nav>
            </div>
          </div>
        )}
    </header>
  )
}