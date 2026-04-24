import Image from "next/image";
import Link from "next/link";
import { Filter, Search } from "lucide-react";

export default function ProductsPage() {
  const products = [
    { 
      id: "1", 
      name: "WeedMax 500", 
      category: "Herbicide", 
      crop: "Paddy", 
      desc: "Effective control against broadleaf weeds and sedges in paddy cultivation.",
      image: "/images/products/weedmax_500.png"
    },
    { 
      id: "2", 
      name: "NutriBoost NPK", 
      category: "Fertilizer", 
      crop: "Vegetables", 
      desc: "Complete water-soluble NPK mix for improved vegetable yield and quality.",
      image: "/images/products/nutriboost_npk.png"
    },
    { 
      id: "3", 
      name: "TeaGuard Pro", 
      category: "Fungicide", 
      crop: "Tea", 
      desc: "Preventative fungicide for managing blister blight in tea plantations.",
      image: "/images/products/teaguard_pro.png"
    },
    { 
      id: "4", 
      name: "PestKill 25", 
      category: "Insecticide", 
      crop: "Multiple", 
      desc: "Broad-spectrum insecticide for controlling stem borers and leaf folders.",
      image: "/images/products/pestkill_25.png"
    },
    { 
      id: "5", 
      name: "RootVigor", 
      category: "Plant Growth Regulator", 
      crop: "Root Crops", 
      desc: "Stimulates early root development and enhances nutrient uptake.",
      image: "/images/products/rootvigor.png"
    },
    { 
      id: "6", 
      name: "CocoShield", 
      category: "Fungicide", 
      crop: "Coconut", 
      desc: "Specialized formulation to combat common fungal infections in coconut palms.",
      image: "/images/products/cocoshield.png"
    },
  ];

  return (
    <div className="bg-gray-50 py-12 min-h-[calc(100vh-200px)]">
      <div className="container mx-auto px-4 md:px-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Our Products</h1>
        
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Sidebar / Filters */}
          <div className="w-full lg:w-1/4">
            <div className="bg-white p-6 rounded-xl border shadow-sm sticky top-24">
              <div className="flex justify-between items-center mb-6">
                <h3 className="font-bold flex items-center"><Filter className="h-4 w-4 mr-2"/> Filters</h3>
                <button className="text-xs text-gray-500 hover:text-green-700 underline">Clear</button>
              </div>
              
              {/* Search */}
              <div className="relative mb-6">
                <input 
                  type="text" 
                  placeholder="Search products..." 
                  className="w-full pl-9 pr-4 py-2 bg-gray-50 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
              </div>

              {/* Categories */}
              <div className="mb-6">
                <h4 className="font-semibold text-sm mb-3 text-gray-900">Categories</h4>
                <div className="space-y-2">
                  {['Herbicides', 'Insecticides', 'Fungicides', 'Fertilizers', 'Micronutrients'].map(cat => (
                    <label key={cat} className="flex items-center text-sm text-gray-600">
                      <input type="checkbox" className="rounded border-gray-300 text-green-600 focus:ring-green-500 mr-3" />
                      {cat}
                    </label>
                  ))}
                </div>
              </div>

              {/* Crops */}
              <div>
                <h4 className="font-semibold text-sm mb-3 text-gray-900">Suitable For</h4>
                <div className="space-y-2">
                  {['Paddy', 'Tea', 'Vegetables', 'Coconut', 'Spices'].map(crop => (
                    <label key={crop} className="flex items-center text-sm text-gray-600">
                      <input type="checkbox" className="rounded border-gray-300 text-green-600 focus:ring-green-500 mr-3" />
                      {crop}
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Product Grid */}
          <div className="w-full lg:w-3/4">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {products.map(product => (
                <div key={product.id} className="group bg-white border rounded-xl p-5 flex flex-col hover:border-green-300 hover:shadow-md transition-all">
                  <Link href={`/products/${product.id}`} className="block">
                    <div className="w-full h-48 bg-slate-100 rounded-lg mb-4 flex items-center justify-center text-slate-400 overflow-hidden border border-slate-200 group-hover:bg-green-50 transition-colors relative">
                      <Image 
                        src={product.image} 
                        alt={product.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  </Link>
                  <div className="mb-2 flex justify-between items-start">
                    <span className="text-xs font-semibold uppercase tracking-wider text-green-600 bg-green-50 px-2 py-1 rounded">{product.category}</span>
                    <span className="text-xs text-gray-500">{product.crop}</span>
                  </div>
                  <Link href={`/products/${product.id}`}>
                    <h3 className="text-lg font-bold text-gray-900 mb-2 hover:text-green-700">{product.name}</h3>
                  </Link>
                  <p className="text-sm text-gray-600 mb-6 flex-grow line-clamp-2">{product.desc}</p>
                  <div className="mt-auto flex gap-2">
                    <Link href={`/products/${product.id}`} className="flex-1 text-center bg-gray-100 hover:bg-gray-200 text-gray-900 py-2 rounded-lg text-sm font-medium transition-colors">Details</Link>
                    <Link href="/contact" className="flex-1 text-center bg-green-700 hover:bg-green-800 text-white py-2 rounded-lg text-sm font-medium transition-colors">Quote</Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
