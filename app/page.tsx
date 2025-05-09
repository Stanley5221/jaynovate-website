import Link from "next/link"
import Image from "next/image"
import { ArrowRight, BarChart2, Brain, Database, LineChart, PieChart, Server, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import ContactForm from "@/components/contact-form"
import AnimatedSection from "@/components/animated-section"
import AnimatedCounter from "@/components/animated-counter"
import AnimatedBackground from "@/components/animated-background"
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <video
          className="absolute inset-0 w-full h-full object-cover z-0"
          src="/videos/2.mp4"
          autoPlay
          loop
          muted
          playsInline
          poster="/images/jaynovate-light.png"
          style={{ filter: 'brightness(0.5) blur(2px)' }}
        />
        <div className="absolute inset-0 bg-black/40 z-10" />
        <div className="relative z-20 mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <AnimatedSection className="mx-auto max-w-3xl text-center" direction="down" duration={800}>
            <div className="flex justify-center mb-8">
              <Image
                src="/images/jaywhite.png"
                alt="JayNovate Logo"
                width={120}
                height={120}
                className="animate-float"
              />
            </div>
            <div className="relative z-10 text-center">
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl lg:whitespace-nowrap text-balance break-words">
                Innovative Data Intelligence
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-300">
                Transforming businesses through advanced analytics and AI-driven insights
              </p>
            </div>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button className="bg-sky-600 hover:bg-sky-700 hover:scale-105 transition-transform text-lg px-6 py-6">
                Get Started
              </Button>
              <Link href="/services" className="text-sm font-semibold leading-6 text-white flex items-center group">
                Learn more
                <ArrowRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <AnimatedSection className="mx-auto max-w-2xl text-center" direction="up" duration={800}>
            <h2 className="text-3xl font-bold tracking-tight text-sky-900 sm:text-4xl">Our Services</h2>
            <p className="mt-4 text-lg text-sky-700">Comprehensive data solutions to drive your business forward</p>
          </AnimatedSection>
          <div className="mx-auto mt-12 grid max-w-7xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: <Database className="h-10 w-10 text-sky-600" />,
                title: "Data Science",
                description:
                  "Transform raw data into actionable insights with our comprehensive data science solutions.",
              },
              {
                icon: <Server className="h-10 w-10 text-sky-600" />,
                title: "Big Data Analytics",
                description: "Harness the power of your large datasets with scalable analytics solutions.",
              },
              {
                icon: <Brain className="h-10 w-10 text-sky-600" />,
                title: "Machine Learning",
                description: "Implement cutting-edge ML models to predict trends and automate decision-making.",
              },
              {
                icon: <PieChart className="h-10 w-10 text-sky-600" />,
                title: "BI & Data Visualization",
                description: "Convert complex data into clear, interactive visualizations for better decision making.",
              },
              {
                icon: <LineChart className="h-10 w-10 text-sky-600" />,
                title: "Statistical Modelling",
                description: "Develop robust statistical models to understand relationships and test hypotheses.",
              },
              {
                icon: <BarChart2 className="h-10 w-10 text-sky-600" />,
                title: "A/B Testing",
                description: "Optimize your products and services with data-driven experimentation.",
              },
            ].map((service, index) => (
              <AnimatedSection key={index} className="h-full" direction="up" delay={100 * index} duration={600}>
                <Card className="border-sky-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 h-full">
                  <CardHeader className="pb-2">
                    <div className="mb-4 transform transition-transform duration-300 hover:scale-110">
                      {service.icon}
                    </div>
                    <CardTitle className="text-xl text-sky-900">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-sky-700">{service.description}</CardDescription>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
          <AnimatedSection className="mt-12 text-center" direction="up" delay={300}>
            <Button
              asChild
              variant="outline"
              className="border-sky-600 text-sky-600 hover:bg-sky-50 hover:scale-105 transition-all duration-300"
            >
              <Link href="/services">View All Services</Link>
            </Button>
          </AnimatedSection>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-sky-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <AnimatedSection className="mx-auto max-w-2xl text-center" direction="up" duration={800}>
            <h2 className="text-3xl font-bold tracking-tight text-sky-900 sm:text-4xl">Why Choose JayNovate?</h2>
            <p className="mt-4 text-lg text-sky-700">
              We're committed to delivering exceptional value through our expertise and approach
            </p>
          </AnimatedSection>
          <div className="mx-auto mt-12 grid max-w-5xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: <Zap className="h-8 w-8 text-sky-600" />,
                title: "Domain Expertise",
                description: "Our team has specialized knowledge in healthcare and business intelligence",
                stat: "10+",
                statLabel: "Years Experience",
              },
              {
                icon: <Zap className="h-8 w-8 text-sky-600" />,
                title: "Data Privacy Focus",
                description: "Strong emphasis on data privacy and responsible data use",
                stat: "100%",
                statLabel: "Compliance Rate",
              },
              {
                icon: <Zap className="h-8 w-8 text-sky-600" />,
                title: "Results-Oriented",
                description: "We focus on delivering measurable impact and tangible outcomes",
                stat: "95%",
                statLabel: "Client Satisfaction",
              },
            ].map((feature, index) => (
              <AnimatedSection
                key={index}
                className="flex flex-col items-center text-center"
                direction="up"
                delay={150 * index}
                duration={600}
              >
                <div className="rounded-full bg-sky-100 p-3 hover:bg-sky-200 transition-colors duration-300 transform hover:scale-110">
                  {feature.icon}
                </div>
                <h3 className="mt-4 text-xl font-semibold text-sky-900">{feature.title}</h3>
                <p className="mt-2 text-sky-700">{feature.description}</p>
                <div className="mt-4 flex flex-col items-center">
                  <AnimatedCounter
                    end={Number.parseInt(feature.stat.replace(/[^0-9]/g, ""))}
                    suffix={feature.stat.includes("+") ? "+" : feature.stat.includes("%") ? "%" : ""}
                    className="text-2xl font-bold text-sky-600"
                  />
                  <span className="text-sm text-sky-700">{feature.statLabel}</span>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <AnimatedSection className="mx-auto max-w-2xl text-center" direction="up" duration={800}>
            <h2 className="text-3xl font-bold tracking-tight text-sky-900 sm:text-4xl">Industries We Serve</h2>
            <p className="mt-4 text-lg text-sky-700">Specialized solutions for diverse industry needs</p>
          </AnimatedSection>
          <div className="mx-auto mt-12 grid max-w-7xl grid-cols-1 gap-8 sm:grid-cols-3">
            {[
              {
                title: "Health & Pharma",
                image:
                  "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                description: "Optimizing healthcare outcomes through advanced analytics and data-driven insights.",
              },
              {
                title: "E-commerce",
                image:
                  "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                description:
                  "Enhancing customer experiences and optimizing operations with intelligent data solutions.",
              },
              {
                title: "Retail",
                image:
                  "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                description: "Transforming retail operations with predictive analytics and customer insights.",
              },
            ].map((industry, index) => (
              <AnimatedSection key={index} direction="up" delay={150 * index} duration={600}>
                <Card className="overflow-hidden border-sky-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
                  <div className="h-48 w-full relative overflow-hidden group">
                    <Image
                      src={industry.image || "/placeholder.svg"}
                      alt={industry.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-sky-900/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                      <h3 className="text-white text-xl font-bold p-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        {industry.title}
                      </h3>
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl text-sky-900">{industry.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-sky-700">{industry.description}</CardDescription>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
          <AnimatedSection className="mt-12 text-center" direction="up" delay={300}>
            <Button
              asChild
              variant="outline"
              className="border-sky-600 text-sky-600 hover:bg-sky-50 hover:scale-105 transition-all duration-300"
            >
              <Link href="/industries">Learn More</Link>
            </Button>
          </AnimatedSection>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-sky-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <AnimatedSection className="mx-auto max-w-2xl text-center" direction="up" duration={800}>
            <h2 className="text-3xl font-bold tracking-tight text-sky-900 sm:text-4xl">What Our Clients Say</h2>
            <p className="mt-4 text-lg text-sky-700">Don't just take our word for it</p>
          </AnimatedSection>
          <div className="mx-auto mt-12 grid max-w-7xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                quote:
                  "JayNovate transformed our approach to data analytics, helping us make more informed decisions that directly impacted our bottom line.",
                author: "Sarah Johnson",
                title: "CTO, HealthTech Inc.",
              },
              {
                quote:
                  "The team's expertise in healthcare data analysis was invaluable. They delivered insights that helped us improve patient outcomes while reducing costs.",
                author: "Michael Chen",
                title: "Director of Analytics, MediCorp",
              },
              {
                quote:
                  "Working with JayNovate has been a game-changer for our e-commerce strategy. Their predictive models have significantly improved our inventory management.",
                author: "Emily Rodriguez",
                title: "VP of Operations, ShopSmart",
              },
            ].map((testimonial, index) => (
              <AnimatedSection key={index} direction="up" delay={150 * index} duration={600}>
                <Card className="border-sky-100 bg-white hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
                  <CardContent className="pt-6">
                    <div className="text-sky-600 mb-4 transform transition-transform duration-300 hover:scale-110">
                      <svg width="45" height="36" className="fill-current">
                        <path d="M13.415.001C6.07 5.185.887 13.681.887 23.041c0 7.632 4.608 12.096 9.936 12.096 5.04 0 8.784-4.032 8.784-8.784 0-4.752-3.312-8.208-7.632-8.208-.864 0-2.016.144-2.304.288.72-4.896 5.328-10.656 9.936-13.536L13.415.001zm24.768 0c-7.2 5.184-12.384 13.68-12.384 23.04 0 7.632 4.608 12.096 9.936 12.096 4.896 0 8.784-4.032 8.784-8.784 0-4.752-3.456-8.208-7.776-8.208-.864 0-1.872.144-2.16.288.72-4.896 5.184-10.656 9.792-13.536L38.183.001z"></path>
                      </svg>
                    </div>
                    <p className="text-sky-800 mb-6">{testimonial.quote}</p>
                    <div className="border-t border-sky-100 pt-4 mt-4">
                      <p className="font-semibold text-sky-900">{testimonial.author}</p>
                      <p className="text-sm text-sky-600">{testimonial.title}</p>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <AnimatedSection className="mx-auto max-w-2xl text-center" direction="up" duration={800}>
            <h2 className="text-3xl font-bold tracking-tight text-sky-900 sm:text-4xl">Contact Us</h2>
            <p className="mt-4 text-lg text-sky-700">
              Ready to unlock the full potential of your data? Get in touch with our team.
            </p>
          </AnimatedSection>
          <AnimatedSection className="mx-auto mt-12 max-w-3xl" direction="up" delay={200} duration={800}>
            <ContactForm />
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}
