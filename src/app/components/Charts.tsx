import Image from "next/image"

export default function Charts() {
  return (
    <section className="bg-custom-black py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center md:text-left mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-5xl text-custom-white mb-6">
            Our charts
          </h2>
        </div>

        <div className="hidden md:grid grid-cols-2 gap-8">
          <div className="relative">
            <Image
              width={600}
              height={500}
              src="/stat-chart-1.jpg"
              alt="Net Profit Bar Chart 2024"
              className="w-auto h-full rounded-xl"
            />
          </div>
          <div className="relative">
            <Image
              width={600}
              height={500}
              src="/stat-chart-2.jpg"
              alt="Primary Text Pie Chart"
              className="w-auto h-full rounded-xl"
            />
          </div>
        </div>

        <div className="md:hidden space-y-8">
          <div className="relative">
            <Image
              width={400}
              height={600}
              src="/mobile-stat/stat-chart-1.jpg"
              alt="Net Profit Bar Chart 2024"
              className="w-auto h-full rounded-xl"
            />
          </div>
          <div className="relative">
            <Image
              width={400}
              height={600}
              src="/mobile-stat/stat-chart-2.jpg"
              alt="Primary Text Pie Chart"
              className="w-auto h-full rounded-xl"
            />
          </div>
        </div>
      </div>
    </section>
  )
}