import Link from "next/link";
import { ShieldAlert, Book, Download, AlertTriangle, ShieldCheck } from "lucide-react";

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

        {/* Downloads */}
        <div className="max-w-4xl mx-auto" id="downloads">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Document Library</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {/* Category */}
            <div className="bg-white border rounded-xl overflow-hidden">
               <div className="bg-gray-100 px-6 py-4 border-b font-semibold text-gray-900">Safety Data Sheets (SDS)</div>
               <div className="divide-y">
                 {[
                   { name: "WeedMax 500 SDS", updated: "Jan 2026" },
                   { name: "PestKill 25 SDS", updated: "Nov 2025" },
                   { name: "TeaGuard Pro SDS", updated: "Dec 2025" }
                 ].map((doc) => (
                   <div key={doc.name} className="px-6 py-4 flex justify-between items-center hover:bg-gray-50">
                     <div>
                       <div className="text-sm font-medium text-gray-900">{doc.name}</div>
                       <div className="text-xs text-gray-500 mt-1">Updated {doc.updated}</div>
                     </div>
                      <button 
                        onClick={() => alert(`Starting download for ${doc.name}...`)}
                        className="text-green-700 p-2 hover:bg-green-50 rounded"
                        title="Download Document"
                      >
                        <Download className="h-4 w-4" />
                      </button>
                    </div>
                  ))}
                </div>
                <div className="p-4 bg-gray-50 text-center border-t">
                  <Link href="/products" className="text-sm font-medium text-green-700 hover:underline">Find SDS via specific products</Link>
                </div>
             </div>

            {/* General Resources */}
            <div className="bg-white border rounded-xl overflow-hidden">
               <div className="bg-gray-100 px-6 py-4 border-b font-semibold text-gray-900">Guides & Manuals</div>
               <div className="divide-y">
                 {[
                   { name: "Safe Spaying Techniques Guide", format: "PDF (English, Sinhala, Tamil)" },
                   { name: "Empty Container Disposal Guide", format: "PDF" },
                   { name: "Paddy Recommendation Chart 2026", format: "PDF" }
                 ].map((doc) => (
                   <div key={doc.name} className="px-6 py-4 flex justify-between items-center hover:bg-gray-50">
                     <div>
                       <div className="text-sm font-medium text-gray-900 leading-tight">{doc.name}</div>
                       <div className="text-xs text-gray-500 mt-1">{doc.format}</div>
                     </div>
                     <button 
                        onClick={() => alert(`Starting download for ${doc.name}...`)}
                        className="text-green-700 p-2 hover:bg-green-50 rounded"
                        title="Download Document"
                     >
                        <Download className="h-4 w-4" />
                     </button>
                   </div>
                 ))}
               </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
