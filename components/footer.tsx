import Link from "next/link";
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from "lucide-react";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <Link href="/" className="flex items-center space-x-2 mb-6">
              <div className="relative h-8 w-8 overflow-hidden rounded-lg">
                <Image
                  src="/logo.png"
                  alt="Lanka Chemical Centre Logo"
                  fill
                  className="object-cover"
                />
              </div>
              <span className="font-bold text-xl text-white">Lanka Chemical Centre</span>
            </Link>
            <p className="text-sm text-gray-400 mb-6">
              Providing reliable crop protection, fertilizer, and plant nutrition solutions for farmers, dealers, and commercial growers across Sri Lanka.
            </p>
            <div className="flex space-x-4">
              <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white"><Facebook className="h-5 w-5" /></a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white"><Twitter className="h-5 w-5" /></a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white"><Instagram className="h-5 w-5" /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="hover:text-green-400">About Us</Link></li>
              <li><Link href="/products" className="hover:text-green-400">Products</Link></li>
              <li><Link href="/crops" className="hover:text-green-400">Crop Solutions</Link></li>
              <li><Link href="/safety" className="hover:text-green-400">Safety & Resources</Link></li>
              <li><Link href="/knowledge" className="hover:text-green-400">Knowledge Centre</Link></li>
              <li><Link href="/contact" className="hover:text-green-400">Contact Us</Link></li>
            </ul>
          </div>

          {/* Useful Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Useful Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/contact" className="hover:text-green-400">Request Quotation</Link></li>
              <li><Link href="/safety#downloads" className="hover:text-green-400">Safety Data Sheets (SDS)</Link></li>
              <li><Link href="/privacy-policy" className="hover:text-green-400">Privacy Policy</Link></li>
              <li><Link href="/terms-of-use" className="hover:text-green-400">Terms of Use</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 text-green-500 shrink-0" />
                <span>123 Agriculture Avenue, Colombo 03, Sri Lanka</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-green-500 shrink-0" />
                <span>+94 11 234 5678</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-green-500 shrink-0" />
                <span>contact@lankachemicalcentre.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="text-xs text-gray-500 mb-4 max-w-4xl">
            <strong>Disclaimer:</strong> Always read and follow the approved product label before using any agricultural chemical. Product information shown on this website is for general reference only and may not include all safety, regulatory, environmental, or application requirements. Consult a qualified agricultural advisor before use. Lanka Chemical Centre is not responsible for misuse, incorrect application, or use contrary to approved instructions.
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
            <p>&copy; {new Date().getFullYear()} Lanka Chemical Centre. All rights reserved.</p>
            <p className="mt-2 md:mt-0 text-xs">Developed for Sri Lankan Agriculture</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
