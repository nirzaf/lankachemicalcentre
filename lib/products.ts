export interface Product {
  id: string;
  name: string;
  category: string;
  crop: string;
  desc: string;
  image: string;
  activeIngredient: string;
  formulation: string;
  target: string;
  packSizes: string[];
  safetyClass: string;
}

export const products: Product[] = [
  { 
    id: "1", 
    name: "WeedMax 500", 
    category: "Herbicide", 
    crop: "Paddy", 
    desc: "Effective control against broadleaf weeds and sedges in paddy cultivation.",
    image: "/images/products/weedmax_500.png",
    activeIngredient: "Pretilachlor 500g/L EC",
    formulation: "Emulsifiable Concentrate (EC)",
    target: "Annual grasses, broadleaf weeds, and sedges",
    packSizes: ["100ml", "250ml", "500ml", "1L"],
    safetyClass: "Class II (Moderately Hazardous)"
  },
  { 
    id: "2", 
    name: "NutriBoost NPK", 
    category: "Fertilizer", 
    crop: "Vegetables", 
    desc: "Complete water-soluble NPK mix for improved vegetable yield and quality.",
    image: "/images/products/nutriboost_npk.png",
    activeIngredient: "Nitrogen (18%), Phosphorus (18%), Potassium (18%) + Trace elements",
    formulation: "Water Soluble Powder",
    target: "Balanced plant growth and yield enhancement",
    packSizes: ["1kg", "5kg", "10kg"],
    safetyClass: "Class IV (Unlikely to present acute hazard)"
  },
  { 
    id: "3", 
    name: "TeaGuard Pro", 
    category: "Fungicide", 
    crop: "Tea", 
    desc: "Preventative fungicide for managing blister blight in tea plantations.",
    image: "/images/products/teaguard_pro.png",
    activeIngredient: "Hexaconazole 5% SC",
    formulation: "Suspension Concentrate (SC)",
    target: "Blister blight and other fungal leaf diseases",
    packSizes: ["250ml", "500ml", "1L"],
    safetyClass: "Class III (Slightly Hazardous)"
  },
  { 
    id: "4", 
    name: "PestKill 25", 
    category: "Insecticide", 
    crop: "Multiple", 
    desc: "Broad-spectrum insecticide for controlling stem borers and leaf folders.",
    image: "/images/products/pestkill_25.png",
    activeIngredient: "Abamectin 1.8% EC",
    formulation: "Emulsifiable Concentrate (EC)",
    target: "Leaf miners, mites, and various chewing insects",
    packSizes: ["100ml", "250ml", "500ml"],
    safetyClass: "Class II (Moderately Hazardous)"
  },
  { 
    id: "5", 
    name: "RootVigor", 
    category: "Plant Growth Regulator", 
    crop: "Root Crops", 
    desc: "Stimulates early root development and enhances nutrient uptake.",
    image: "/images/products/rootvigor.png",
    activeIngredient: "Gibberellic Acid and Amino Acid complex",
    formulation: "Liquid Concentrate",
    target: "Early root initiation and vegetative growth",
    packSizes: ["250ml", "500ml", "1L"],
    safetyClass: "Class IV (Unlikely to present acute hazard)"
  },
  { 
    id: "6", 
    name: "CocoShield", 
    category: "Fungicide", 
    crop: "Coconut", 
    desc: "Specialized formulation to combat common fungal infections in coconut palms.",
    image: "/images/products/cocoshield.png",
    activeIngredient: "Copper Oxychloride 50% WP",
    formulation: "Wettable Powder (WP)",
    target: "Bud rot, leaf spot and stem bleeding",
    packSizes: ["500g", "1kg", "5kg"],
    safetyClass: "Class III (Slightly Hazardous)"
  },
];
