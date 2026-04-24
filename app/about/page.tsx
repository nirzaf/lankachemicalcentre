import Link from "next/link";
import { CheckCircle2, Factory, FlaskConical, Users } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="bg-gray-50 py-12">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">About Lanka Chemical Centre</h1>
          <p className="text-lg text-gray-600">
            Lanka Chemical Centre is a Sri Lanka-based agriculture chemical and crop input supplier focused on supporting farmers, dealers, and commercial growers with reliable product information, responsible use guidance, and responsive customer service.
          </p>
        </div>

        {/* Vision & Mission */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white p-8 rounded-2xl border shadow-sm">
            <div className="w-12 h-12 bg-green-100 text-green-700 rounded-lg flex items-center justify-center mb-6">
              <FlaskConical className="h-6 w-6" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
            <p className="text-gray-600">
              To provide the Sri Lankan agricultural sector with high-quality crop protection and nutritional products, empowering farmers to improve yields while promoting safe and responsible application practices.
            </p>
          </div>
          <div className="bg-white p-8 rounded-2xl border shadow-sm">
            <div className="w-12 h-12 bg-blue-100 text-blue-700 rounded-lg flex items-center justify-center mb-6">
              <Users className="h-6 w-6" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h2>
            <p className="text-gray-600">
              To be the most trusted and reliable supplier of agricultural chemical solutions in Sri Lanka, recognized for our commitment to quality, farmer education, and sustainable agriculture support.
            </p>
          </div>
        </div>

        {/* Commitment */}
        <div className="bg-green-900 rounded-3xl p-8 md:p-12 text-white mb-16 relative overflow-hidden">
          <div className="absolute top-0 right-0 opacity-10">
            <Factory className="h-64 w-64 -mt-16 -mr-16" />
          </div>
          <div className="relative z-10 max-w-3xl">
            <h2 className="text-3xl font-bold mb-6">Our Commitment to Quality & Safety</h2>
            <div className="space-y-4 text-green-50 text-lg">
              <p>
                We understand that Sri Lankan farmers face unique challenges, from monsoon dependencies to specific pest pressures in crops like Paddy, Tea, and Vegetables. 
              </p>
              <p>
                Every product we distribute is selected to meet local agricultural needs while adhering strictly to safety regulations set by the relevant authorities in Sri Lanka.
              </p>
            </div>
            <ul className="mt-8 grid md:grid-cols-2 gap-4">
              {[
                "Strict compliance with label specifications",
                "Technical advisory for plantation buyers",
                "Clear documentation (Labels & SDS)"
              ].map((item, i) => (
                <li key={i} className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-green-400 mr-3 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Ready to work with us?</h3>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="bg-green-700 hover:bg-green-800 text-white px-6 py-3 rounded-lg font-medium transition-colors">
              Contact our team
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
