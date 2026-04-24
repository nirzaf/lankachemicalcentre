# Lanka Chemical Centre

Lanka Chemical Centre is a modern agricultural chemical and crop protection platform designed for Sri Lankan farmers, dealers, and commercial growers. The application provides comprehensive product information, tailored crop solutions, safety resources, and a technical knowledge centre.

## 🚀 Features

- **Product Gallery**: Detailed catalog of herbicides, fungicides, insecticides, and fertilizers with technical specifications and safety data.
- **Crop Solutions**: Tailored recommendations for major Sri Lankan crops including Paddy, Tea, Coconut, and Vegetables.
- **Knowledge Centre**: Seasonal checklists, technical advisories, and expert insights for local agriculture.
- **Safety & Resources**: Essential safety guidelines and downloadable Safety Data Sheets (SDS).
- **Responsive Design**: Premium, mobile-first UI optimized for use in the field and the office.
- **Bento Grid Layout**: Modern, high-impact landing page showcasing core services and featured products.

## 🛠 Tech Stack

- **Framework**: [Next.js 15+](https://nextjs.org/) (App Router)
- **Runtime & Package Manager**: [Bun](https://bun.sh/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/) with `@tailwindcss/typography`
- **Icons**: [Lucide React](https://lucide.dev/)
- **Animations**: [Motion](https://motion.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)

## 📁 Project Structure

```text
├── app/                  # Next.js App Router pages
│   ├── crops/            # Crop-specific advisory pages
│   ├── knowledge/        # Technical articles and blog
│   ├── products/         # Product catalog and detail pages
│   └── safety/           # Safety guidelines and SDS library
├── components/           # Reusable UI components (Header, Footer, etc.)
├── lib/                  # Shared utilities and data libraries
│   └── products.ts       # Centralized product data source
├── public/               # Static assets (optimized product images)
└── tailwind.config.ts    # Design system configuration
```

## 🏁 Getting Started

### Prerequisites

- [Bun](https://bun.sh/) installed on your machine.

### Installation

1. Clone the repository.
2. Install dependencies:
   ```bash
   bun install
   ```
3. Set the `GEMINI_API_KEY` in `.env.local` if using AI-assisted features.
4. Run the development server:
   ```bash
   bun dev
   ```
5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📝 Development Notes

- **Product Data**: All product information is centralized in `lib/products.ts`. Update this file to add or modify product technical details.
- **Images**: Product images are located in `public/images/products/`. Use the Next.js `Image` component for automatic optimization.
- **Theming**: The project uses a custom emerald/green-based theme tailored for the agricultural sector.

## 📄 License

© 2026 Lanka Chemical Centre. All rights reserved.
