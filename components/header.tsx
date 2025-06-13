"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Menu, X, Search, ShoppingBag, User, Heart } from "lucide-react"
import { Input } from "@/components/ui/input"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-[#263954] text-white backdrop-blur-md border-b border-[#1e2e46]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#home" className="flex items-center">
              <img
                src="/logo-04.svg"
                alt="Kings Mens Logo"
                className="h-14 w-auto logo-secondary"
              />
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <a
              href="#home"
              className="text-white hover:text-[#f7c981] font-medium transition-colors"
            >
              Home
            </a>
            <a
              href="#products"
              className="text-white hover:text-[#f7c981] font-medium transition-colors"
            >
              Products
            </a>
            <a
              href="#about"
              className="text-white hover:text-[#f7c981] font-medium transition-colors"
            >
              About
            </a>
            <a
              href="#reviews"
              className="text-white hover:text-[#f7c981] font-medium transition-colors"
            >
              Reviews
            </a>
            <a
              href="#contact"
              className="text-white hover:text-[#f7c981] font-medium transition-colors"
            >
              Contact
            </a>
          </nav>

          {/* Search Bar - Desktop */}
          <div className="hidden lg:flex items-center flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#f7c981] h-4 w-4" />
              <Input
                type="search"
                placeholder="Search products..."
                className="pl-10 bg-[#1e2e46] border-[#172435] text-white placeholder:text-[#a0aec0] focus:border-[#f7c981] focus:ring-[#f7c981]"
              />
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="icon"
              className="hidden lg:flex text-white hover:text-[#f7c981] hover:bg-[#1e2e46]"
            >
              <Heart className="h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="hidden lg:flex text-white hover:text-[#f7c981] hover:bg-[#1e2e46]"
            >
              <User className="h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="relative text-white hover:text-[#f7c981] hover:bg-[#1e2e46]"
            >
              <ShoppingBag className="h-5 w-5" />
              <Badge className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 bg-[#f7c981] hover:bg-[#e5b76d] text-[#263954]">
                3
              </Badge>
            </Button>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden text-white hover:text-[#f7c981] hover:bg-[#1e2e46]"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-[#1e2e46] py-4">
            <div className="flex flex-col space-y-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#f7c981] h-4 w-4" />
                <Input
                  type="search"
                  placeholder="Search products..."
                  className="pl-10 bg-[#1e2e46] border-[#172435] text-white placeholder:text-[#a0aec0]"
                />
              </div>
              <nav className="flex flex-col space-y-2">
                <a
                  href="#home"
                  className="text-[#263954] hover:text-[#f7c981] font-medium py-2"
                >
                  Home
                </a>
                <a
                  href="#products"
                  className="text-[#263954] hover:text-[#f7c981] font-medium py-2"
                >
                  Products
                </a>
                <a
                  href="#about"
                  className="text-[#263954] hover:text-[#f7c981] font-medium py-2"
                >
                  About
                </a>
                <a
                  href="#reviews"
                  className="text-[#263954] hover:text-[#f7c981] font-medium py-2"
                >
                  Reviews
                </a>
                <a
                  href="#contact"
                  className="text-[#263954] hover:text-[#f7c981] font-medium py-2"
                >
                  Contact
                </a>
              </nav>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
