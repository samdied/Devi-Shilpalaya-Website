import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Check, Palette, Hammer, Sparkles, Users, Ruler, Clock } from "lucide-react";
import gallery5 from "@/assets/gallery-5.jpg";

const services = [
  {
    icon: Palette,
    title: "Custom Sculpture Commissions",
    description: "Bespoke sculptures tailored to your exact specifications, whether for home shrines, temples, or special occasions.",
    features: [
      "Personal consultation to understand your vision",
      "Detailed design sketches before production",
      "Choice of materials and finishes",
      "Regular progress updates",
    ],
  },
  {
    icon: Hammer,
    title: "Traditional Clay & Fibre Work",
    description: "Authentic sculptures using time-honored techniques passed down through generations of master artisans.",
    features: [
      "Natural clay from local sources",
      "Eco-friendly fibre materials",
      "Traditional hand-carving methods",
      "Natural color pigments",
    ],
  },
  {
    icon: Sparkles,
    title: "Premium Finishing Options",
    description: "Elevate your sculpture with our range of exquisite finishing options from natural terracotta to ornate gold leaf.",
    features: [
      "Natural terracotta finish",
      "Traditional paint work",
      "Gold and silver leaf application",
      "Weather-resistant coatings",
    ],
  },
  {
    icon: Ruler,
    title: "Size Customization",
    description: "From intimate home pieces to grand temple installations, we craft sculptures in any size you require.",
    features: [
      "Miniature devotional pieces (6-12 inches)",
      "Home shrine sculptures (1-3 feet)",
      "Temple-grade installations (3-10 feet)",
      "Monumental sculptures (10+ feet)",
    ],
  },
  {
    icon: Users,
    title: "Bulk & Festival Orders",
    description: "Large-scale production for festivals, temples, and cultural organizations with timely delivery.",
    features: [
      "Ganesh Chaturthi collections",
      "Durga Puja sculptures",
      "Navratri celebrations",
      "Temple consecration orders",
    ],
  },
  {
    icon: Clock,
    title: "Restoration Services",
    description: "Breathe new life into damaged or aged sculptures with our careful restoration work.",
    features: [
      "Damage assessment and consultation",
      "Traditional repair techniques",
      "Color matching and restoration",
      "Protective finishing",
    ],
  },
];

const materials = [
  { name: "Clay", description: "Traditional, eco-friendly, ideal for detailed work" },
  { name: "Fibre", description: "Lightweight, durable, weather-resistant" },
  { name: "Mixed Media", description: "Combining materials for unique effects" },
  { name: "POP (Plaster)", description: "Economical option for festival sculptures" },
];

const Services = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-charcoal text-charcoal-foreground">
        <div className="container">
          <div className="max-w-3xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-px bg-accent" />
              <span className="text-accent text-sm tracking-[0.2em] uppercase font-body font-medium">
                Our Services
              </span>
            </div>
            
            <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-semibold leading-tight mb-6">
              Crafting Your
              <span className="block text-accent italic">Sacred Vision</span>
            </h1>
            
            <p className="text-charcoal-foreground/80 text-lg md:text-xl max-w-2xl">
              From concept to completion, we offer comprehensive sculpture services 
              tailored to your spiritual and artistic needs.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 md:py-28 bg-background texture-grain">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.title}
                className="bg-card p-8 rounded-sm shadow-soft border border-border/50 hover:shadow-elevated transition-shadow duration-500"
              >
                <div className="w-14 h-14 rounded-sm bg-primary/10 flex items-center justify-center mb-6">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>
                
                <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
                  {service.title}
                </h3>
                
                <p className="text-muted-foreground mb-6">
                  {service.description}
                </p>
                
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <Check className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Materials Section */}
      <section className="py-20 md:py-28 bg-secondary/30">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <h2 className="font-heading text-4xl md:text-5xl font-semibold text-foreground leading-tight mb-8">
                Materials We
                <span className="block text-primary italic">Work With</span>
              </h2>

              <p className="text-muted-foreground mb-8 leading-relaxed">
                Each material carries its own soul. We guide you in choosing 
                the perfect medium for your sculpture based on its purpose, 
                placement, and the divine form it will embody.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {materials.map((material) => (
                  <div
                    key={material.name}
                    className="bg-background p-5 rounded-sm border border-border/50"
                  >
                    <h4 className="font-heading text-lg font-semibold text-foreground mb-1">
                      {material.name}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {material.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="image-hover rounded-sm overflow-hidden shadow-elevated">
                <img
                  src={gallery5}
                  alt="Finished Lakshmi sculpture"
                  className="w-full aspect-square object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 md:py-28 bg-charcoal text-charcoal-foreground">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-heading text-4xl md:text-5xl font-semibold leading-tight mb-6">
              Our <span className="text-accent italic">Process</span>
            </h2>
            <p className="text-charcoal-foreground/70 text-lg">
              Every sculpture follows a sacred journey from vision to reality.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Consultation", desc: "Understanding your vision and requirements" },
              { step: "02", title: "Design", desc: "Creating sketches and finalizing details" },
              { step: "03", title: "Creation", desc: "Handcrafting with traditional techniques" },
              { step: "04", title: "Delivery", desc: "Careful packaging and safe delivery" },
            ].map((item, index) => (
              <div key={item.step} className="relative text-center">
                <span className="font-heading text-6xl font-bold text-accent/20">
                  {item.step}
                </span>
                <h4 className="font-heading text-xl font-semibold mt-2 mb-2">
                  {item.title}
                </h4>
                <p className="text-charcoal-foreground/60 text-sm">
                  {item.desc}
                </p>
                {index < 3 && (
                  <div className="hidden md:block absolute top-8 -right-4 w-8 h-px bg-accent/30" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-semibold mb-6">
            Ready to Begin Your Commission?
          </h2>
          <p className="text-primary-foreground/80 max-w-xl mx-auto mb-8">
            Share your vision with us. We'll guide you through every step 
            of creating your perfect sculpture.
          </p>
          <Button variant="hero" size="lg" asChild>
            <Link to="/contact">Start Your Project</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
