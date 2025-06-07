import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Newsletter Section */}
      <div className="border-b border-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4">Stay in Style</h3>
            <p className="text-gray-400 mb-6">
              Subscribe to our newsletter and be the first to know about new collections, exclusive offers, and fashion
              insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:border-amber-600"
              />
              <Button className="bg-amber-600 hover:bg-amber-700 text-white px-8">Subscribe</Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-4">
              <img
                src="/logo-04.svg"
                alt="Kings Mens Gray-Orange Logo"
                className="h-12 w-auto logo-gray-orange"
              />
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Elevating fashion with premium quality and timeless design. Where luxury meets comfort in every thread.
            </p>
            <div className="space-y-3">
              <div className="flex items-center text-gray-400">
                <MapPin className="h-5 w-5 mr-3 text-amber-600" />
                <span>123 Fashion Avenue, NY 10001</span>
              </div>
              <div className="flex items-center text-gray-400">
                <Phone className="h-5 w-5 mr-3 text-amber-600" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center text-gray-400">
                <Mail className="h-5 w-5 mr-3 text-amber-600" />
                <span>hello@kingsmens.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-400 hover:text-amber-600 transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-amber-600 transition-colors">
                  Our Story
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-amber-600 transition-colors">
                  Size Guide
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-amber-600 transition-colors">
                  Care Instructions
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-amber-600 transition-colors">
                  Sustainability
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-amber-600 transition-colors">
                  Careers
                </a>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Customer Service</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-400 hover:text-amber-600 transition-colors">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-amber-600 transition-colors">
                  Shipping Info
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-amber-600 transition-colors">
                  Returns & Exchanges
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-amber-600 transition-colors">
                  Track Your Order
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-amber-600 transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-amber-600 transition-colors">
                  Live Chat
                </a>
              </li>
            </ul>
          </div>

          {/* Legal & Social */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Legal & Social</h3>
            <ul className="space-y-3 mb-6">
              <li>
                <a href="#" className="text-gray-400 hover:text-amber-600 transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-amber-600 transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-amber-600 transition-colors">
                  Cookie Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-amber-600 transition-colors">
                  Accessibility
                </a>
              </li>
            </ul>

            <div>
              <h4 className="text-sm font-semibold mb-4 text-gray-300">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-amber-600 transition-colors">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-amber-600 transition-colors">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-amber-600 transition-colors">
                  <Twitter className="h-5 w-5" />
                </a>
                <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-amber-600 transition-colors">
                  <Youtube className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">© 2025 Kings Mens. All rights reserved.</p>
            <div className="flex items-center space-x-6 mt-4 md:mt-0">
              <img src="/placeholder.svg?height=24&width=40" alt="Visa" className="h-6 opacity-70" />
              <img src="/placeholder.svg?height=24&width=40" alt="Mastercard" className="h-6 opacity-70" />
              <img src="/placeholder.svg?height=24&width=40" alt="PayPal" className="h-6 opacity-70" />
              <img src="/placeholder.svg?height=24&width=40" alt="Apple Pay" className="h-6 opacity-70" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
