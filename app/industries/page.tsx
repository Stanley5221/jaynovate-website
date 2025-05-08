import Image from "next/image"
import { CheckCircle2 } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function IndustriesPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <video
          className="absolute inset-0 w-full h-full object-cover z-0"
          src="/videos/1.mp4"
          autoPlay
          loop
          muted
          playsInline
          poster="/images/jaynovate-light.png"
          style={{ filter: 'brightness(0.5) blur(2px)' }}
        />
        <div className="absolute inset-0 bg-black/40 z-10" />
        <div className="relative z-20 mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl drop-shadow-lg">Industries We Serve</h1>
          <p className="mt-6 text-lg leading-8 text-white drop-shadow">Specialized data solutions for diverse industry needs</p>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-16">
            {/* Healthcare & Pharma */}
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 items-center">
              <div className="relative h-[300px] rounded-xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Healthcare & Pharma"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-sky-900">Health & Pharma</h2>
                <p className="mt-4 text-lg text-sky-700">
                  Optimizing healthcare outcomes through advanced analytics and data-driven insights. Our solutions help
                  healthcare providers and pharmaceutical companies improve patient care, accelerate research, and
                  enhance operational efficiency.
                </p>
                <div className="mt-6 space-y-4">
                  <div className="flex">
                    <CheckCircle2 className="h-6 w-6 text-sky-600 flex-shrink-0" />
                    <span className="ml-2 text-sky-700">Patient outcome prediction and optimization</span>
                  </div>
                  <div className="flex">
                    <CheckCircle2 className="h-6 w-6 text-sky-600 flex-shrink-0" />
                    <span className="ml-2 text-sky-700">Clinical trial data analysis</span>
                  </div>
                  <div className="flex">
                    <CheckCircle2 className="h-6 w-6 text-sky-600 flex-shrink-0" />
                    <span className="ml-2 text-sky-700">Healthcare resource optimization</span>
                  </div>
                  <div className="flex">
                    <CheckCircle2 className="h-6 w-6 text-sky-600 flex-shrink-0" />
                    <span className="ml-2 text-sky-700">Drug discovery and development analytics</span>
                  </div>
                </div>
              </div>
            </div>

            {/* E-commerce */}
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 items-center md:flex-row-reverse">
              <div className="relative h-[300px] rounded-xl overflow-hidden md:order-2">
                <Image
                  src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="E-commerce"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="md:order-1">
                <h2 className="text-3xl font-bold text-sky-900">E-commerce</h2>
                <p className="mt-4 text-lg text-sky-700">
                  Enhancing customer experiences and optimizing operations with intelligent data solutions. We help
                  e-commerce businesses leverage their data to increase conversions, personalize customer interactions,
                  and streamline operations.
                </p>
                <div className="mt-6 space-y-4">
                  <div className="flex">
                    <CheckCircle2 className="h-6 w-6 text-sky-600 flex-shrink-0" />
                    <span className="ml-2 text-sky-700">Customer segmentation and personalization</span>
                  </div>
                  <div className="flex">
                    <CheckCircle2 className="h-6 w-6 text-sky-600 flex-shrink-0" />
                    <span className="ml-2 text-sky-700">Recommendation engine development</span>
                  </div>
                  <div className="flex">
                    <CheckCircle2 className="h-6 w-6 text-sky-600 flex-shrink-0" />
                    <span className="ml-2 text-sky-700">Inventory and supply chain optimization</span>
                  </div>
                  <div className="flex">
                    <CheckCircle2 className="h-6 w-6 text-sky-600 flex-shrink-0" />
                    <span className="ml-2 text-sky-700">Pricing strategy optimization</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Retail */}
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 items-center">
              <div className="relative h-[300px] rounded-xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Retail"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-sky-900">Retail</h2>
                <p className="mt-4 text-lg text-sky-700">
                  Transforming retail operations with predictive analytics and customer insights. Our retail solutions
                  help businesses optimize inventory, enhance customer experiences, and drive sales through data-driven
                  strategies.
                </p>
                <div className="mt-6 space-y-4">
                  <div className="flex">
                    <CheckCircle2 className="h-6 w-6 text-sky-600 flex-shrink-0" />
                    <span className="ml-2 text-sky-700">Demand forecasting and inventory management</span>
                  </div>
                  <div className="flex">
                    <CheckCircle2 className="h-6 w-6 text-sky-600 flex-shrink-0" />
                    <span className="ml-2 text-sky-700">Customer behavior analysis</span>
                  </div>
                  <div className="flex">
                    <CheckCircle2 className="h-6 w-6 text-sky-600 flex-shrink-0" />
                    <span className="ml-2 text-sky-700">Store layout and merchandising optimization</span>
                  </div>
                  <div className="flex">
                    <CheckCircle2 className="h-6 w-6 text-sky-600 flex-shrink-0" />
                    <span className="ml-2 text-sky-700">Omnichannel experience enhancement</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other Industries Section */}
      <section className="py-16 bg-sky-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-sky-900">Additional Industries</h2>
            <p className="mt-4 text-lg text-sky-700">Our data intelligence solutions extend across various sectors</p>
          </div>
          <div className="mx-auto mt-12 grid max-w-7xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Financial Services",
                description:
                  "Risk assessment, fraud detection, and personalized financial recommendations through advanced analytics.",
              },
              {
                title: "Manufacturing",
                description:
                  "Optimizing production processes, predictive maintenance, and supply chain management with data-driven insights.",
              },
              {
                title: "Education",
                description:
                  "Enhancing learning outcomes, personalizing education, and optimizing institutional operations through data analytics.",
              },
              {
                title: "Logistics & Transportation",
                description:
                  "Route optimization, fleet management, and demand forecasting to improve efficiency and reduce costs.",
              },
              {
                title: "Energy & Utilities",
                description:
                  "Demand forecasting, resource optimization, and predictive maintenance for improved service delivery and efficiency.",
              },
              {
                title: "Hospitality & Tourism",
                description:
                  "Customer experience enhancement, demand forecasting, and operational optimization through data intelligence.",
              },
            ].map((industry, index) => (
              <Card key={index} className="border-sky-100 bg-white hover:shadow-md transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-xl text-sky-900">{industry.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sky-700">{industry.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
