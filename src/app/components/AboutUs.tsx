import Image from 'next/image'
import Button from './Button'

export default function AboutUs() {
  return (
    <section 
      className="bg-custom-black relative overflow-hidden min-h-screen md:min-h-[600px] md:bg-cover bg-size-[302%] md:bg-left aboutus-custom-bg-position md:bg-x-auto bg-no-repeat"
      style={{ backgroundImage: "url('/about-bg.png')" }}
    >

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20 md:py-40 flex items-center min-h-screen md:min-h-[600px]">
        <div className="text-center space-y-8">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-custom-white">
            About us
          </h2>
          <div className="space-y-6 text-lg md:text-xl leading-relaxed text-gray-300 max-w-4xl mx-auto">
            <p>
              Welcome to{' '}
              <span className="text-primary font-semibold">Focus Marketing Solutions!</span>{' '}
              We're a creative team dedicated to driving your business forward with innovative marketing strategies. From digital marketing to social media management, we're here to help you succeed.{' '}
              <span className="text-primary font-semibold">Let's build something extraordinary together.</span>
            </p>
          </div>
          <div className="pt-8">
            <Button variant="outline" size="lg" className="md:w-auto w-full border-primary text-primary hover:bg-primary hover:text-custom-white">
              Read more
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}