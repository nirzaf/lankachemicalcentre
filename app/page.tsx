import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2, ShieldCheck, Sprout, Building2, BookOpen } from "lucide-react";

export default function Home() {
  return (
    <div className="w-full bg-slate-50 text-slate-900 font-sans p-4 md:p-6 flex flex-col gap-4">
      {/* Bento Grid Container */}
      <div className="grid grid-cols-1 md:grid-cols-4 auto-rows-auto gap-4 max-w-[1400px] mx-auto w-full flex-grow">
        
        {/* Hero Section (Span 2x2) */}
        <div className="md:col-span-2 md:row-span-2 bg-slate-900 rounded-[2rem] p-8 border border-slate-800 text-white flex flex-col justify-between overflow-hidden relative">
          <div className="absolute inset-0 opacity-40">
             <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/50 to-slate-900 z-10" />
          </div>
          <div className="relative z-20 flex flex-col h-full justify-between">
            <div>
              <span className="self-start inline-block bg-emerald-500/20 text-emerald-300 px-3 py-1 rounded-lg text-xs font-bold uppercase tracking-wider italic mb-6 border border-emerald-500/30">
                Trusted in Sri Lanka
              </span>
              <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 leading-tight">
                Agricultural Chemical Solutions for Sri Lankan Farmers
              </h1>
              <p className="text-lg text-slate-400 mb-8 max-w-md">
                Lanka Chemical Centre provides reliable crop protection, fertilizer, and plant nutrition solutions for farmers, dealers, and commercial growers.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 mt-4">
              <Link href="/products" className="inline-flex justify-center items-center px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-white text-sm font-bold rounded-xl transition-colors">
                View Products <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link href="/contact" className="inline-flex justify-center items-center px-6 py-3 bg-white text-slate-900 hover:bg-slate-100 text-sm font-bold rounded-xl transition-colors border border-slate-200">
                Request Quotation
              </Link>
            </div>
          </div>
        </div>

        {/* Product Categories (Span 2x2) */}
        <div className="md:col-span-2 md:row-span-2 bg-white rounded-[2rem] border border-slate-200 p-8 shadow-sm flex flex-col">
          <div className="flex justify-between items-end mb-6">
            <div>
              <h2 className="text-2xl font-extrabold text-slate-900">Core Product Categories</h2>
              <p className="text-slate-500 text-sm font-medium">Explore our diverse range of solutions.</p>
            </div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 flex-grow content-start">
            {[
              { title: "Herbicides", icon: <Sprout className="h-5 w-5" />, desc: "Weed management" },
              { title: "Insecticides", icon: <Sprout className="h-5 w-5" />, desc: "Pest control" },
              { title: "Fungicides", icon: <Sprout className="h-5 w-5" />, desc: "Disease prevention" },
              { title: "Fertilizers", icon: <Sprout className="h-5 w-5" />, desc: "Plant nutrition" },
              { title: "Micronutrients", icon: <Sprout className="h-5 w-5" />, desc: "Essential elements" },
              { title: "PGRs", icon: <Sprout className="h-5 w-5" />, desc: "Growth regulators" }
            ].map((cat, i) => (
              <Link key={i} href={`/products?category=${cat.title.toLowerCase()}`} className="group p-4 border border-slate-100 bg-slate-50 rounded-2xl hover:border-indigo-200 hover:bg-indigo-50 transition-all flex flex-col items-center text-center shadow-sm">
                <div className="w-10 h-10 bg-white text-indigo-600 flex items-center justify-center rounded-xl mb-3 shadow-sm group-hover:scale-110 transition-transform">
                  {cat.icon}
                </div>
                <h3 className="font-bold text-slate-900 text-sm mb-1">{cat.title}</h3>
                <p className="text-xs text-slate-500 leading-tight">{cat.desc}</p>
              </Link>
            ))}
          </div>
        </div>

        {/* Safety Banner -> Vertical Metric Card 1 */}
        <div className="bg-emerald-600 rounded-[2rem] p-6 flex flex-col justify-between text-white border border-emerald-500 md:col-span-1 md:row-span-1">
          <div className="bg-emerald-500/50 w-12 h-12 rounded-2xl flex items-center justify-center mb-6">
            <ShieldCheck className="w-6 h-6 text-emerald-100" />
          </div>
          <div>
            <p className="text-emerald-100 text-xs font-bold uppercase tracking-widest mb-1">Safety First</p>
            <p className="text-2xl font-bold leading-tight mb-2">Responsible Use Matters</p>
            <p className="text-emerald-50 text-sm font-medium">Always read and follow the approved product label before use.</p>
          </div>
          <Link href="/safety" className="text-emerald-200 text-xs font-bold italic underline mt-6">
            View Safety Resources
          </Link>
        </div>

        {/* Knowledge Centre -> Vertical Metric Card 2 */}
        <div className="bg-slate-900 rounded-[2rem] p-6 flex flex-col justify-between text-white border border-slate-800 md:col-span-1 md:row-span-1">
          <div className="bg-slate-800 w-12 h-12 rounded-2xl flex items-center justify-center mb-6">
             <BookOpen className="w-6 h-6 text-emerald-400" />
          </div>
          <div className="mb-4">
            <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-1">Knowledge Centre</p>
            <p className="text-2xl font-bold">Latest Insights</p>
          </div>
          <div className="space-y-4 mb-6">
             <Link href="/knowledge" className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shrink-0"></div>
                <p className="text-sm font-bold text-slate-200 truncate">Maha Season Checklist</p>
             </Link>
             <Link href="/knowledge" className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-indigo-500 shrink-0"></div>
                <p className="text-sm font-bold text-slate-200 truncate">Storage Safety</p>
             </Link>
          </div>
          <Link href="/knowledge" className="text-emerald-400 text-xs font-bold mt-auto">Read all articles &rarr;</Link>
        </div>

        {/* Crop Solutions -> Wide Card */}
        <div className="md:col-span-2 bg-emerald-50 rounded-[2rem] border border-emerald-100 p-6 flex flex-col justify-between md:row-span-1">
          <div className="flex justify-between items-start mb-6">
            <div className="text-emerald-600">
              <Sprout className="w-10 h-10" />
            </div>
            <Link href="/crops" className="text-emerald-700 text-xs font-bold uppercase tracking-wider hover:underline">View all crops</Link>
          </div>
          <div className="mb-6">
            <p className="text-2xl font-black text-emerald-900 leading-none mb-2">Crop Solutions</p>
            <p className="text-sm font-medium text-emerald-700">Find tailored recommendations, treatment schedules, and expert advice for specific crops grown in Sri Lanka.</p>
          </div>
          <div className="flex flex-wrap gap-2 text-sm">
            {['Paddy', 'Tea', 'Vegetables', 'Coconut'].map((crop) => (
              <Link key={crop} href={`/crops/${crop.toLowerCase()}`} className="bg-white text-emerald-800 px-4 py-2 rounded-xl border border-emerald-200 font-bold shadow-sm hover:bg-emerald-100 transition-colors">
                {crop}
              </Link>
            ))}
          </div>
        </div>

        {/* Dealer area removed */}

        {/* Featured Products */}
        <div className="md:col-span-2 bg-white rounded-[2rem] border border-slate-200 p-6 shadow-sm flex flex-col">
          <div className="flex justify-between items-center mb-6">
             <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest">Featured Products</h3>
             <Link href="/products" className="text-indigo-600 text-xs font-bold hover:underline">View All</Link>
          </div>
          <div className="space-y-3">
             {/* Product 1 */}
             <Link href="/products/1" className="flex items-center gap-4 p-3 hover:bg-slate-50 rounded-2xl transition-colors border border-transparent hover:border-slate-100 cursor-pointer">
               <div className="w-12 h-12 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center shrink-0 overflow-hidden relative">
                 <Image 
                   src="/images/products/weedmax_500.png" 
                   alt="WeedMax 500"
                   fill
                   className="object-cover"
                 />
               </div>
               <div className="flex-grow">
                 <div className="flex justify-between items-center mb-1">
                   <p className="text-sm font-bold text-slate-900">WeedMax 500</p>
                   <span className="bg-emerald-50 text-emerald-700 border border-emerald-200 text-[10px] px-2 py-0.5 rounded-md font-bold uppercase tracking-wider">Herbicide</span>
                 </div>
                 <p className="text-xs font-medium text-slate-500 truncate">Control broadleaf weeds and sedges in paddy.</p>
               </div>
             </Link>
             {/* Product 2 */}
             <Link href="/products/2" className="flex items-center gap-4 p-3 hover:bg-slate-50 rounded-2xl transition-colors border border-transparent hover:border-slate-100 cursor-pointer">
               <div className="w-12 h-12 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center shrink-0 overflow-hidden relative">
                 <Image 
                   src="/images/products/nutriboost_npk.png" 
                   alt="NutriBoost NPK"
                   fill
                   className="object-cover"
                 />
               </div>
               <div className="flex-grow">
                 <div className="flex justify-between items-center mb-1">
                   <p className="text-sm font-bold text-slate-900">NutriBoost NPK</p>
                   <span className="bg-indigo-50 text-indigo-700 border border-indigo-200 text-[10px] px-2 py-0.5 rounded-md font-bold uppercase tracking-wider">Fertilizer</span>
                 </div>
                 <p className="text-xs font-medium text-slate-500 truncate">Complete water-soluble NPK mix for vegetables.</p>
               </div>
             </Link>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="md:col-span-4 bg-slate-900 rounded-[2rem] p-6 md:p-8 text-white border border-slate-800 flex flex-col md:flex-row justify-between items-start md:items-center gap-8 shadow-sm">
           <div className="shrink-0">
             <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Why Choose Lanka Chemical Centre?</h3>
             <p className="text-2xl font-bold max-w-sm">Dedicated to Sri Lankan Agriculture</p>
           </div>
           <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-4xl">
              <div className="flex flex-col gap-3">
                <div className="w-10 h-10 rounded-2xl bg-emerald-500/20 flex items-center justify-center text-emerald-400"><CheckCircle2 className="w-5 h-5"/></div>
                <div>
                   <p className="text-sm font-bold text-slate-100">Sri Lanka-Focused</p>
                   <p className="text-xs font-medium text-slate-400 mt-1">Products tested and proven for local climate, soil types, and specific pest challenges.</p>
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <div className="w-10 h-10 rounded-2xl bg-indigo-500/20 flex items-center justify-center text-indigo-400"><CheckCircle2 className="w-5 h-5"/></div>
                <div>
                   <p className="text-sm font-bold text-slate-100">Safety First</p>
                   <p className="text-xs font-medium text-slate-400 mt-1">Comprehensive safety documentation, compliant labels, and emphasis on responsible handling.</p>
                </div>
              </div>
           </div>
        </div>

      </div>
    </div>
  );
}
