import Link from "next/link";
import { CheckCircle2, Factory, FlaskConical, Users, MapPin, Calendar, FileText, Target, ShieldCheck, Briefcase } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="bg-gray-50 py-12">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">About Lanka Chemical Centre</h1>
          <p className="text-lg text-gray-600">
            Lanka Chemical Centre is a specialized retailer and distributor within the Sri Lankan agricultural landscape, focused on supporting farmers, dealers, and commercial growers with reliable product information, responsible use guidance, and responsive customer service.
          </p>
        </div>

        {/* General Business Information */}
        <div className="bg-white rounded-2xl border shadow-sm mb-16 overflow-hidden">
          <div className="bg-green-700 px-8 py-6 text-white flex items-center gap-4">
            <Briefcase className="h-8 w-8 text-green-200" />
            <h2 className="text-2xl font-bold">General Business Information</h2>
          </div>
          <div className="p-8 grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-green-50 text-green-700 rounded-lg flex items-center justify-center shrink-0">
                  <Factory className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Company Overview</h3>
                  <p className="text-gray-600 mt-1">
                    <strong>Business Type:</strong> Individual Business (Sole Proprietorship)<br/>
                    <strong>Nature of Business:</strong> Sale of Agriculture Chemical Products
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-green-50 text-green-700 rounded-lg flex items-center justify-center shrink-0">
                  <Calendar className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Date of Commencement</h3>
                  <p className="text-gray-600 mt-1">August 20, 2019</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-green-50 text-green-700 rounded-lg flex items-center justify-center shrink-0">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Principal Place of Business</h3>
                  <p className="text-gray-600 mt-1">Anuradhapura Road, Horawapothana, Sri Lanka</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-green-50 text-green-700 rounded-lg flex items-center justify-center shrink-0">
                  <FileText className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Registration Details</h3>
                  <div className="text-gray-600 mt-1 space-y-2 text-sm">
                    <p><strong>Registering Authority:</strong> North Central Provincial Council, Sri Lanka</p>
                    <p><strong>Registration Number:</strong> NPC HRP/EST/PERMT/10/11/04/68</p>
                    <p><strong>Certificate Numbers:</strong> 118460 (English translation) / 118480 (Extract from original)</p>
                    <p className="text-xs text-gray-500 italic mt-2">Registered under the Business Names Ordinance (Cap. 149) incorporated by Business Name Statute No. 1 of 1992</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
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

        {/* Ownership and Management */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Ownership & Management</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl border shadow-sm">
              <div className="w-12 h-12 bg-blue-100 text-blue-700 rounded-lg flex items-center justify-center mb-6">
                <Users className="h-6 w-6" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Siddik Mohamed Rinsan</h3>
              <p className="text-blue-700 font-medium mb-6">Primary Owner</p>
              <div className="space-y-3 text-sm text-gray-600">
                <p><strong>Full Name:</strong> Siddik Mohamed Rinsan (Siddeek Mohammadu Rinzan)</p>
                <p><strong>Nationality:</strong> Sri Lankan</p>
                <p><strong>Date of Birth:</strong> January 1, 1989</p>
                <p><strong>NIC:</strong> 890011616V</p>
                <p><strong>Residence:</strong> Galenbidunuwewa, Horawapothana</p>
                <p><strong>Role:</strong> Registered sole owner</p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl border shadow-sm">
              <div className="w-12 h-12 bg-blue-100 text-blue-700 rounded-lg flex items-center justify-center mb-6">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Mohamed Rafy Mohammed Imran</h3>
              <p className="text-blue-700 font-medium mb-6">Associated Director</p>
              <div className="space-y-3 text-sm text-gray-600">
                <p><strong>Full Name:</strong> Mohamed Rafy Mohammed Imran</p>
                <p><strong>Nationality:</strong> Sri Lankan</p>
                <p><strong>Date of Birth:</strong> June 18, 1994</p>
                <p><strong>NIC:</strong> 199417000047</p>
                <p><strong>Role:</strong> Listed with the profession of Director, operating in a directorship capacity</p>
              </div>
            </div>
          </div>
        </div>

        {/* Strategic Context */}
        <div className="bg-green-900 rounded-3xl p-8 md:p-12 text-white mb-16 relative overflow-hidden">
          <div className="absolute top-0 right-0 opacity-10">
            <Target className="h-64 w-64 -mt-16 -mr-16" />
          </div>
          <div className="relative z-10">
            <h2 className="text-3xl font-bold mb-8">Strategic Business Context & Our Commitment</h2>
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-xl font-bold text-green-200 mb-3">Target Markets</h3>
                <p className="text-green-50 mb-6">
                  We aim to address specific needs in the Sri Lankan agricultural sector, specifically focusing on Paddy (Rice), Tea, and Horticultural crops.
                </p>
                
                <h3 className="text-xl font-bold text-green-200 mb-3">Strategic Objectives</h3>
                <p className="text-green-50 mb-6">
                  Lanka Chemical Centre is actively pursuing a strategic market integration plan to engage South Korean agrochemical manufacturers to bring world-class agricultural solutions to Sri Lankan farmers.
                </p>
                
                <h3 className="text-xl font-bold text-green-200 mb-3">Quality & Safety</h3>
                <p className="text-green-50">
                  Every product we distribute is selected to meet local agricultural needs while adhering strictly to safety regulations set by the relevant authorities in Sri Lanka.
                </p>
              </div>
              
              <div className="space-y-6">
                <div className="bg-green-800/50 rounded-xl p-6 border border-green-700">
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-400" />
                    Targeted International Partners
                  </h3>
                  <p className="text-green-100 text-sm mb-4">We are positioning ourselves to collaborate with leading global innovators, including:</p>
                  <ul className="space-y-3">
                    <li className="flex flex-col">
                      <span className="font-semibold text-white">Synthetic Pesticides</span>
                      <span className="text-green-200 text-sm">Farm Hannong, Dong Bang Agro</span>
                    </li>
                    <li className="flex flex-col">
                      <span className="font-semibold text-white">Specialized Fertilizers & Eco-friendly Solutions</span>
                      <span className="text-green-200 text-sm">Nousbo, Nara Bio</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-green-800/50 rounded-xl p-6 border border-green-700">
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-400" />
                    Our Service Standards
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-green-400 mr-3 shrink-0 mt-0.5" />
                      <span className="text-green-50 text-sm">Strict compliance with label specifications</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-green-400 mr-3 shrink-0 mt-0.5" />
                      <span className="text-green-50 text-sm">Technical advisory for plantation buyers</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-green-400 mr-3 shrink-0 mt-0.5" />
                      <span className="text-green-50 text-sm">Clear documentation (Labels & SDS)</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
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
