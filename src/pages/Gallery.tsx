Import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

// 1. Grab all images from assets
const imageModules = import.meta.glob("@/assets/*.{png,jpg,jpeg,webp}", {
  eager: true,
  import: "default",
});

// 2. Define the allowed categories
const CATEGORIES = ["Religious", "Custom", "Architecture", "Workshop"];

// 3. Process images and extract category + filename for specific filtering
const autoGalleryItems = Object.entries(imageModules).map(([path, url], index) => {
  const fileName = path.split('/').pop() || ""; // Includes extension e.g. "Workshop-Sculpting.jpg"
  const nameWithoutExt = fileName.split('.')[0];
  const parts = nameWithoutExt.split('-');
  
  let category = "Religious"; // Fallback
  const potentialCategory = parts[0].charAt(0).toUpperCase() + parts[0].slice(1).toLowerCase();
  
  if (CATEGORIES.includes(potentialCategory)) {
    category = potentialCategory;
  }

  return {
    id: index,
    image: url as string,
    category: category,
    fileName: fileName, // Saved for exact matching logic
  };
});

const filterTabs = ["All", ...CATEGORIES];

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState<typeof autoGalleryItems[0] | null>(null);

  // 4. Custom Filter Logic
  const filteredItems = activeCategory === "All"
    ? autoGalleryItems
        .filter((item) => {
          // Hide "Workshop" category unless it's the specific Sculpting file
          if (item.category === "Workshop") {
            return item.fileName === "Workshop-Sculpting.jpg";
          }
          return true;
        })
        .sort((a, b) => {
          // Force Workshop-Sculpting.jpg to the top (index 0)
          if (a.fileName === "Workshop-Sculpting.jpg") return -1;
          if (b.fileName === "Workshop-Sculpting.jpg") return 1;
          return 0;
        })
    : autoGalleryItems.filter((item) => item.category === activeCategory);

  return (
    <Layout>
      <section className="pt-32 pb-16 bg-charcoal text-charcoal-foreground">
        <div className="container text-center">
            <h1 className="font-heading text-5xl md:text-6xl font-semibold mb-4">
              Our <span className="text-accent italic">Masterpieces</span>
            </h1>
        </div>
      </section>

      <section className="py-12 bg-background">
        <div className="container">
          {/* Automatic Category Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {filterTabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveCategory(tab)}
                className={cn(
                  "px-5 py-2 rounded-full text-sm font-medium transition-all",
                  activeCategory === tab
                    ? "bg-accent text-white shadow-lg"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                )}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="break-inside-avoid group cursor-pointer relative rounded-lg overflow-hidden"
                onClick={() => setSelectedImage(item)}
              >
                <img
                  src={item.image}
                  alt={item.category}
                  className="w-full transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-6 flex flex-col justify-end">
                  <p className="text-white text-xs font-bold uppercase tracking-widest bg-accent/80 w-fit px-2 py-1 rounded">
                    {item.category}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 cursor-zoom-out" 
          onClick={() => setSelectedImage(null)}
        >
          <button className="absolute top-5 right-5 text-white">
            <X size={32} />
          </button>
          <img 
            src={selectedImage.image} 
            className="max-w-full max-h-[90vh] object-contain" 
            alt="Gallery preview" 
          />
        </div>
      )}
    </Layout>
  );
};

export default Gallery;