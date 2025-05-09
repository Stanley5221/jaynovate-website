"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import React from "react"
import { usePathname } from "next/navigation"

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Case Studies", href: "/case-studies" },
  { name: "Industries", href: "/industries" },
  { name: "Blog", href: "/blog" },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  // Add scroll event listener
  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      isScrolled ? "bg-white/80 backdrop-blur-md shadow-sm" : "bg-sky-50"
    )}>
      <nav className="flex items-center justify-between p-6 lg:px-0" aria-label="Global">
        <div className="flex flex-1 justify-start pl-0 ml-4">
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
        <div className="flex lg:hidden">
          <button
            type="button"
            className={cn(
              "inline-flex items-center justify-center rounded-md p-2.5 transition-all duration-300",
              isScrolled ? "text-sky-900 hover:bg-sky-50" : "text-sky-700 hover:bg-sky-100"
            )}
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Menu className="h-7 w-7" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-10">
          {navigation.map((item) => {
            const isActive = pathname === item.href || 
              (item.href !== '/' && pathname?.startsWith(item.href))
            
            return (
            <Link
              key={item.name}
              href={item.href}
                className={cn(
                  "text-base font-semibold leading-6 relative group transition-all duration-300 py-2",
                  isScrolled ? "text-sky-900" : "text-sky-700",
                  isActive && "text-sky-600"
                )}
            >
              {item.name}
                <span className={cn(
                  "absolute -bottom-1 left-0 h-0.5 bg-sky-600 transition-all duration-300",
                  isActive ? "w-full" : "w-0 group-hover:w-full"
                )} />
            </Link>
            )
          })}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Button 
            asChild
            className={cn(
              "text-base px-6 py-6 transition-all duration-300 hover:scale-105",
              isScrolled ? "bg-sky-600 hover:bg-sky-700" : "bg-sky-700 hover:bg-sky-800"
            )}
          >
            <Link href="/#contact">Contact Us</Link>
          </Button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div 
        className={cn(
          "lg:hidden",
          mobileMenuOpen ? "fixed inset-0 z-50" : "hidden"
        )}
      >
        {/* Overlay */}
        <div 
          className={cn(
            "fixed inset-0 z-40 transition-opacity duration-300",
            mobileMenuOpen ? "bg-black/30 backdrop-blur-sm" : "bg-transparent"
          )} 
          aria-hidden="true" 
          onClick={() => setMobileMenuOpen(false)} 
        />
        {/* Top Sheet Menu */}
        <div 
          className={cn(
            "fixed top-0 left-0 right-0 z-50 w-full max-h-[90vh] bg-white shadow-xl transition-transform duration-300 overflow-y-auto",
            mobileMenuOpen ? "translate-y-0" : "-translate-y-full"
          )}
        >
          <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
            <Link href="/" className="flex items-center space-x-2" onClick={() => setMobileMenuOpen(false)}>
              <div className="relative w-12 h-12 rounded-full overflow-hidden bg-white shadow-lg">
                <Image
                  src="/images/logo.png"
                  alt="Jaynovate Logo"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <span className="ml-2 text-lg font-bold bg-gradient-to-r from-sky-600 to-blue-600 bg-clip-text text-transparent">
                Jaynovate
              </span>
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-sky-700 hover:bg-sky-50 transition-colors duration-300"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <X className="h-7 w-7" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root px-6 pb-6">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => {
                  const isActive = pathname === item.href || 
                    (item.href !== '/' && pathname?.startsWith(item.href))
                  return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={cn(
                      "-mx-3 block rounded-lg px-3 py-3 text-base font-semibold leading-7 transition-all duration-300",
                      isActive 
                        ? "text-sky-600 bg-sky-50" 
                        : "text-sky-900 hover:bg-sky-50"
                    )}
                    onClick={() => {
                      setMobileMenuOpen(false);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                  >
                    {item.name}
                  </Link>
                  )
                })}
              </div>
              <div className="py-6">
                <Button asChild className="w-full text-base py-6 bg-sky-600 hover:bg-sky-700 transition-all duration-300">
                  <Link href="/#contact" onClick={() => {
                    setMobileMenuOpen(false);
                    setTimeout(() => {
                      const el = document.getElementById('contact');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }, 100);
                  }}>
                    Contact Us
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
