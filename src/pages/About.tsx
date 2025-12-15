import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import workshopImage from "@/assets/workshop.jpg";
import craftsmanImage from "@/assets/craftsman-hands.jpg";

const values = [
  {
    title: "Tradition",
    description: "We honor techniques passed down through generations, preserving the sacred knowledge of sculpture-making.",
  },
  {
    title: "Devotion",
    description: "Every stroke of our tools carries prayer and reverence for the divine forms we bring to life.",
  },
  {
    title: "Craftsmanship",
    description: "Meticulous attention to detail ensures each piece meets the highest standards of artistry.",
  },
  {
    title: "Custom Care",
    description: "Every commission receives personal attention, ensuring your vision is realized with authenticity.",
  },
];

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-charcoal text-charcoal-foreground overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src={workshopImage}
            alt="Workshop background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-charcoal/80" />
        
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-px bg-accent" />
              <span className="text-accent text-sm tracking-[0.2em] uppercase font-body font-medium">
                Our Story
              </span>
            </div>
            
            <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-semibold leading-tight mb-6">
              Guardians of
              <span className="block text-accent italic">Ancient Craft</span>
            </h1>
            
            <p className="text-charcoal-foreground/80 text-lg md:text-xl max-w-2xl">
              For over two decades, Devi Shilpalaya has been the sanctuary where 
              devotion meets artistry, and where raw materials transform into divine presence.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 md:py-28 bg-background texture-grain">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <h2 className="font-heading text-4xl md:text-5xl font-semibold text-foreground leading-tight mb-8">
                The Hands Behind
                <span className="block text-primary italic">The Art</span>
              </h2>

              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  Devi Shilpalaya was born from a simple yet profound belief: that 
                  sculpture is not mere craft—it is meditation made visible. Our 
                  workshop emerged from generations of artisans who understood that 
                  to create a divine form, one must first become a vessel of devotion.
                </p>
                
                <p>
                  In our humble workshop, the day begins before dawn. The first 
                  rays of sunlight filter through dusty windows, illuminating 
                  sculptures in various stages of creation—some still emerging 
                  from raw clay, others awaiting their final touches of gold 
                  and color.
                </p>
                
                <p>
                  We work with traditional materials: locally sourced clay, 
                  resilient fibre, and natural pigments. But more importantly, 
                  we work with patience, with prayer, and with an unwavering 
                  commitment to authenticity.
                </p>
                
                <p className="font-heading text-xl italic text-foreground">
                  "Every sculpture that leaves our workshop carries a piece 
                  of our soul—and we wouldn't have it any other way."
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="image-hover rounded-sm overflow-hidden shadow-elevated">
                <img
                  src={craftsmanImage}
                  alt="Master craftsman at work"
                  className="w-full aspect-[4/5] object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 border-2 border-accent rounded-sm -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 md:py-28 bg-secondary/30">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-heading text-4xl md:text-5xl font-semibold text-foreground leading-tight mb-6">
              Our <span className="text-primary italic">Values</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              The principles that guide every sculpture we create.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="bg-background p-8 rounded-sm shadow-soft border border-border/50"
              >
                <div className="w-12 h-12 rounded-sm bg-primary/10 flex items-center justify-center mb-6">
                  <span className="font-heading text-2xl font-bold text-primary">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>
                <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-semibold mb-6">
            Ready to Visit Our Workshop?
          </h2>
          <p className="text-primary-foreground/80 max-w-xl mx-auto mb-8">
            Experience the magic of sculpture-making firsthand. 
            We welcome visitors who wish to witness tradition in action.
          </p>
          <Button variant="hero" size="lg" asChild>
            <Link to="/contact">Get in Touch</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default About;
