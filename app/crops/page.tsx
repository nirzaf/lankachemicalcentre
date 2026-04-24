import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CropsPage() {
  const crops = [
    { name: "Paddy", icon: "🌾", desc: "Rice cultivation support from land prep to harvest." },
    { name: "Tea", icon: "🍃", desc: "Specialized solutions for Sri Lanka's premium tea plantations." },
    { name: "Coconut", icon: "🥥", desc: "Combating common pests and diseases in coconut palms." },
    { name: "Vegetables", icon: "🥕", desc: "Nutrition and protection for up-country and low-country vegetable crops." },
    { name: "Fruits", icon: "🍌", desc: "Managing fruit quality and yield across various climatic zones." },
    { name: "Spices", icon: "🌶️", desc: "Protecting export-quality spice crops like cinnamon and pepper." },
  ];

  return (
    <div className="bg-gray-50 py-12 min-h-screen">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Crop Solutions</h1>
          <p className="text-lg text-gray-600">
            Find tailored recommendations, treatment schedules, and specific product matches for the unique challenges of crops grown in Sri Lanka.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {crops.map((crop) => (
            <Link key={crop.name} href={`/crops/${crop.name.toLowerCase()}`} className="group bg-white p-8 rounded-2xl border hover:border-green-400 hover:shadow-lg transition-all flex flex-col items-center text-center">
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">{crop.icon}</div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">{crop.name}</h2>
              <p className="text-gray-600 mb-6">{crop.desc}</p>
              <span className="mt-auto text-green-700 font-medium flex items-center group-hover:underline">
                View Advisory <ArrowRight className="h-4 w-4 ml-1" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
