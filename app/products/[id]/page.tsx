import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Info, ShieldAlert } from "lucide-react";
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
        {/* Safety Warning */}
        <div className="max-w-4xl">
           <h2 className="text-2xl font-bold text-gray-900 mb-6">Safety Warning</h2>
           <div className="bg-yellow-50 border border-yellow-200 p-6 md:p-8 rounded-2xl">
             <div className="flex items-start mb-6">
               <ShieldAlert className="h-8 w-8 text-yellow-600 mr-4 shrink-0" />
               <div>
                 <h3 className="text-xl font-bold text-yellow-900">Restricted Use Note</h3>
                 <div className="text-gray-700 mt-1 font-medium text-lg">Classification: {product.safetyClass}</div>
               </div>
             </div>
             <p className="text-gray-700 leading-relaxed mb-6 text-lg">
               Use this product only according to the approved label and applicable Sri Lankan regulations. Product information on this website is for reference only and must not replace professional agricultural advice.
             </p>
             <Link href="/safety" className="inline-flex items-center text-yellow-700 font-bold hover:underline text-lg">
               Read our full safety guide
             </Link>
           </div>
        </div>

      </div>
    </div>
  );
}
