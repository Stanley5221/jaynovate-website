import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function CaseStudiesPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <video
          className="absolute inset-0 w-full h-full object-cover z-0"
          src="/videos/4.mp4"
          autoPlay
          loop
          muted
          playsInline
          poster="/images/jaynovate-light.png"
          style={{ filter: 'brightness(0.5) blur(2px)' }}
        />
        <div className="absolute inset-0 bg-black/40 z-10" />
        <div className="relative z-20 mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl drop-shadow-lg">Case Studies</h1>
          <p className="mt-6 text-lg leading-8 text-white drop-shadow">
              Real-world examples of how our data solutions drive business success
            </p>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Optimizing Patient Care with Predictive Analytics",
                industry: "Healthcare",
                image:
                  "https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
                description:
                  "How a regional hospital network reduced readmission rates by 23% using our predictive analytics solution.",
                results: [
                  "23% reduction in readmission rates",
                  "15% improvement in patient satisfaction",
                  "$2.4M annual cost savings",
                ],
              },
              {
                title: "E-commerce Personalization Engine",
                industry: "E-commerce",
                image:
                  "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
                description:
                  "Implementing a machine learning-based recommendation system that increased conversion rates for an online retailer.",
                results: [
                  "34% increase in conversion rate",
                  "27% higher average order value",
                  "42% improvement in customer retention",
                ],
              },
              {
                title: "Supply Chain Optimization for Retail",
                industry: "Retail",
                image:
                  "https://images.unsplash.com/photo-1553413077-190dd305871c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
                description:
                  "Developing a demand forecasting model that improved inventory management and reduced costs for a retail chain.",
                results: [
                  "18% reduction in inventory costs",
                  "32% decrease in stockouts",
                  "Improved supplier relationships",
                ],
              },
              {
                title: "Clinical Trial Data Analysis",
                industry: "Pharmaceutical",
                image:
                  "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
                description:
                  "Accelerating drug development through advanced statistical analysis of clinical trial data.",
                results: [
                  "30% faster data analysis",
                  "Identified key efficacy indicators",
                  "Streamlined regulatory submission process",
                ],
              },
              {
                title: "Customer Churn Prediction Model",
                industry: "Subscription Services",
                image:
                  "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
                description:
                  "Building a predictive model to identify at-risk customers and implement targeted retention strategies.",
                results: [
                  "25% reduction in customer churn",
                  "$1.8M increase in annual recurring revenue",
                  "Improved customer lifetime value",
                ],
              },
              {
                title: "Marketing Campaign Optimization",
                industry: "Digital Marketing",
                image:
                  "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
                description: "Using A/B testing and data analytics to optimize marketing campaigns and improve ROI.",
                results: [
                  "42% increase in campaign ROI",
                  "38% higher click-through rates",
                  "More efficient marketing budget allocation",
                ],
              },
            ].map((caseStudy, index) => (
              <Card
                key={index}
                className="border-sky-100 hover:shadow-md transition-shadow duration-300 overflow-hidden"
              >
                <div className="h-48 w-full relative">
                  <Image
                    src={caseStudy.image || "/placeholder.svg"}
                    alt={caseStudy.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-0 right-0 bg-sky-600 text-white px-3 py-1 text-sm font-medium">
                    {caseStudy.industry}
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl text-sky-900">{caseStudy.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <CardDescription className="text-sky-700">{caseStudy.description}</CardDescription>
                  <div>
                    <h4 className="font-semibold text-sky-900 mb-2">Key Results:</h4>
                    <ul className="space-y-1">
                      {caseStudy.results.map((result, i) => (
                        <li key={i} className="flex items-start">
                          <ArrowRight className="h-4 w-4 text-sky-600 mt-1 mr-2 flex-shrink-0" />
                          <span className="text-sky-700">{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full border-sky-600 text-sky-600 hover:bg-sky-50">
                    Read Full Case Study
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-sky-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-sky-900">Ready to Transform Your Data?</h2>
            <p className="mt-4 text-lg text-sky-700">
              Let's discuss how our data intelligence solutions can drive success for your business.
            </p>
            <div className="mt-10">
              <Button asChild className="bg-sky-600 hover:bg-sky-700 text-lg px-6 py-6">
                <Link href="/#contact">Contact Us Today</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
