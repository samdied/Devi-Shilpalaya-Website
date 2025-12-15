import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

// Real images from Devi Shilpalaya
import realGallery1 from "@/assets/real-gallery-1.jpg";
import realGallery2 from "@/assets/real-gallery-2.jpg";
import realGallery3 from "@/assets/real-gallery-3.jpg";
import realGallery4 from "@/assets/real-gallery-4.jpg";

const featuredWorks = [
  {
    id: 1,
    image: realGallery1,
    title: "Religious Sculptures",
    category: "",
  },
  {
    id: 2,
    image: realGallery2,
    title: "Custom Order",
    category: "",
  },
  {
    id: 3,
    image: realGallery3,
    title: "Fibre Works",
    category: "",
  },
  {
    id: 4,
    image: realGallery4,
    title: "Architectures",
    category: "",
  },
];

export function FeaturedGallery() {
  return (
    <section className="py-24 md:py-32 bg-secondary/30 texture-grain">
      <div className="container">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-12 h-px bg-primary" />
            <span className="text-primary text-sm tracking-[0.2em] uppercase font-body font-medium">
              Our Creations
            </span>
            
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredWorks.map((work, index) => (
            <Link
              key={work.id}
              to="/gallery"
              className="group relative image-hover rounded-sm overflow-hidden shadow-soft"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="aspect-[3/4]">
                <img
                  src={work.image}
                  alt={work.title}
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-charcoal/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end">
                <div className="p-6 text-charcoal-foreground">
                  <span className="text-accent text-xs tracking-wider uppercase block mb-2">
                    {work.category}
                  </span>
                  <h3 className="font-heading text-xl font-semibold">
                    {work.title}
                  </h3>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" asChild>
            <Link to="/gallery" className="group">
              View Full Gallery
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
