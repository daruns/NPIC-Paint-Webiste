import Image from 'next/image'

export default function Partners() {
  const partners = [
    { name: 'CIB Bank', logo: '/OurPartners/cib-bank.png' },
    { name: 'BMW', logo: '/OurPartners/bmw.png' },
    { name: 'Huawei', logo: '/OurPartners/huawei.png' },
    { name: 'NASA', logo: '/OurPartners/nasa.png' },
  ]

  return (
    <section className="py-16">
      <div className="mx-0">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-custom-white mb-20">
          Our Partners
        </h2>

        <div className="relative overflow-hidden">
          <div className="flex space-x-6 overflow-x-auto scrollbar-hide pb-4">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="flex-shrink-0 bg-white rounded-xl py-2 px-8 w-85 md:w-135 h-24 flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <Image
                  src={partner.logo}
                  alt={`${partner.name} logo`}
                  width={120}
                  height={60}
                  className="object-contain max-w-full max-h-full"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}