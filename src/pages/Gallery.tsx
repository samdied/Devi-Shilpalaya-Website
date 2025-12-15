import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";
import workshopImage from "@/assets/workshop.jpg";
import heroImage from "@/assets/hero-sculpture.jpg";
import craftsmanImage from "@/assets/craftsman-hands.jpg";

const galleryItems = [
  { id: 1, image: gallery1, title: "Divine Assembly", category: "Religious" },
  { id: 2, image: gallery2, title: "Lord Ganesha", category: "Religious" },
  { id: 3, image: gallery3, title: "Goddess Saraswati", category: "Religious" },
  { id: 4, image: gallery4, title: "Nataraja", category: "Workshop" },
  { id: 5, image: gallery5, title: "Goddess Lakshmi", category: "Custom" },
  { id: 6, image: gallery6, title: "Temple Relief", category: "Custom" },
  { id: 7, image: heroImage, title: "Goddess Durga", category: "Religious" },
  { id: 8, image: workshopImage, title: "Our Workshop", category: "Workshop" },
  { id: 9, image: craftsmanImage, title: "Craftsman at Work", category: "Workshop" },
];

const categories = ["All", "Religious", "Custom", "Workshop"];

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState<typeof galleryItems[0] | null>(null);

  const filteredItems = activeCategory === "All"
    ? galleryItems
    : galleryItems.filter((item) => item.category === activeCategory);

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
              A visual journey through our creations—each piece a testament to 
              devotion, tradition, and the timeless art of sculpture.
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
            {filteredItems.map((item, index) => (
              <div
                key={item.id}
                className="break-inside-avoid group cursor-pointer"
                onClick={() => setSelectedImage(item)}
              >
                <div className="relative image-hover rounded-sm overflow-hidden shadow-soft">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full"
                    loading="lazy"
                  />
                  
                  {/* Hover Overlay */}
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

          {/* Note about sourcing */}
          <div className="mt-16 text-center">
            <p className="text-muted-foreground text-sm italic max-w-lg mx-auto">
              These images represent the authentic work created in our workshop, 
              showcasing the raw beauty of traditional craftsmanship.
            </p>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 bg-charcoal/95 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-6 right-6 text-charcoal-foreground/70 hover:text-charcoal-foreground transition-colors"
            onClick={() => setSelectedImage(null)}
            aria-label="Close lightbox"
          >
            <X className="w-8 h-8" />
          </button>
          
          <div 
            className="max-w-5xl max-h-[85vh] relative"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage.image}
              alt={selectedImage.title}
              className="max-w-full max-h-[85vh] object-contain rounded-sm"
            />
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-charcoal/90 to-transparent">
              <span className="text-accent text-xs tracking-wider uppercase block mb-1">
                {selectedImage.category}
              </span>
              <h3 className="font-heading text-2xl font-semibold text-charcoal-foreground">
                {selectedImage.title}
              </h3>
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
};

export default Gallery;
