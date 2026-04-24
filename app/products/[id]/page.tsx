import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Download, FileText, Info, ShieldAlert, FileWarning } from "lucide-react";
import { products } from "@/lib/products";
import { notFound } from "next/navigation";

export default async function ProductDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const product = products.find(p => p.id === resolvedParams.id);

  if (!product) {
    notFound();
  }

  return (
    <div className="bg-white py-12">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Breadcrumb */}
        <Link href="/products" className="inline-flex items-center text-sm text-gray-500 hover:text-green-700 mb-8">
          <ArrowLeft className="h-4 w-4 mr-1" /> Back to Products
        </Link>

        {/* Top Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Image */}
          <div className="bg-slate-50 rounded-2xl aspect-square flex items-center justify-center relative overflow-hidden border border-slate-200 group">
            <Image 
              src={product.image} 
              alt={product.name}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
              priority
            />
          </div>

          {/* Details */}
          <div className="flex flex-col">
            <div className="mb-4">
               <span className="inline-block px-3 py-1 bg-green-100 text-green-800 text-xs font-bold uppercase tracking-wider rounded-md mb-3">
                 {product.category}
               </span>
               <h1 className="text-4xl font-bold text-gray-900 mb-2">{product.name}</h1>
               <p className="text-lg text-gray-600">{product.desc}</p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 mb-8 border space-y-4">
              <div className="grid grid-cols-3 gap-4">
                <span className="text-gray-500 text-sm">Active Ingredient</span>
                <span className="col-span-2 text-gray-900 font-medium text-sm">{product.activeIngredient}</span>
              </div>
              <div className="grid grid-cols-3 gap-4 border-t pt-4">
                <span className="text-gray-500 text-sm">Formulation</span>
                <span className="col-span-2 text-gray-900 font-medium text-sm">{product.formulation}</span>
              </div>
              <div className="grid grid-cols-3 gap-4 border-t pt-4">
                <span className="text-gray-500 text-sm">Suitable Crops</span>
                <span className="col-span-2 text-gray-900 font-medium text-sm">{product.crop}</span>
              </div>
              <div className="grid grid-cols-3 gap-4 border-t pt-4">
                <span className="text-gray-500 text-sm">Target Pest/Weed</span>
                <span className="col-span-2 text-gray-900 font-medium text-sm">{product.target}</span>
              </div>
              <div className="grid grid-cols-3 gap-4 border-t pt-4">
                <span className="text-gray-500 text-sm">Available Packs</span>
                <span className="col-span-2 font-medium">
                  {product.packSizes.map(size => (
                    <span key={size} className="inline-block bg-white border px-2 py-1 rounded text-xs mr-2">{size}</span>
                  ))}
                </span>
              </div>
            </div>

            <div className="mt-auto flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="flex-1 bg-green-700 hover:bg-green-800 text-white text-center py-4 rounded-xl font-bold transition-colors shadow-sm">
                Request Quotation
              </Link>
            </div>
            <div className="mt-4 flex items-center justify-center text-sm text-gray-500">
               <Info className="h-4 w-4 mr-1" /> Contact us for bulk pricing
            </div>
          </div>
        </div>

        {/* Downloads & Safety */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Product Resources</h2>
            <div className="bg-white border rounded-xl overflow-hidden">
              <div className="divide-y">
                 <div className="p-4 flex items-center justify-between hover:bg-gray-50 transition-colors">
                   <div className="flex items-center">
                     <FileText className="h-5 w-5 text-red-500 mr-3" />
                     <div>
                       <div className="font-semibold text-gray-900 text-sm">Approved Product Label</div>
                       <div className="text-xs text-gray-500">English, Sinhala, Tamil (PDF, 2.4MB)</div>
                     </div>
                   </div>
                   <button className="text-green-700 hover:bg-green-50 p-2 rounded-full"><Download className="h-5 w-5" /></button>
                 </div>
                 <div className="p-4 flex items-center justify-between hover:bg-gray-50 transition-colors">
                   <div className="flex items-center">
                     <FileWarning className="h-5 w-5 text-yellow-500 mr-3" />
                     <div>
                       <div className="font-semibold text-gray-900 text-sm">Safety Data Sheet (SDS)</div>
                       <div className="text-xs text-gray-500">English (PDF, 1.1MB)</div>
                     </div>
                   </div>
                   <button className="text-green-700 hover:bg-green-50 p-2 rounded-full"><Download className="h-5 w-5" /></button>
                 </div>
              </div>
            </div>
          </div>

          <div>
             <h2 className="text-2xl font-bold text-gray-900 mb-6">Safety Warning</h2>
             <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-xl">
               <div className="flex items-start mb-4">
                 <ShieldAlert className="h-6 w-6 text-yellow-600 mr-3 shrink-0" />
                 <div>
                   <h3 className="font-bold text-yellow-900">Restricted Use Note</h3>
                   <div className="text-sm font-medium text-gray-700 mt-1">Classification: {product.safetyClass}</div>
                 </div>
               </div>
               <p className="text-sm text-gray-700 leading-relaxed mb-4">
                 Use this product only according to the approved label and applicable Sri Lankan regulations. Product information on this website is for reference only and must not replace professional agricultural advice.
               </p>
               <Link href="/safety" className="text-yellow-700 font-semibold text-sm hover:underline">
                 Read our safety guide
               </Link>
             </div>
          </div>
        </div>

      </div>
    </div>
  );
}
