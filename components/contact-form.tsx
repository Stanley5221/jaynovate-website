"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "@/hooks/use-toast"
import emailjs from "emailjs-com"
import PhoneInput from 'react-phone-input-2'
import Swal from 'sweetalert2'

// You can set these as environment variables or replace with your actual keys
const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "your_service_id"
const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "your_template_id"
const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "your_public_key"

const COUNTRY_CODES = [
  { code: "+1", label: "🇺🇸 US" },
  { code: "+44", label: "🇬🇧 UK" },
  { code: "+234", label: "🇳🇬 NG" },
  { code: "+91", label: "🇮🇳 IN" },
  { code: "+61", label: "🇦🇺 AU" },
  { code: "+27", label: "🇿🇦 ZA" },
  // Add more as needed
]

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [phone, setPhone] = useState("")

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    const form = e.currentTarget

    // Set the hidden full_phone field value before sending (for EmailJS)
    const fullPhoneInput = form.querySelector('input[name="full_phone"]') as HTMLInputElement | null
    if (fullPhoneInput) {
      fullPhoneInput.value = phone
    }

    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form, PUBLIC_KEY)
      Swal.fire({
        icon: 'success',
        title: 'Thank you!',
        text: 'Your message has been sent. We will get back to you as soon as possible.',
        confirmButtonColor: '#0ea5e9',
      })
      form.reset()
      setPhone("")
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Oops!',
        text: 'Something went wrong. Please try again.',
        confirmButtonColor: '#ef4444',
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="name">Name</Label>
          <Input
            id="name"
            name="name"
            placeholder="Your name"
            required
            className="border-sky-200 focus:border-sky-500 transition-all duration-300 hover:border-sky-300"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="Your email"
            required
            className="border-sky-200 focus:border-sky-500 transition-all duration-300 hover:border-sky-300"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="full_phone">Phone Number</Label>
          <div className="w-full">
            <PhoneInput
              country={'us'}
              value={phone}
              onChange={setPhone}
              inputProps={{
                name: 'full_phone',
                required: true,
                id: 'full_phone',
                autoComplete: 'tel',
              }}
              containerClass="w-full"
              buttonClass="!border-sky-200"
              dropdownClass="!border-sky-200"
              inputClass="w-full border-sky-200 focus:border-sky-500 transition-all duration-300 hover:border-sky-300 rounded-md h-12 pl-14 bg-white text-base shadow-none"
              enableSearch
            />
            <style jsx global>{`
              .react-tel-input {
                width: 100%;
              }
              .react-tel-input .form-control {
                border: 1px solid #bae6fd;
                border-radius: 0.375rem;
                height: 3rem;
                padding-left: 3.5rem;
                background: #fff;
                font-size: 1rem;
                width: 100%;
                box-shadow: none;
                transition: border-color 0.3s;
              }
              .react-tel-input .form-control:focus {
                border-color: #0ea5e9;
                box-shadow: none;
              }
              .react-tel-input .flag-dropdown {
                border: 1px solid #bae6fd;
                border-right: none;
                border-radius: 0.375rem 0 0 0.375rem;
                background: #fff;
                height: 3rem;
                width: 3rem;
                left: 0;
                top: 0;
                box-shadow: none;
              }
              .react-tel-input .selected-flag {
                height: 3rem;
                width: 3rem;
                padding-left: 0.5rem;
                padding-right: 0.5rem;
                display: flex;
                align-items: center;
                border-radius: 0.375rem 0 0 0.375rem;
              }
              .react-tel-input .country-list {
                border-radius: 0.375rem;
                border: 1px solid #bae6fd;
                font-size: 1rem;
                box-shadow: 0 2px 8px rgba(0,0,0,0.08);
              }
              .react-tel-input .country-list .country {
                padding: 0.5rem 1rem;
              }
              .react-tel-input .country-list .country.highlight {
                background: #e0f2fe;
              }
            `}</style>
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="company">Company</Label>
          <Input
            id="company"
            name="company"
            placeholder="Your company"
            className="border-sky-200 focus:border-sky-500 transition-all duration-300 hover:border-sky-300"
          />
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="subject">Subject</Label>
        <Input
          id="subject"
          name="subject"
          placeholder="How can we help?"
          required
          className="border-sky-200 focus:border-sky-500 transition-all duration-300 hover:border-sky-300"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="message">Message</Label>
        <Textarea
          id="message"
          name="message"
          placeholder="Tell us about your project or inquiry"
          className="min-h-32 border-sky-200 focus:border-sky-500 transition-all duration-300 hover:border-sky-300"
          required
        />
      </div>
      <Button
        type="submit"
        className="w-full bg-sky-600 hover:bg-sky-700 transition-all duration-300 hover:scale-105"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Sending..." : "Send Message"}
      </Button>
    </form>
  )
}
