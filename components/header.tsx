"use client";

import Link from "next/link";
import { Search, Globe, Phone, Menu, X } from "lucide-react";
import { useState } from "react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white shadow-sm">
      {/* Top bar */}
      <div className="bg-green-800 text-white py-1">
        <div className="container mx-auto px-4 md:px-6 flex justify-between items-center text-xs md:text-sm">
          <div className="flex items-center space-x-4">
            <span className="flex items-center"><Phone className="h-3 w-3 mr-1" /> +94 11 234 5678</span>
            <span className="hidden md:inline">contact@lankachemicalcentre.com</span>
          </div>
          <div className="flex items-center space-x-4">
            <button className="flex items-center hover:text-green-200">
              <Globe className="h-3 w-3 mr-1" /> English
            </button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <div className="h-10 w-10 bg-green-700 rounded-lg flex items-center justify-center text-white font-bold text-xl">
            LC
          </div>
          <div>
            <div className="font-bold text-xl leading-tight text-green-900">Lanka Chemical</div>
            <div className="text-xs text-green-700 font-medium tracking-wider">CENTRE</div>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-6 text-sm font-medium text-gray-700">
          <Link href="/" className="hover:text-green-700 transition-colors">Home</Link>
          <Link href="/about" className="hover:text-green-700 transition-colors">About Us</Link>
          <Link href="/products" className="hover:text-green-700 transition-colors">Products</Link>
          <Link href="/crops" className="hover:text-green-700 transition-colors">Crop Solutions</Link>
          <Link href="/safety" className="hover:text-green-700 transition-colors">Safety</Link>
          <Link href="/knowledge" className="hover:text-green-700 transition-colors">Knowledge</Link>
        </nav>

        {/* Actions */}
        <div className="hidden lg:flex items-center space-x-4">
          <button className="text-gray-500 hover:text-green-700">
            <Search className="h-5 w-5" />
          </button>
          <Link 
            href="/contact" 
            className="bg-green-700 hover:bg-green-800 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors"
          >
            Request Quote
          </Link>
        </div>

        {/* Mobile menu button */}
        <button 
          className="lg:hidden text-gray-500"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t py-4 px-4 shadow-lg absolute w-full">
          <nav className="flex flex-col space-y-4">
            <Link href="/" onClick={() => setIsMenuOpen(false)} className="text-gray-700 font-medium">Home</Link>
            <Link href="/about" onClick={() => setIsMenuOpen(false)} className="text-gray-700 font-medium">About Us</Link>
            <Link href="/products" onClick={() => setIsMenuOpen(false)} className="text-gray-700 font-medium">Products</Link>
            <Link href="/crops" onClick={() => setIsMenuOpen(false)} className="text-gray-700 font-medium">Crop Solutions</Link>
            <Link href="/safety" onClick={() => setIsMenuOpen(false)} className="text-gray-700 font-medium">Safety & Resources</Link>
            <Link href="/knowledge" onClick={() => setIsMenuOpen(false)} className="text-gray-700 font-medium">Knowledge Centre</Link>
            <Link href="/contact" onClick={() => setIsMenuOpen(false)} className="text-gray-700 font-medium">Contact Us</Link>
            <Link 
              href="/contact" 
              onClick={() => setIsMenuOpen(false)}
              className="bg-green-700 text-white px-4 py-2 rounded-md text-center font-medium mt-2"
            >
              Request Quote
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
