import { useState, useEffect } from "react";
import { Layout } from "@/components/layout/Layout";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

// 1. Automatically grab all images from the assets folder
// This creates an object where keys are paths and values are the image URLs
const imageModules = import.meta.glob("@/assets/*.{png,jpg,jpeg,webp}", {
  eager: true,
  import: "default",
});

// 2. Transform the object into an array for our gallery
const autoGalleryItems = Object.entries(imageModules).map(([path, url], index) => {
  // Extract filename to create a title (e.g., "real-gallery-1")
  const fileName = path.split('/').pop()?.split('.')[0] || "Sculpture";
  const formattedTitle = fileName.replace(/-/g, ' ').replace(/\b\w/g, (l) => l.toUpperCase());

  return {
    id: index,
    image: url as string,
    title: formattedTitle,
    // Defaulting to "Religious" - you can adjust logic here to assign categories based on filenames
    category: fileName.includes('custom') ? "Custom" : "Religious",
  };
});

const categories = ["All", "Religious", "Custom", "Architectures", "Workshop"];

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState<typeof autoGalleryItems[0] | null>(null);

  const filteredItems = activeCategory === "All"
    ? autoGalleryItems
    : autoGalleryItems.filter((item) => item.category === activeCategory);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-charcoal text-charcoal-foreground">
        <div className="container">
          <div className="max-w-3xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-px bg-accent" />
              <span className="text-accent text-sm tracking-[0.2em] uppercase font-body font-medium">
                Our Work
              </span>
            </div>
            
            <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-semibold leading-tight mb-6">
              Gallery of
              <span className="block text-accent italic">Sacred Forms</span>
            </h1>
            
            <p className="text-charcoal-foreground/80 text-lg md:text-xl max-w-2xl">
              A complete collection of our work directly from our archives—showcasing 
              55 years of stone and fibre artistry.
            </p>
          </div>
        </div>
      </section>

      {/* Filter & Gallery */}
      <section className="py-16 md:py-24 bg-background texture-grain">
        <div className="container">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={cn(
                  "px-6 py-2 font-body text-sm tracking-wide rounded-sm transition-all duration-300",
                  activeCategory === category
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                )}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Masonry Grid */}
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="break-inside-avoid group cursor-pointer"
                onClick={() => setSelectedImage(item)}
              >
                <div className="relative image-hover rounded-sm overflow-hidden shadow-soft bg-muted">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-auto block"
                    loading="lazy"
                  />
                  
                  <div className="absolute inset-0 bg-charcoal/70 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                    <div className="text-charcoal-foreground">
                      <span className="text-accent text-xs tracking-wider uppercase block mb-1">
                        {item.category}
                      </span>
                      <h3 className="font-heading text-xl font-semibold">
                        {item.title}
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 bg-charcoal/95 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors">
            <X className="w-8 h-8" />
          </button>
          
          <div className="max-w-5xl w-full flex flex-col items-center" onClick={(e) => e.stopPropagation()}>
            <img
              src={selectedImage.image}
              alt={selectedImage.title}
              className="max-w-full max-h-[80vh] object-contain rounded-sm"
            />
            <div className="mt-4 text-center">
              <h3 className="font-heading text-2xl font-semibold text-white">
                {selectedImage.title}
              </h3>
              <p className="text-accent uppercase tracking-widest text-sm">{selectedImage.category}</p>
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
};

export default Gallery;
