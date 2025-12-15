import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Palette, Hammer, Sparkles, Users } from "lucide-react";

const services = [
  {
    icon: Palette,
    title: "Custom Commissions",
    description: "Bespoke sculptures tailored to your vision, crafted with personal attention to every sacred detail.",
  },
  {
    icon: Hammer,
    title: "Traditional Techniques",
    description: "Time-honored methods using clay, fibre, and mixed media, preserving ancient artistry.",
  },
  {
    icon: Sparkles,
    title: "Premium Finishes",
    description: "From natural terracotta to ornate gold leaf, each piece receives meticulous finishing.",
  },
  {
    icon: Users,
    title: "Bulk & Festival Orders",
    description: "Large-scale production for temples, festivals, and cultural celebrations.",
  },
];

export function ServicesPreview() {
  return (
    <section className="py-24 md:py-32 bg-charcoal text-charcoal-foreground relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-12 h-px bg-accent" />
            <span className="text-accent text-sm tracking-[0.2em] uppercase font-body font-medium">
              What We Offer
            </span>
            <div className="w-12 h-px bg-accent" />
          </div>

          <h2 className="font-heading text-4xl md:text-5xl font-semibold leading-tight mb-6">
            Crafting <span className="text-accent italic">Sacred Art</span>
          </h2>

          <p className="text-charcoal-foreground/70 text-lg">
            From intimate home shrines to grand temple installations, 
            we bring your spiritual visions to life.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group p-8 border border-charcoal-foreground/10 rounded-sm hover:border-accent/50 transition-all duration-500 hover:-translate-y-1"
            >
              <div className="w-14 h-14 rounded-sm bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                <service.icon className="w-7 h-7 text-accent" />
              </div>
              <h3 className="font-heading text-xl font-semibold mb-3">
                {service.title}
              </h3>
              <p className="text-charcoal-foreground/60 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Button variant="gold" size="lg" asChild>
            <Link to="/services">Explore All Services</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
