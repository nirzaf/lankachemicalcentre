import Link from "next/link";
import { ArrowRight, Calendar, Tag } from "lucide-react";

export default function KnowledgePage() {
  const articles = [
    {
      slug: "maha-season-checklist",
      title: "Maha Season Crop Protection Checklist",
      excerpt: "Prepare for the upcoming Maha season with our comprehensive guide to early weed management and preventative disease control in paddy.",
      date: "Oct 12, 2026",
      category: "Seasonal Updates",
      readTime: "5 min read"
    },
    {
      slug: "chemical-storage-safety",
      title: "How to Store Agricultural Chemicals Safely",
      excerpt: "Improper storage reduces product efficacy and poses significant safety risks. Learn the best practices for setting up a safe chemical storage area on your farm.",
      date: "Sep 28, 2026",
      category: "Safety Guidance",
      readTime: "4 min read"
    },
    {
      slug: "paddy-weed-problems",
      title: "Common Paddy Weed Problems in Sri Lanka",
      excerpt: "Identify and manage the most stubborn sedges and broadleaf weeds affecting paddy yields in the dry zone.",
      date: "Sep 15, 2026",
      category: "Crop Protection",
      readTime: "7 min read"
    },
    {
      slug: "fungicide-modes-of-action",
      title: "Understanding Fungicide Modes of Action",
      excerpt: "Why rotating fungicides is essential to prevent resistance in high-value vegetable crops.",
      date: "Aug 30, 2026",
      category: "Technical Advisory",
      readTime: "6 min read"
    }
  ];

  return (
    <div className="bg-gray-50 py-12 min-h-screen">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Knowledge Centre</h1>
          <p className="text-lg text-gray-600">
            Insights, technical guides, and seasonal updates for Sri Lankan agriculture.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {articles.map((article, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl border flex flex-col hover:border-green-300 hover:shadow-md transition-all">
              <div className="flex items-center text-xs text-gray-500 mb-3 gap-4">
                <span className="bg-green-100 text-green-800 px-2 flex items-center py-1 rounded font-medium"><Tag className="w-3 h-3 mr-1"/>{article.category}</span>
                <span className="flex items-center"><Calendar className="w-3 h-3 mr-1"/>{article.date}</span>
              </div>
              <h2 className="text-xl font-bold text-gray-900 mb-3 leading-snug">{article.title}</h2>
              <p className="text-gray-600 mb-6 flex-grow text-sm">{article.excerpt}</p>
              <Link href="#" className="inline-flex items-center text-sm font-semibold text-green-700 hover:text-green-800 mt-auto">
                Read Article <ArrowRight className="h-4 w-4 ml-1" />
              </Link>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
