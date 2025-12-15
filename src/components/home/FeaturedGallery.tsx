import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";

const featuredWorks = [
  {
    id: 1,
    image: gallery1,
    title: "Divine Assembly",
    category: "Religious Sculptures",
  },
  {
    id: 2,
    image: gallery2,
    title: "Lord Ganesha",
    category: "Custom Order",
  },
  {
    id: 3,
    image: gallery3,
    title: "Goddess Saraswati",
    category: "Fibre Sculpture",
  },
  {
    id: 4,
    image: gallery4,
    title: "Nataraja",
    category: "Workshop Process",
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
            <div className="w-12 h-px bg-primary" />
          </div>

          <h2 className="font-heading text-4xl md:text-5xl font-semibold text-foreground leading-tight mb-6">
            Featured <span className="text-primary italic">Sculptures</span>
          </h2>

          <p className="text-muted-foreground text-lg">
            A glimpse into our workshop—where forms emerge from silence 
            and devotion finds expression in clay and fibre.
          </p>
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
