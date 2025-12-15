import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-sculpture.jpg";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Handcrafted Durga sculpture in traditional workshop"
          className="w-full h-full object-cover animate-slow-zoom"
        />
        <div className="absolute inset-0 gradient-hero" />
      </div>

      {/* Content */}
      <div className="relative z-10 container text-center text-cream px-4">
        <div className="max-w-4xl mx-auto">
          {/* Decorative element */}
          <div className="flex items-center justify-center gap-4 mb-8 fade-in-up">
            <div className="w-16 h-px bg-accent/50" />
            <span className="text-accent text-sm tracking-[0.3em] uppercase font-body">
              Est. Since Generations
            </span>
            <div className="w-16 h-px bg-accent/50" />
          </div>

          {/* Main heading */}
          <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-semibold leading-tight mb-6 fade-in-up fade-in-up-delay-1">
            Where Devotion
            <br />
            <span className="text-accent italic">Takes Form</span>
          </h1>

          {/* Subtitle */}
          <p className="font-body text-lg md:text-xl text-cream/80 max-w-2xl mx-auto mb-10 leading-relaxed fade-in-up fade-in-up-delay-2">
            Handcrafted sculptures born from clay, fibre, and generations of 
            sacred tradition. Each piece carries the soul of artistry and 
            the breath of devotion.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 fade-in-up fade-in-up-delay-3">
            <Button variant="hero" size="lg" asChild>
              <Link to="/gallery">View Our Work</Link>
            </Button>
            <Button variant="gold" size="lg" asChild>
              <Link to="/contact">Request Custom Sculpture</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <a 
          href="#introduction" 
          className="text-cream/50 hover:text-cream transition-colors"
          aria-label="Scroll to content"
        >
          <ArrowDown className="w-6 h-6" />
        </a>
      </div>
    </section>
  );
}
