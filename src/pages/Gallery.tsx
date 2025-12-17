import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

// 1. Grab all images from assets
const imageModules = import.meta.glob("@/assets/*.{png,jpg,jpeg,webp}", {
  eager: true,
  import: "default",
});

// 2. Define the allowed categories (matching your filename prefixes)
const CATEGORIES = ["Religious", "Custom", "Architectures", "Workshop"];

// 3. Process images and extract category/title from filename
const autoGalleryItems = Object.entries(imageModules).map(([path, url], index) => {
  const fileName = path.split('/').pop()?.split('.')[0] || ""; // e.g., "religious-marble-statue"
  
  // Split by the first hyphen
  const parts = fileName.split('-');
  let category = "Religious"; // Fallback category
  let titleParts = parts;

  // Check if the first word of the filename matches one of our categories
  const potentialCategory = parts[0].charAt(0).toUpperCase() + parts[0].slice(1).toLowerCase();
  
  if (CATEGORIES.includes(potentialCategory)) {
    category = potentialCategory;
    titleParts = parts.slice(1); // Remove the category prefix from the title
  }

  // Format the title (capitalize words, remove hyphens)
  const title = titleParts
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ') || "Sculpture Art";

  return {
    id: index,
    image: url as string,
    title: title,
    category: category,
  };
});

const filterTabs = ["All", ...CATEGORIES];

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState<typeof autoGalleryItems[0] | null>(null);

  const filteredItems = activeCategory === "All"
    ? autoGalleryItems
    : autoGalleryItems.filter((item) => item.category === activeCategory);

  return (
    <Layout>
      <section className="pt-32 pb-16 bg-charcoal text-charcoal-foreground">
        <div className="container text-center">
            <h1 className="font-heading text-5xl md:text-6xl font-semibold mb-4">
              Our <span className="text-accent italic">Masterpieces</span>
            </h1>
            <p className="text-charcoal-foreground/60 max-w-xl mx-auto">
              Automatically synchronized with our workshop archives.
            </p>
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
                  alt={item.title}
                  className="w-full transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-6 flex flex-col justify-end">
                  <p className="text-accent text-xs font-bold uppercase tracking-tighter">{item.category}</p>
                  <h3 className="text-white font-heading text-lg">{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox (Simplified) */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4" onClick={() => setSelectedImage(null)}>
          <button className="absolute top-5 right-5 text-white"><X size={32} /></button>
          <img src={selectedImage.image} className="max-w-full max-h-[90vh] object-contain" alt={selectedImage.title} />
        </div>
      )}
    </Layout>
  );
};

export default Gallery;
