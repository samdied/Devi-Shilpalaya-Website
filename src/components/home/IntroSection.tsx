import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import realGallery5 from "@/assets/real-gallery-5.jpg";

export function IntroSection() {
  return (
    <section id="introduction" className="py-24 md:py-32 bg-background texture-grain">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative order-2 lg:order-1">
            <div className="relative image-hover rounded-sm overflow-hidden shadow-elevated">
              <img
                src={realGallery5}
                alt="Fibre sculptures at Devi Shilpalaya workshop"
                className="w-full aspect-square object-cover"
              />
              {/* Decorative corner */}
              <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-accent -translate-x-4 -translate-y-4" />
              <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-accent translate-x-4 translate-y-4" />
            </div>
            
            {/* Experience badge */}
            <div className="absolute -bottom-6 -right-6 md:bottom-8 md:-right-8 bg-charcoal text-charcoal-foreground p-6 md:p-8 rounded-sm shadow-elevated">
              <div className="text-center">
                <span className="block font-heading text-4xl md:text-5xl font-bold text-accent">55</span>
                <span className="text-sm tracking-wider uppercase">Years of Craft</span>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-px bg-primary" />
              <span className="text-primary text-sm tracking-[0.2em] uppercase font-body font-medium">
                Our Philosophy
              </span>
            </div>

            <h2 className="font-heading text-4xl md:text-5xl font-semibold text-foreground leading-tight mb-6">
              The Art of Sculpting
              <span className="block text-primary italic">Sacred Forms</span>
            </h2>

            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Established in 1970, Devi Shilpalaya has been crafting divine 
              sculptures for over five decades. Located at Hill Cart Road, 
              Siliguri, our workshop carries forward ancient techniques 
              passed down through generations.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-8">
              We specialize in fibre statues, marble sculptures, clay idols, 
              and custom religious sculptures. Each curve, each expression, 
              each ornament is crafted with devotion, ensuring that the divine 
              presence radiates from every piece that leaves our workshop.
            </p>

          </div>
        </div>
      </div>
    </section>
  );
}
