import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone, MapPin } from "lucide-react";
import realGallery6 from "@/assets/Workshop.jpg";

export function CTASection() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={realGallery6}
          alt="Traditional idol sculpture"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-charcoal/80" />
      </div>

      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center text-charcoal-foreground">
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight mb-6">
            Ready to Commission
            <span className="block text-accent italic">Your Sculpture?</span>
          </h2>

          <p className="text-charcoal-foreground/80 text-lg md:text-xl mb-10 max-w-xl mx-auto">
            Visit our workshop at Hill Cart Road, Siliguri or call us 
            to discuss your vision. 55 years of craftsmanship at your service.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button variant="gold" size="lg" asChild>
              <a href="tel:+91 7318732751">
                <Phone className="w-5 h-5" />
                Call Now
              </a>
            </Button>
            <Button variant="hero" size="lg" asChild>
              <a 
                href="https://www.google.com/maps/search/Devi+Shilpalaya+Hill+Cart+Road+Siliguri" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <MapPin className="w-5 h-5" />
                Get Directions
              </a>
            </Button>
          </div>

          {/* Decorative quote */}
          <div className="pt-10 border-t border-charcoal-foreground/20">
            <blockquote className="font-heading text-xl md:text-2xl italic text-charcoal-foreground/70">
              "Not polished like a showroom. Textured like a workshop."
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}
