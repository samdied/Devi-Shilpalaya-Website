import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours.",
    });
    
    setFormData({ name: "", phone: "", email: "", message: "" });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-charcoal text-charcoal-foreground">
        <div className="container">
          <div className="max-w-3xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-px bg-accent" />
              <span className="text-accent text-sm tracking-[0.2em] uppercase font-body font-medium">
                Get in Touch
              </span>
            </div>
            
            <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-semibold leading-tight mb-6">
              Let's Create
              <span className="block text-accent italic">Together</span>
            </h1>
            
            <p className="text-charcoal-foreground/80 text-lg md:text-xl max-w-2xl">
              Visit our workshop at Hill Cart Road, Siliguri, call us, or send an enquiry. 
              Every masterpiece begins with a conversation.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 md:py-28 bg-background texture-grain">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Contact Info */}
            <div>
              <h2 className="font-heading text-3xl md:text-4xl font-semibold text-foreground mb-8">
                Contact <span className="text-primary italic">Information</span>
              </h2>

              <div className="space-y-6 mb-12">
                <a
                  href="tel:+91 7318732751"
                  className="flex items-start gap-4 p-5 bg-secondary/50 rounded-sm hover:bg-secondary transition-colors group"
                >
                  <div className="w-12 h-12 rounded-sm bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-semibold text-foreground mb-1">
                      Call Us
                    </h3>
                    <p className="text-muted-foreground">+91 7318732751</p>
                    <p className="text-sm text-muted-foreground/70">Open until 9:00 PM</p>
                  </div>
                </a>

                <a
                  href="https://wa.me/7318732751"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 p-5 bg-secondary/50 rounded-sm hover:bg-secondary transition-colors group"
                >
                  <div className="w-12 h-12 rounded-sm bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-semibold text-foreground mb-1">
                      WhatsApp
                    </h3>
                    <p className="text-muted-foreground">Message us directly</p>
                    <p className="text-sm text-muted-foreground/70">Quick responses guaranteed</p>
                  </div>
                </a>

                <div className="flex items-start gap-4 p-5 bg-secondary/50 rounded-sm">
                  <div className="w-12 h-12 rounded-sm bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-semibold text-foreground mb-1">
                      Visit Our Workshop
                    </h3>
                    <p className="text-muted-foreground">
                      Beside Mahananda Sporting Club,<br />
                      Old Shiva Mandir, Air View More,<br />
                      Hill Cart Road, Siliguri - 734001,<br />
                      West Bengal, India
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-5 bg-secondary/50 rounded-sm">
                  <div className="w-12 h-12 rounded-sm bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-semibold text-foreground mb-1">
                      Working Hours
                    </h3>
                    <p className="text-muted-foreground">
                      Open Daily: Until 9:00 PM<br />
                      55 Years in Business
                    </p>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="gold" size="lg" asChild className="flex-1">
                  <a href="tel:+91 7318732751">
                    <Phone className="w-5 h-5" />
                    Call Now
                  </a>
                </Button>
                <Button variant="outline" size="lg" asChild className="flex-1">
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
            </div>

            {/* Contact Form */}
            <div className="bg-card p-8 md:p-10 rounded-sm shadow-elevated border border-border/50">
              <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-2">
                Send an Enquiry
              </h2>
              <p className="text-muted-foreground mb-8">
                Tell us about your project and we'll get back to you soon.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Your Name *</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    required
                    className="h-12"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="923** *****"
                    required
                    className="h-12"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className="h-12"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Your Message *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Describe the sculpture you're looking for, size requirements, material preferences..."
                    required
                    rows={5}
                    className="resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  variant="artisan"
                  size="lg"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Enquiry
                    </>
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-96 bg-muted">
      <iframe
src="https://www.google.com/maps/embed/v1/place?q=Devi%20Shilpalaya&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Devi Shilpalaya Location - Hill Cart Road, Siliguri"
        />
      </section>
    </Layout>
  );
};

export default Contact;
