import Image from "next/image"
import { CheckCircle2 } from "lucide-react"
import AnimatedSection from "@/components/animated-section"
import AnimatedText from "@/components/animated-text"

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        {/* Video Background */}
        <video
          className="absolute inset-0 w-full h-full object-cover z-0"
          src="/videos/5.mp4"
          autoPlay
          loop
          muted
          playsInline
          poster="/images/your-fallback.jpg"
          style={{ filter: 'brightness(0.5) blur(2px)' }}
        />
        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-black/40 z-10" />
        {/* Content */}
        <div className="relative z-20 mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl drop-shadow-lg">About JayNovate</h1>
          <p className="mt-6 text-lg leading-8 text-white drop-shadow">Driving innovation through data storytelling</p>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 lg:grid-cols-2">
            <AnimatedSection direction="left" duration={800}>
              <h2 className="text-3xl font-bold tracking-tight text-sky-900">Who We Are</h2>
              <p className="mt-6 text-lg text-sky-700">
                We're a team of statisticians, data scientists, health informaticists, and machine learning engineers
                helping small and growing businesses unlock the full potential of their data.
              </p>
              <p className="mt-4 text-lg text-sky-700">
                At JayNovate, we believe that data is more than just numbers—it's the foundation for innovation and
                growth. Our passion lies in transforming complex data into clear, actionable insights that drive real
                business outcomes.
              </p>
              <p className="mt-4 text-lg text-sky-700">
                With expertise spanning healthcare, e-commerce, and retail sectors, we bring a unique perspective to
                every project, combining technical excellence with deep industry knowledge.
              </p>
            </AnimatedSection>
            <AnimatedSection direction="right" duration={800} delay={200}>
              <div className="relative h-[400px] rounded-xl overflow-hidden group">
                <Image
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                  alt="Data science team working"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-sky-900/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-sky-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <AnimatedSection className="mx-auto max-w-3xl text-center" direction="up" duration={800}>
            <h2 className="text-3xl font-bold tracking-tight text-sky-900">Our Mission</h2>
            <AnimatedText
              text="To drive innovation in healthcare and business intelligence through trusted data solutions that deliver measurable impact."
              className="mt-6 text-lg text-sky-700"
              duration={20}
              delay={500}
            />
            <div className="mt-10 flex justify-center">
              <div className="relative h-[300px] w-[300px] group">
                <svg
                  viewBox="0 0 200 200"
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute inset-0 h-full w-full transition-all duration-1000 group-hover:rotate-[30deg]"
                >
                  <path
                    fill="#0EA5E9"
                    d="M45.7,-77.2C59.1,-69.3,70,-56.3,77.8,-41.6C85.6,-26.9,90.3,-10.5,89.8,6.1C89.3,22.7,83.6,39.4,73.1,52.3C62.6,65.2,47.3,74.2,31.1,79.8C14.9,85.4,-2.2,87.6,-17.8,83.5C-33.4,79.4,-47.6,69,-59.8,56.2C-72,43.4,-82.3,28.2,-85.7,11.2C-89.1,-5.8,-85.6,-24.5,-76.6,-39.4C-67.6,-54.3,-53.1,-65.3,-38,-73.1C-22.9,-80.9,-7.2,-85.5,8.1,-83.8C23.4,-82.1,32.3,-85.1,45.7,-77.2Z"
                    transform="translate(100 100)"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center text-white text-2xl font-bold">
                  Our Mission
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <AnimatedSection className="mx-auto max-w-2xl" direction="up" duration={800}>
            <h2 className="text-3xl font-bold tracking-tight text-sky-900">Why Choose JayNovate?</h2>
            <div className="mt-10 space-y-8">
              {[
                {
                  title: "Domain Expertise",
                  description:
                    "Our team has specialized knowledge in healthcare and business intelligence, allowing us to understand the unique challenges and opportunities in these sectors.",
                },
                {
                  title: "Data Privacy Focus",
                  description:
                    "We maintain a strong focus on data privacy and responsible data use, ensuring that your sensitive information is always protected.",
                },
                {
                  title: "Results-Oriented",
                  description:
                    "We are committed to delivering measurable results that directly impact your business objectives and drive growth.",
                },
              ].map((item, index) => (
                <AnimatedSection key={index} className="flex" direction="left" delay={150 * index} duration={600}>
                  <div className="flex-shrink-0 group">
                    <CheckCircle2 className="h-6 w-6 text-sky-600 transition-transform duration-300 group-hover:scale-125" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold text-sky-900">{item.title}</h3>
                    <p className="mt-2 text-sky-700">{item.description}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-sky-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <AnimatedSection className="mx-auto max-w-2xl text-center" direction="up" duration={800}>
            <h2 className="text-3xl font-bold tracking-tight text-sky-900">Our Team</h2>
            <p className="mt-4 text-lg text-sky-700">Meet the experts behind JayNovate's data intelligence solutions</p>
          </AnimatedSection>
          <div className="mx-auto mt-12 grid max-w-7xl grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                name: "Dr. Jay Smith",
                title: "Founder & CEO",
                image:
                  "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400&q=80",
              },
              {
                name: "Dr. Sarah Chen",
                title: "Chief Data Scientist",
                image:
                  "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400&q=80",
              },
              {
                name: "Michael Johnson",
                title: "Head of Machine Learning",
                image:
                  "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400&q=80",
              },
            ].map((member, index) => (
              <AnimatedSection
                key={index}
                className="flex flex-col items-center"
                direction="up"
                delay={150 * index}
                duration={600}
              >
                <div className="relative h-64 w-64 rounded-full overflow-hidden group">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-sky-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <h3 className="mt-6 text-xl font-semibold text-sky-900">{member.name}</h3>
                <p className="text-sky-600">{member.title}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
