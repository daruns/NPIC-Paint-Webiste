import Image from 'next/image'
import Button from './Button'

export default function News() {
  const newsItems = [
    {
      id: 1,
      image: '/news-1.jpg',
      title: 'we incorporate the formation of public partnerships as a core aspect of our operations.',
      tags: ['Company', 'Contrasts']
    },
    {
      id: 2,
      image: '/news-2.jpg',
      title: 'we incorporate the formation of public partnerships as a core aspect of our operations.',
      tags: ['Company', 'Contrasts']
    },
    {
      id: 3,
      image: '/news-3.jpg',
      title: 'we incorporate the formation of public partnerships as a core aspect of our operations.',
      tags: ['Company', 'Contrasts']
    }
  ]

  return (
    <section className="bg-custom-black py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex justify-between items-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-custom-white">
            News
          </h2>
          
          <div className="hidden md:block">
            <Button variant="primary" className="px-8 py-3">
              View all news
            </Button>
          </div>
        </div>

        <div className="hidden md:grid md:grid-cols-2 gap-8">
          
          <div className="space-y-6">
            <div className="relative rounded-2xl overflow-hidden">
              <Image
                src="/news-main.jpg"
                alt="Main news article"
                width={600}
                height={400}
                className="w-full h-80 object-cover"
              />
            </div>
            
            <div className="flex gap-3">
              <span className="bg-white text-custom-black px-4 py-2 rounded-full text-sm font-medium">
                Company
              </span>
              <span className="bg-white text-custom-black px-4 py-2 rounded-full text-sm font-medium">
                Contrasts
              </span>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl md:text-3xl font-bold text-custom-white leading-tight">
                We specialize in fostering effective partnerships with supportive companies to drive mutual success.
              </h3>
              
              <p className="custom-text-gray text-lg leading-relaxed">
                We are committed to building effective partnerships with supporting companies, contributing to the advancement, development, and expansion of the sector through diverse capabilities, expertise, and technological innovation.
              </p>
            </div>
          </div>

          <div className="space-y-8">
            {newsItems.map((item) => (
              <div key={item.id} className="flex gap-4">
                <div className="flex-shrink-0">
                  <Image
                    src={item.image}
                    alt={`News article ${item.id}`}
                    width={221}
                    height={246}
                    className="w-40 h-45 rounded-2xl object-cover"
                  />
                </div>
                <div className="flex-1 space-y-4">
                  <h4 className="text-lg font-bold text-custom-white leading-tight">
                    {item.title}
                  </h4>
                  
                  <div className="flex gap-2">
                    {item.tags.map((tag) => (
                      <span 
                        key={tag}
                        className="bg-white text-custom-black px-3 py-1 rounded-full text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="md:hidden space-y-8">
          <div className="space-y-6">
            <div className="relative rounded-2xl overflow-hidden">
              <Image
                src="/news-main.jpg"
                alt="Main news article"
                width={400}
                height={300}
                className="w-full h-64 object-cover"
              />
            </div>
            <div className="flex gap-3">
              <span className="bg-white text-custom-black px-4 py-2 rounded-full text-sm font-medium">
                Company
              </span>
              <span className="bg-white text-custom-black px-4 py-2 rounded-full text-sm font-medium">
                Contrasts
              </span>
            </div>

            <h3 className="text-xl font-bold text-custom-white leading-tight">
              We specialize in fostering effective partnerships with supportive companies to drive mutual success.
            </h3>
            
            <p className="custom-text-gray leading-relaxed">
              We are committed to building effective partnerships with supporting companies, contributing to the advancement, development, and expansion of the sector through diverse capabilities, expertise, and technological innovation.
            </p>
          </div>
          {newsItems.map((item) => (
            <div key={item.id} className="grid grid-cols-2 gap-4 space-y-4">
              <div className="relative rounded-2xl overflow-hidden">
                <Image
                  src={item.image}
                  alt={`News article ${item.id}`}
                  width={400}
                  height={200}
                  className="w-full h-48 object-cover"
                />
              </div>
              <span>
                <h4 className="text-lg font-bold text-custom-white leading-tight">
                  {item.title}
                </h4>
                <div className="flex gap-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-white text-custom-black px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </span>
            </div>
          ))}

          <div className="pt-8">
            <Button variant="primary" className="w-full py-4 text-lg">
              Show all news
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}