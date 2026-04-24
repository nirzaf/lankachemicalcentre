import Link from "next/link";
import { ArrowLeft, CheckCircle2 } from "lucide-react";

export default async function CropDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  
  return (
    <div className="bg-white py-12 min-h-screen">
      <div className="container mx-auto px-4 md:px-6">
        <Link href="/crops" className="inline-flex items-center text-sm text-gray-500 hover:text-green-700 mb-8">
          <ArrowLeft className="h-4 w-4 mr-1" /> Back to Crops
        </Link>
        <h1 className="text-4xl font-bold text-gray-900 capitalize mb-6">{slug} Crop Solutions</h1>
        <p className="text-lg text-gray-600 max-w-3xl mb-12">
          Comprehensive guidance and recommended agrochemical solutions for managing pests, diseases, and nutritional needs in {slug} cultivation.
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-gray-50 p-8 rounded-2xl border">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Key Challenges</h2>
            <ul className="space-y-4">
              {['Weed management in early stages', 'Controlling common insect pests', 'Preventing fungal infections during wet seasons', 'Ensuring optimal nutrient uptake'].map((c, i) => (
                <li key={i} className="flex items-start">
                  <span className="h-6 w-6 rounded-full bg-red-100 text-red-600 flex items-center justify-center text-xs mr-3 shrink-0">{i+1}</span>
                  <span className="text-gray-700">{c}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="bg-green-50 p-8 rounded-2xl border border-green-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Recommended Products</h2>
            <ul className="space-y-4">
               {['WeedMax 500 (Herbicide)', 'NutriBoost NPK (Fertilizer)', 'PestKill 25 (Insecticide)'].map((p, i) => (
                <li key={i} className="flex items-center bg-white p-3 rounded shadow-sm">
                  <CheckCircle2 className="h-5 w-5 text-green-600 mr-3" />
                  <span className="font-medium text-gray-900">{p}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <Link href={`/products?crop=${slug}`} className="inline-block bg-green-700 text-white font-medium px-6 py-2 rounded-lg hover:bg-green-800 transition-colors">
                View All Compatible Products
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
