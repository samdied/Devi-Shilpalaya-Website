import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-charcoal text-charcoal-foreground">
      {/* Main Footer */}
      <div className="container py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <h2 className="font-heading text-3xl font-semibold mb-4">
              Devi <span className="text-accent">Shilpalaya</span>
            </h2>
            <p className="text-charcoal-foreground/70 max-w-md leading-relaxed mb-6">
              Where devotion takes form. Established in 1970, we have been 
              handcrafting sacred sculptures for over 55 years using traditional 
              techniques passed down through generations.
            </p>
            <div className="w-20 h-0.5 bg-accent" />
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading text-xl font-semibold mb-6">
              Quick Links
            </h3>
            <nav className="flex flex-col gap-3">
              {[
                { name: "Home", path: "/" },
                { name: "Gallery", path: "/gallery" },
                { name: "Services", path: "/services" },
                { name: "Contact", path: "/contact" },
              ].map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-charcoal-foreground/70 hover:text-accent transition-colors duration-300 link-underline inline-block w-fit"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-heading text-xl font-semibold mb-6">
              Contact Us
            </h3>
            <div className="flex flex-col gap-4">
              <a
                href="tel:+917318732751"
                className="flex items-center gap-3 text-charcoal-foreground/70 hover:text-accent transition-colors"
              >
                <Phone className="w-5 h-5 text-accent" />
                <span>7318732751</span>
              </a>
              <a
                href="https://wa.me/7318732751"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-charcoal-foreground/70 hover:text-accent transition-colors"
              >
                <Mail className="w-5 h-5 text-accent" />
                <span>WhatsApp</span>
              </a>
              <div className="flex items-start gap-3 text-charcoal-foreground/70">
                <MapPin className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <span>
                  Beside Mahananda Sporting Club,<br />
                  Old Shiva Mandir, Hill Cart Road,<br />
                  Siliguri - 734001, West Bengal
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-charcoal-foreground/10">
        <div className="container py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-charcoal-foreground/50">
          <p>© {new Date().getFullYear()} Devi Shilpalaya. All rights reserved.</p>
          <p className="font-heading italic">
            "55 Years of Sacred Craftsmanship"
          </p>
        </div>
      </div>
    </footer>
  );
}
