"use client";

import Image from "next/image";
import Link from "next/link";
import { Filter, Search, X } from "lucide-react";
import { products } from "@/lib/products";
import { useState, useMemo, Suspense } from "react";
import { useSearchParams } from "next/navigation";

function ProductsContent() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get("category");
  const initialCrop = searchParams.get("crop");

  const categories = ["Herbicide", "Insecticide", "Fungicide", "Fertilizer", "Plant Growth Regulator"];
  const crops = ["Paddy", "Tea", "Vegetables", "Coconut", "Multiple", "Root Crops"];

  // Normalize initial values
  const normalizeCategory = (cat: string) => {
    let normalized = cat.toLowerCase();
    if (normalized.endsWith('s')) normalized = normalized.slice(0, -1);
    return categories.find(c => c.toLowerCase() === normalized) || "";
  };

  const normalizeCrop = (crop: string) => {
    return crops.find(c => c.toLowerCase() === crop.toLowerCase()) || "";
  };

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategories, setSelectedCategories] = useState<string[]>(
    initialCategory && normalizeCategory(initialCategory) ? [normalizeCategory(initialCategory)] : []
  );
  const [selectedCrops, setSelectedCrops] = useState<string[]>(
    initialCrop && normalizeCrop(initialCrop) ? [normalizeCrop(initialCrop)] : []
  );

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            product.desc.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesCategory = selectedCategories.length === 0 || 
                              selectedCategories.some(cat => product.category.toLowerCase() === cat.toLowerCase());
      
      const matchesCrop = selectedCrops.length === 0 || 
                          selectedCrops.some(crop => product.crop.toLowerCase() === crop.toLowerCase());

      return matchesSearch && matchesCategory && matchesCrop;
    });
  }, [searchQuery, selectedCategories, selectedCrops]);

  const toggleCategory = (category: string) => {
    setSelectedCategories(prev => 
      prev.includes(category) ? prev.filter(c => c !== category) : [...prev, category]
    );
  };

  const toggleCrop = (crop: string) => {
    setSelectedCrops(prev => 
      prev.includes(crop) ? prev.filter(c => c !== crop) : [...prev, crop]
    );
  };

  const clearFilters = () => {
    setSearchQuery("");
    setSelectedCategories([]);
    setSelectedCrops([]);
  };

  return (
    <div className="bg-gray-50 py-12 min-h-[calc(100vh-200px)]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <h1 className="text-3xl font-bold text-gray-900">Our Products</h1>
          <p className="text-gray-500 font-medium">{filteredProducts.length} Products Found</p>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Sidebar / Filters */}
          <div className="w-full lg:w-1/4">
            <div className="bg-white p-6 rounded-xl border shadow-sm sticky top-24">
              <div className="flex justify-between items-center mb-6">
                <h3 className="font-bold flex items-center"><Filter className="h-4 w-4 mr-2"/> Filters</h3>
                {(searchQuery || selectedCategories.length > 0 || selectedCrops.length > 0) && (
                  <button 
                    onClick={clearFilters}
                    className="text-xs text-red-500 hover:text-red-700 underline flex items-center gap-1"
                  >
                    <X className="h-3 w-3" /> Clear
                  </button>
                )}
              </div>
              
              {/* Search */}
              <div className="relative mb-6">
                <input 
                  type="text" 
                  placeholder="Search products..." 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-4 py-2 bg-gray-50 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
              </div>

              {/* Categories */}
              <div className="mb-6">
                <h4 className="font-semibold text-sm mb-3 text-gray-900">Categories</h4>
                <div className="space-y-2">
                  {categories.map(cat => (
                    <label key={cat} className="flex items-center text-sm text-gray-600 cursor-pointer hover:text-green-700 transition-colors">
                      <input 
                        type="checkbox" 
                        checked={selectedCategories.includes(cat)}
                        onChange={() => toggleCategory(cat)}
                        className="rounded border-gray-300 text-green-600 focus:ring-green-500 mr-3" 
                      />
                      {cat}s
                    </label>
                  ))}
                </div>
              </div>

              {/* Crops */}
              <div>
                <h4 className="font-semibold text-sm mb-3 text-gray-900">Suitable For</h4>
                <div className="space-y-2">
                  {crops.map(crop => (
                    <label key={crop} className="flex items-center text-sm text-gray-600 cursor-pointer hover:text-green-700 transition-colors">
                      <input 
                        type="checkbox" 
                        checked={selectedCrops.includes(crop)}
                        onChange={() => toggleCrop(crop)}
                        className="rounded border-gray-300 text-green-600 focus:ring-green-500 mr-3" 
                      />
                      {crop}
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Product Grid */}
          <div className="w-full lg:w-3/4">
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredProducts.map(product => (
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
            ) : (
              <div className="bg-white rounded-xl border p-12 text-center">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="h-8 w-8 text-gray-400" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">No products found</h3>
                <p className="text-gray-500 mb-6">Try adjusting your filters or search query to find what you're looking for.</p>
                <button 
                  onClick={clearFilters}
                  className="bg-green-700 text-white px-6 py-2 rounded-lg font-medium hover:bg-green-800 transition-colors"
                >
                  Clear All Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ProductsPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-700"></div>
      </div>
    }>
      <ProductsContent />
    </Suspense>
  );
}
