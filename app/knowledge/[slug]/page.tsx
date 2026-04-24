import Link from "next/link";
import { ArrowLeft, Clock, Calendar, User, Share2 } from "lucide-react";

export default async function KnowledgeArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  
  // Basic mapping for titles based on slugs for demonstration
  const articleMap: Record<string, string> = {
    "maha-season-checklist": "Maha Season Crop Protection Checklist",
    "chemical-storage-safety": "How to Store Agricultural Chemicals Safely",
    "paddy-weed-problems": "Common Paddy Weed Problems in Sri Lanka",
    "fungicide-modes-of-action": "Understanding Fungicide Modes of Action"
  };

  const title = articleMap[slug] || "Agricultural Knowledge Article";

  return (
    <div className="bg-white py-12 min-h-screen">
      <div className="container mx-auto px-4 max-w-4xl">
        
        {/* Navigation */}
        <Link href="/knowledge" className="inline-flex items-center text-sm text-gray-500 hover:text-green-700 mb-8">
          <ArrowLeft className="h-4 w-4 mr-1" /> Back to Knowledge Centre
        </Link>

        {/* Article Header */}
        <header className="mb-12">
          <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
            <span className="flex items-center"><Calendar className="h-4 w-4 mr-1" /> Oct 2026</span>
            <span className="flex items-center"><Clock className="h-4 w-4 mr-1" /> 5 min read</span>
            <span className="flex items-center"><User className="h-4 w-4 mr-1" /> Technical Team</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-6">
            {title}
          </h1>
          <div className="flex items-center gap-3">
             <button className="flex items-center gap-2 px-4 py-2 bg-slate-100 hover:bg-slate-200 rounded-lg text-sm font-medium transition-colors">
               <Share2 className="h-4 w-4" /> Share
             </button>
          </div>
        </header>

        {/* Article Content */}
        <article className="prose prose-slate lg:prose-lg max-w-none text-gray-700">
          <p className="lead text-xl text-gray-600 mb-8">
            This article provides essential information for Sri Lankan farmers and agricultural dealers looking to optimize their crop protection strategies and safety practices.
          </p>
          
          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Executive Summary</h2>
          <p>
            Understanding the specific challenges of the Sri Lankan agricultural landscape is crucial for achieving high yields. Whether you are managing paddy in the dry zone or vegetables in the central hills, the principles of integrated pest management and responsible chemical use remain the same.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Key Takeaways</h2>
          <ul className="list-disc pl-6 space-y-3">
            <li>Always conduct a thorough field inspection before application.</li>
            <li>Maintain proper records of all chemical treatments and fertilizers used.</li>
            <li>Ensure all spray equipment is calibrated correctly to avoid under or over-application.</li>
            <li>Prioritize personal protective equipment (PPE) for all handling and application tasks.</li>
          </ul>

          <div className="bg-green-50 border-l-4 border-green-600 p-6 my-10 rounded-r-xl">
             <p className="font-bold text-green-900 mb-2">Expert Advice</p>
             <p className="text-green-800 text-sm italic">
               "Consistency in monitoring is more effective than heavy reactive treatment. By identifying problems early, farmers can often use less intense interventions to achieve better results."
             </p>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Conclusion</h2>
          <p>
            Lanka Chemical Centre is dedicated to supporting the farming community with not just products, but also the knowledge required to use them effectively and safely. For more specific advice tailored to your farm, please contact our technical advisors.
          </p>
        </article>

        {/* Footer Navigation */}
        <div className="mt-16 pt-8 border-t flex justify-between">
           <Link href="/products" className="text-green-700 font-bold hover:underline">Explore Related Products</Link>
           <Link href="/contact" className="text-green-700 font-bold hover:underline">Speak to an Expert</Link>
        </div>
      </div>
    </div>
  );
}
