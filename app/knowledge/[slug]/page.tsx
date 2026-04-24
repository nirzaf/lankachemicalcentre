import Link from "next/link";
import { ArrowLeft, Clock, Calendar, User, Share2 } from "lucide-react";

export default async function KnowledgeArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  
export default async function KnowledgeArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  
  const articles: Record<string, {
    title: string;
    lead: string;
    executiveSummary: string;
    takeaways: string[];
    conclusion: string;
    expertQuote?: string;
  }> = {
    "maha-season-checklist": {
      title: "Maha Season Crop Protection Checklist",
      lead: "The Maha season (September to March) is the main cultivation period in Sri Lanka. Preparation is key to a successful harvest.",
      executiveSummary: "Success during the Maha season depends on early land preparation and timely application of inputs. With the heavy rains typical of this period, farmers must choose products that have good rain-fastness and plan their spraying schedules around the weather forecasts.",
      takeaways: [
        "Prepare your seedbeds well in advance to ensure good germination.",
        "Monitor for brown plant hopper (BPH) early in the season.",
        "Ensure drainage systems are clear to prevent waterlogging during monsoon rains.",
        "Use pre-emergent herbicides within 3-5 days of sowing paddy."
      ],
      conclusion: "By following this checklist, farmers can mitigate the risks associated with the Maha season's high moisture levels and maximize their production potential.",
      expertQuote: "Early intervention in the Maha season can save up to 30% of your yield that might otherwise be lost to pests and diseases fostered by the high humidity."
    },
    "chemical-storage-safety": {
      title: "How to Store Agricultural Chemicals Safely",
      lead: "Proper storage of agricultural chemicals is essential for preventing accidents, maintaining product efficacy, and protecting the environment.",
      executiveSummary: "Chemical storage should be treated with the highest priority. A dedicated, well-ventilated, and locked storage area is a requirement for any professional agricultural operation. This prevents unauthorized access, especially by children, and minimizes the risk of environmental contamination.",
      takeaways: [
        "Store chemicals in their original containers with intact labels.",
        "Keep the storage area locked and clearly marked with warning signs.",
        "Separate herbicides from insecticides and fungicides to prevent cross-contamination.",
        "Ensure a spill kit (sand or sawdust) is readily available nearby."
      ],
      conclusion: "Safe storage is not just a best practice; it's a responsibility. By maintaining a clean and secure storage area, you protect your family, your workers, and your investments.",
      expertQuote: "Most farm accidents involving chemicals happen due to poor storage practices. A simple lock can save lives."
    },
    "paddy-weed-problems": {
      title: "Common Paddy Weed Problems in Sri Lanka",
      lead: "Weeds can compete with paddy for nutrients, sunlight, and water, significantly reducing your final yield if not managed correctly.",
      executiveSummary: "In Sri Lankan paddy fields, weeds like Echinochloa crus-galli (Barnyard grass) and various sedges are persistent problems. Integrated weed management, combining cultural practices like proper water management with targeted herbicide use, is the most effective approach.",
      takeaways: [
        "Identify the specific weed species in your field before choosing a herbicide.",
        "Maintain a consistent water level of 5-10cm to suppress many weed types.",
        "Use high-quality, weed-free seeds for every planting cycle.",
        "Apply post-emergent herbicides at the 2-4 leaf stage of the weeds for maximum efficacy."
      ],
      conclusion: "Effective weed control requires a proactive approach. Understanding the lifecycle of the weeds in your area allows for more precise and cost-effective management.",
      expertQuote: "Water is your best herbicide. Proper leveling and water management can reduce your chemical dependency by half."
    },
    "fungicide-modes-of-action": {
      title: "Understanding Fungicide Modes of Action",
      lead: "Knowing how fungicides work is critical for developing an effective disease management strategy and preventing resistance.",
      executiveSummary: "Fungicides are categorized by their 'Mode of Action' (MoA)—the specific biochemical process they disrupt in the fungus. Rotating between different MoA groups is essential to prevent fungi from developing resistance to any single product.",
      takeaways: [
        "Differentiate between contact (protectant) and systemic (curative) fungicides.",
        "Check the FRAC (Fungicide Resistance Action Committee) code on your product labels.",
        "Always rotate products from different chemical classes throughout the season.",
        "Apply fungicides preventatively when weather conditions favor disease development."
      ],
      conclusion: "A smart fungicide strategy focuses on long-term sustainability. By understanding the science behind the products, you can protect your crops while preserving the effectiveness of these vital tools.",
      expertQuote: "Resistance management is not an option; it's a necessity. Once a fungus becomes resistant to a class of chemistry, that tool is lost to the community."
    }
  };

  const article = articles[slug] || {
    title: "Agricultural Knowledge Article",
    lead: "This article provides essential information for Sri Lankan farmers and agricultural dealers looking to optimize their crop protection strategies and safety practices.",
    executiveSummary: "Understanding the specific challenges of the Sri Lankan agricultural landscape is crucial for achieving high yields. Whether you are managing paddy in the dry zone or vegetables in the central hills, the principles of integrated pest management and responsible chemical use remain the same.",
    takeaways: [
      "Always conduct a thorough field inspection before application.",
      "Maintain proper records of all chemical treatments and fertilizers used.",
      "Ensure all spray equipment is calibrated correctly to avoid under or over-application.",
      "Prioritize personal protective equipment (PPE) for all handling and application tasks."
    ],
    conclusion: "Lanka Chemical Centre is dedicated to supporting the farming community with not just products, but also the knowledge required to use them effectively and safely. For more specific advice tailored to your farm, please contact our technical advisors.",
    expertQuote: "Consistency in monitoring is more effective than heavy reactive treatment. By identifying problems early, farmers can often use less intense interventions to achieve better results."
  };

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
            {article.title}
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
            {article.lead}
          </p>
          
          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Executive Summary</h2>
          <p>
            {article.executiveSummary}
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Key Takeaways</h2>
          <ul className="list-disc pl-6 space-y-3">
            {article.takeaways.map((takeaway, index) => (
              <li key={index}>{takeaway}</li>
            ))}
          </ul>

          {article.expertQuote && (
            <div className="bg-green-50 border-l-4 border-green-600 p-6 my-10 rounded-r-xl">
               <p className="font-bold text-green-900 mb-2">Expert Advice</p>
               <p className="text-green-800 text-sm italic">
                 "{article.expertQuote}"
               </p>
            </div>
          )}

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Conclusion</h2>
          <p>
            {article.conclusion}
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
