'use client'
import { useState } from 'react'
import Image from 'next/image'

export default function ClientOpinions() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const testimonials = [
    {
      id: 1,
      name: 'Jonathan Sweeney',
      avatar: '/client-1.png',
      testimonial: '"I love that model. I [used to have to] call all around, and I absolutely love that model that you could save me the time and headache of doing that."'
    },
    {
      id: 2,
      name: 'Barbara Cook',
      avatar: '/client-2.png',
      testimonial: '"I am so happy with your company. Ever since my insurer switched to you, everything and everybody I\'ve spoken to has been extremely, extremely pleasant, helpful, and they listen to my concerns instead of just saying okay!"'
    },
    {
      id: 3,
      name: 'Mary Rogers',
      avatar: '/client-3.png',
      testimonial: '"I just want to thank you for the great job you did during my transition to oxygen. You unraveled all the confusion and the new company is wonderful."'
    },
    {
      id: 4,
      name: 'David Wilson',
      avatar: '/client-4.png',
      testimonial: '"Outstanding service and support. The team went above and beyond to ensure our project was successful. Highly recommended for any business needs."'
    },
    {
      id: 5,
      name: 'Sarah Johnson',
      avatar: '/client-4.png',
      testimonial: '"Professional, reliable, and innovative solutions. They transformed our business operations completely. We couldn\'t be happier with the results."'
    }
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  const getVisibleTestimonials = () => {
    const visible = []
    for (let i = 0; i < 3; i++) {
      const index = (currentSlide + i) % testimonials.length
      visible.push(testimonials[index])
    }
    return visible
  }

  return (
    <section className="bg-primary w-full mb-50 py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-custom-white mb-8">
            Our clients openions
          </h2>
        </div>

        <div className="hidden lg:block">
          <div className="grid grid-cols-3 gap-8 mb-12">
            {getVisibleTestimonials().map((testimonial, index) => (
              <div key={testimonial.id} className="bg-custom-black rounded-2xl p-8 relative">
                <div className="absolute top-6 right-6 w-8 h-8 bg-teal-400 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-gray-900" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                  </svg>
                </div>

                <div className="flex items-center mb-6">
                  <div className="relative">
                    <Image
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      width={60}
                      height={60}
                      className="rounded-full object-cover"
                    />
                    <div className="absolute -top-1 -right-1 w-6 h-6 bg-teal-400 rounded-full flex items-center justify-center">
                      <svg className="w-3 h-3 text-gray-900" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-custom-white font-bold text-lg">{testimonial.name}</h3>
                  </div>
                </div>

                <p className="text-gray-300 leading-relaxed">
                  {testimonial.testimonial}
                </p>
              </div>
            ))}
          </div>

          <div className="flex justify-end">
            <button
              onClick={nextSlide}
              className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors"
            >
              <svg className="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        <div className="lg:hidden">
          <div className="bg-gray-900 rounded-2xl p-8 relative mb-8">
            <div className="absolute top-6 right-6 w-8 h-8 bg-teal-400 rounded-full flex items-center justify-center">
              <svg className="w-4 h-4 text-gray-900" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
              </svg>
            </div>

            <div className="flex items-center mb-6">
              <div className="relative">
                <Image
                  src={testimonials[currentSlide].avatar}
                  alt={testimonials[currentSlide].name}
                  width={80}
                  height={80}
                  className="rounded-full object-cover"
                />
                <div className="absolute -top-1 -right-1 w-6 h-6 bg-teal-400 rounded-full flex items-center justify-center">
                  <svg className="w-3 h-3 text-gray-900" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                  </svg>
                </div>
              </div>
            </div>

            <h3 className="text-custom-white font-bold text-2xl mb-6">
              {testimonials[currentSlide].name}
            </h3>

            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              {testimonials[currentSlide].testimonial}
            </p>
          </div>

          <div className="flex justify-between items-center">
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    currentSlide === index ? 'bg-custom-white' : 'bg-custom-white/30'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors"
            >
              <svg className="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}