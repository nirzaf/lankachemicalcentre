import Link from "next/link";
import { ShieldAlert, Book, AlertTriangle, ShieldCheck } from "lucide-react";

export default function SafetyPage() {
  return (
    <div className="bg-gray-50 py-12 min-h-screen">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="w-16 h-16 bg-yellow-100 text-yellow-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <ShieldCheck className="h-8 w-8" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Safety & Resources</h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            Responsible use is critical for effective crop protection, personal safety, and environmental sustainability. Read our safety guidelines and access essential documents here.
          </p>
        </div>

        {/* Guidelines */}
        <div className="max-w-4xl mx-auto bg-white rounded-2xl p-8 border shadow-sm mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b pb-4">Key Safety Guidelines</h2>
          
          <div className="space-y-6">
            <div className="flex">
              <div className="shrink-0 mt-1">
                <Book className="h-6 w-6 text-blue-600" />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-1">1. Always Read the Label</h3>
                <p className="text-gray-600 text-sm">Before opening any chemical container, read the approved product label entirely. The label contains legal requirements for application rates, safety gear, and emergency instructions.</p>
              </div>
            </div>

            <div className="flex">
              <div className="shrink-0 mt-1">
                <ShieldAlert className="h-6 w-6 text-orange-600" />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-1">2. Wear Protective Equipment (PPE)</h3>
                <p className="text-gray-600 text-sm">Always wear long sleeves, long trousers, closed shoes, gloves, and a mask/face shield when mixing and applying chemicals. Never apply against the wind.</p>
              </div>
            </div>

            <div className="flex">
              <div className="shrink-0 mt-1">
                <AlertTriangle className="h-6 w-6 text-red-600" />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-1">3. Safe Storage</h3>
                <p className="text-gray-600 text-sm">Store all agricultural chemicals in their original containers, tightly closed, in a locked cabinet away from children, food, animal feed, and water sources.</p>
              </div>
            </div>
            
            <div className="bg-yellow-50 p-4 rounded-xl border border-yellow-200 mt-6 text-sm text-yellow-900">
               <strong>Important Note:</strong> This information does not replace professional agricultural advice or the legal instructions found on the approved product label. Always comply with Sri Lankan regulations.
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
