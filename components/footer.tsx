import Link from "next/link"
import Image from "next/image"
import { Mail, MapPin, Phone } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-sky-900 text-white">
      <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
        <div className="space-y-8 md:w-1/2 lg:w-1/3">
          <div className="flex flex-col items-center space-y-4 ml-4">
            <Link href="/" className="flex items-center space-x-2">
              <div className="relative w-12 h-12 md:w-20 md:h-20 rounded-full overflow-hidden bg-white shadow-lg">
                <Image
                  src="/images/logo.png"
                  alt="Jaynovate Logo"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <span className="text-lg md:text-2xl font-bold bg-gradient-to-r from-sky-600 to-blue-600 bg-clip-text text-transparent">
                Jaynovate
              </span>
            </Link>
          </div>
          <p className="text-sm leading-6 text-sky-100">
            Driving innovation in healthcare and business intelligence through trusted data solutions that deliver
            measurable impact.
          </p>
          <div className="space-y-2">
            <div className="flex items-center">
              <MapPin className="h-5 w-5 text-sky-300 mr-2" />
              <span className="text-sm text-sky-100">123 Data Street, Analytics City, AC 12345</span>
            </div>
            <div className="flex items-center">
              <Phone className="h-5 w-5 text-sky-300 mr-2" />
              <span className="text-sm text-sky-100">+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center">
              <Mail className="h-5 w-5 text-sky-300 mr-2" />
              <span className="text-sm text-sky-100">info@jaynovate.com</span>
            </div>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-8 md:mt-0 md:w-1/2 lg:w-2/3 lg:grid-cols-3">
          <div>
            <h3 className="text-sm font-semibold leading-6 text-white">Company</h3>
            <ul role="list" className="mt-6 space-y-4">
              <li>
                <Link
                  href="/about"
                  className="text-sm leading-6 text-sky-100 hover:text-white transition-colors duration-300 relative group"
                >
                  About
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
              <li>
                <Link
                  href="/case-studies"
                  className="text-sm leading-6 text-sky-100 hover:text-white transition-colors duration-300 relative group"
                >
                  Case Studies
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-sm leading-6 text-sky-100 hover:text-white transition-colors duration-300 relative group"
                >
                  Blog
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold leading-6 text-white">Services</h3>
            <ul role="list" className="mt-6 space-y-4">
              <li>
                <Link
                  href="/services"
                  className="text-sm leading-6 text-sky-100 hover:text-white transition-colors duration-300 relative group"
                >
                  Data Science
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-sm leading-6 text-sky-100 hover:text-white transition-colors duration-300 relative group"
                >
                  Machine Learning
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-sm leading-6 text-sky-100 hover:text-white transition-colors duration-300 relative group"
                >
                  BI & Visualization
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold leading-6 text-white">Industries</h3>
            <ul role="list" className="mt-6 space-y-4">
              <li>
                <Link
                  href="/industries"
                  className="text-sm leading-6 text-sky-100 hover:text-white transition-colors duration-300 relative group"
                >
                  Health & Pharma
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
              <li>
                <Link
                  href="/industries"
                  className="text-sm leading-6 text-sky-100 hover:text-white transition-colors duration-300 relative group"
                >
                  E-commerce
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
              <li>
                <Link
                  href="/industries"
                  className="text-sm leading-6 text-sky-100 hover:text-white transition-colors duration-300 relative group"
                >
                  Retail
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-7xl border-t border-sky-800 px-6 py-6 md:flex md:items-center md:justify-between lg:px-8">
        <div className="mt-8 md:mt-0 md:order-1">
          <p className="text-center text-xs leading-5 text-sky-400">
            &copy; {new Date().getFullYear()} JayNovate. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
