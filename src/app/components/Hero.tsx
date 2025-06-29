import Image from 'next/image'

export default function Hero() {
  return (
    <section className="h-full text-white flex relative items-center overflow-hidden my-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-4">
        <div className="grid lg:grid-rows-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="md:text-left text-center text-[32px] md:text-[50px] font-bold leading-tight">
              Transform your business with our 
              <br className='md:hidden' />
              <span className="hero-title-gradient"> Creative Marketing Solutions!</span>
            </h1>

            <p className="text-gray-300 text-md md:text-md leading-relaxed max-w-xl">
              Welcome to Focus Marketing Solutions! We're a creative team dedicated to driving your business forward with innovative marketing strategies. From digital marketing to social media management, we're here to help you succeed. Let's build something extraordinary together
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-full font-medium transition-colors">
                Join us
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-black px-8 py-3 rounded-full font-medium transition-colors">
                Contact us
              </button>
            </div>
            <div className="hidden lg:grid pb-2 pt-20">
              <div className="relative h-48 w-100 rounded-lg overflow-hidden">
                <Image
                  src="/hero-glass.jpg"
                  alt="Glass architecture"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
          <div className="hidden lg:grid absolute grid grid-row-2 top-10 gap-y-3.5 right-0 w-2/5">
            <div className="relative lg:h-115 xl:h-130 rounded-l-xl overflow-hidden">
              <Image
                src="/hero-buildings.jpg"
                alt="Modern office buildings"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-60 w-75 rounded-lg overflow-hidden">
              <Image
                src="/hero-handshake.jpg"
                alt="Business handshake"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div className="hidden lg:grid absolute bottom-0 left-0 right-0 h-[300px] bg-gradient-to-t from-[#161616] to-transparent pointer-events-none"></div>
        </div>
      </div>
    </section>
  )
}