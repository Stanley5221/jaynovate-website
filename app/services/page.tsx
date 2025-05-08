import { ArrowRight, BarChart2, Brain, Database, LineChart, PieChart, Server, Zap } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import AnimatedSection from "@/components/animated-section"

export default function ServicesPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <video
          className="absolute inset-0 w-full h-full object-cover z-0"
          src="/videos/3.mp4"
          autoPlay
          loop
          muted
          playsInline
          poster="/images/jaynovate-light.png"
          style={{ filter: 'brightness(0.5) blur(2px)' }}
        />
        <div className="absolute inset-0 bg-black/40 z-10" />
        <div className="relative z-20 mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl drop-shadow-lg">Our Services</h1>
          <p className="mt-6 text-lg leading-8 text-white drop-shadow">
              Comprehensive data solutions tailored to your business needs
            </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: <Database className="h-12 w-12 text-sky-600" />,
                title: "Data Science",
                description:
                  "Transform raw data into actionable insights with our comprehensive data science solutions. We help you collect, clean, analyze, and interpret data to drive informed decision-making.",
                features: [
                  "Data collection and preparation",
                  "Exploratory data analysis",
                  "Feature engineering",
                  "Custom algorithm development",
                ],
              },
              {
                icon: <Server className="h-12 w-12 text-sky-600" />,
                title: "Big Data Analytics",
                description:
                  "Harness the power of your large datasets with scalable analytics solutions. We implement robust big data architectures and analytics frameworks to process and analyze massive volumes of data efficiently.",
                features: [
                  "Distributed computing solutions",
                  "Real-time data processing",
                  "Data lake implementation",
                  "Scalable analytics pipelines",
                ],
              },
              {
                icon: <Brain className="h-12 w-12 text-sky-600" />,
                title: "Machine Learning",
                description:
                  "Implement cutting-edge ML models to predict trends and automate decision-making. Our machine learning solutions help you leverage the predictive power of your data to gain competitive advantages.",
                features: [
                  "Supervised and unsupervised learning",
                  "Deep learning implementations",
                  "Natural language processing",
                  "Computer vision solutions",
                ],
              },
              {
                icon: <PieChart className="h-12 w-12 text-sky-600" />,
                title: "BI & Data Visualization",
                description:
                  "Convert complex data into clear, interactive visualizations for better decision making. Our BI solutions provide intuitive dashboards and reports that make data accessible to stakeholders at all levels.",
                features: [
                  "Interactive dashboard development",
                  "Custom reporting solutions",
                  "Data storytelling",
                  "Self-service analytics tools",
                ],
              },
              {
                icon: <Zap className="h-12 w-12 text-sky-600" />,
                title: "Experimental Design",
                description:
                  "Design robust experiments to test hypotheses and validate assumptions. Our experimental design services ensure that you collect the right data to answer your most important business questions.",
                features: [
                  "Hypothesis formulation",
                  "Sample size determination",
                  "Randomization strategies",
                  "Experimental controls",
                ],
              },
              {
                icon: <BarChart2 className="h-12 w-12 text-sky-600" />,
                title: "A/B Testing",
                description:
                  "Optimize your products and services with data-driven experimentation. Our A/B testing services help you make evidence-based decisions to improve user experience and business outcomes.",
                features: [
                  "Test design and implementation",
                  "Statistical analysis of results",
                  "Multivariate testing",
                  "Continuous optimization strategies",
                ],
              },
              {
                icon: <LineChart className="h-12 w-12 text-sky-600" />,
                title: "Statistical Modelling",
                description:
                  "Develop robust statistical models to understand relationships and test hypotheses. Our statistical modeling services help you uncover patterns and make reliable predictions based on your data.",
                features: [
                  "Regression analysis",
                  "Time series forecasting",
                  "Bayesian modeling",
                  "Multivariate analysis",
                ],
              },
            ].map((service, index) => (
              <AnimatedSection key={index} direction="up" delay={100 * index} duration={600}>
                <Card className="border-sky-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-2 h-full">
                  <CardHeader>
                    <div className="mb-4 transform transition-transform duration-300 hover:scale-110">
                      {service.icon}
                    </div>
                    <CardTitle className="text-2xl text-sky-900">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <CardDescription className="text-sky-700 text-base">{service.description}</CardDescription>
                    <div>
                      <h4 className="font-semibold text-sky-900 mb-2">Key Features:</h4>
                      <ul className="space-y-1">
                        {service.features.map((feature, i) => (
                          <li key={i} className="flex items-start group">
                            <ArrowRight className="h-4 w-4 text-sky-600 mt-1 mr-2 flex-shrink-0 transition-transform duration-300 group-hover:translate-x-1" />
                            <span className="text-sky-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-sky-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <AnimatedSection className="mx-auto max-w-2xl text-center" direction="up" duration={800}>
            <h2 className="text-3xl font-bold tracking-tight text-sky-900">Our Process</h2>
            <p className="mt-4 text-lg text-sky-700">How we deliver exceptional data solutions</p>
          </AnimatedSection>
          <div className="mx-auto mt-12 max-w-5xl">
            <div className="space-y-12">
              {[
                {
                  number: "01",
                  title: "Discovery",
                  description:
                    "We begin by understanding your business objectives, challenges, and data landscape to define clear goals for your project.",
                },
                {
                  number: "02",
                  title: "Data Assessment",
                  description:
                    "Our team evaluates your existing data sources, quality, and infrastructure to identify opportunities and gaps.",
                },
                {
                  number: "03",
                  title: "Solution Design",
                  description:
                    "We design a tailored solution that addresses your specific needs, leveraging the most appropriate methodologies and technologies.",
                },
                {
                  number: "04",
                  title: "Implementation",
                  description:
                    "Our experts build and deploy your solution, ensuring seamless integration with your existing systems and processes.",
                },
                {
                  number: "05",
                  title: "Validation & Optimization",
                  description:
                    "We rigorously test and refine the solution to ensure accuracy, performance, and alignment with your objectives.",
                },
                {
                  number: "06",
                  title: "Knowledge Transfer",
                  description:
                    "We provide comprehensive training and documentation to empower your team to leverage and maintain the solution effectively.",
                },
              ].map((step, index) => (
                <AnimatedSection key={index} className="flex" direction="left" delay={150 * index} duration={600}>
                  <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-full bg-sky-600 text-white font-bold transform transition-transform duration-300 hover:scale-110 hover:bg-sky-700">
                    {step.number}
                  </div>
                  <div className="ml-6">
                    <h3 className="text-xl font-semibold text-sky-900">{step.title}</h3>
                    <p className="mt-2 text-sky-700">{step.description}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
