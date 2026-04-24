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
            <div className="flex items-center gap-2 mb-6">
              <Image src="/logo.png" alt="Lanka Chemical Centre" width={40} height={40} className="rounded" />
              <span className="text-xl font-bold tracking-tight text-white">Lanka Chemical Centre</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Professional agricultural solutions and chemical distribution in Sri Lanka. Committed to farmer success and sustainable agriculture.
            </p>
            <div className="flex gap-4">
              <a href="https://facebook.com/lankachemicalcentre" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-700 transition-colors text-white">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://twitter.com/lankachemical" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-700 transition-colors text-white">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="https://instagram.com/lankachemicalcentre" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-700 transition-colors text-white">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li><Link href="/products" className="hover:text-white transition-colors">Products</Link></li>
              <li><Link href="/knowledge" className="hover:text-white transition-colors">Knowledge Centre</Link></li>
              <li><Link href="/crops" className="hover:text-white transition-colors">Crop Solutions</Link></li>
              <li><Link href="/safety" className="hover:text-white transition-colors">Safety & SDS</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
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

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-bold mb-6">Contact</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-green-600 shrink-0" />
                <span>Anuradhapura Road, Horawapothana, Sri Lanka</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-green-600 shrink-0" />
                <a href="tel:+94112345678" className="hover:text-white">+94 11 234 5678</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-green-600 shrink-0" />
                <a href="mailto:contact@lankachemicalcentre.com" className="hover:text-white">contact@lankachemicalcentre.com</a>
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
