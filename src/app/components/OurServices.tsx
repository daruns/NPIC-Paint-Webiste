import Image from "next/image"

export default function OurServices() {
  const services = [
    {
      icon: "/ourservices-icons/video-making.png",
      title: "Video Making",
      description: "Random content"
    },
    {
      icon: "/ourservices-icons/branding.png", 
      title: "Branding",
      description: "Random content to fill the blank space"
    },
    {
      icon: "/ourservices-icons/marketing-strategy.png",
      title: "Marketing strategy", 
      description: "Random content to fill the blank space"
    },
    {
      icon: "/ourservices-icons/email-marketing.png",
      title: "Email Marketing",
      description: "Random content"
    },
    {
      icon: "/ourservices-icons/social-media-managing.png",
      title: "Social Media Managing",
      description: "Random content to fill the blank space"
    },
    {
      icon: "/ourservices-icons/content-writing.png",
      title: "Content Writing",
      description: "Random content to fill the blank space"
    }
  ]

  return (
    <section className="bg-custom-black md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20 md:mb-34">
          <h2 className="text-4xl md:text-5xl lg:text-5xl text-custom-white mb-6">
            Our services
          </h2>
          <p className="custom-text-gray text-lg md:text-xl max-w-3xl mx-auto">
            Transforming your online presence with innovative digital strategies
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-y-12 md:gap-36">
          {services.map((service, index) => (
            <div
              key={index}
              className="text-center space-y-6 group hover:transform hover:scale-105 transition-all duration-300"
            >
              <div className="mx-auto p-1 w-30 h-30 md:w-38 md:h-38 bg-white flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                <div className="w-full h-full bg-primary rounded-full flex items-center justify-center">
                  <span className="text-3xl text-custom-white">
                    <Image
                        src={service.icon}
                        alt="de"
                        width={40}
                        height={40}
                        className="object-cover"
                    />
                  </span>
                </div>
              </div>
              <div className="space-y-3">
                <h3 className="text-xl md:text-2xl font-bold text-custom-white">
                  {service.title}
                </h3>
                <p className="custom-text-gray text-base md:text-lg">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}