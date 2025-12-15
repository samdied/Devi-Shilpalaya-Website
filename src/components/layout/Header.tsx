import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Gallery", path: "/gallery" },
  { name: "Services", path: "/services" },
  { name: "Contact", path: "/contact" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-soft py-3"
          : "bg-background/30 backdrop-blur-sm py-5 lg:bg-transparent lg:backdrop-blur-none"
      )}
    >
      <div className="container flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="group">
          <h1 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight">
            <span className={cn(
              "transition-colors duration-300",
              isScrolled ? "text-foreground" : "text-cream"
            )}>
              Devi{" "}
            </span>
            <span className={cn(
              "transition-colors duration-300",
              isScrolled ? "text-primary" : "text-accent"
            )}>
              Shilpalaya
            </span>
          </h1>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                "font-body text-sm tracking-wide link-underline transition-colors duration-300",
                location.pathname === link.path
                  ? isScrolled ? "text-primary" : "text-accent"
                  : isScrolled ? "text-foreground hover:text-primary" : "text-cream/80 hover:text-cream"
              )}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden lg:block">
          <Button 
            variant={isScrolled ? "artisan" : "hero"} 
            size="sm"
            asChild
          >
            <a href="tel:+91 7318732751">
              <Phone className="w-4 h-4" />
              Call Now
            </a>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <X className={cn("w-6 h-6", isScrolled ? "text-foreground" : "text-cream")} />
          ) : (
            <Menu className={cn("w-6 h-6", isScrolled ? "text-foreground" : "text-cream")} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "lg:hidden absolute top-full left-0 right-0 bg-background/98 backdrop-blur-md shadow-elevated transition-all duration-300 overflow-hidden",
          isMobileMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <nav className="container py-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                "font-body text-lg py-2 border-b border-border/50 transition-colors",
                location.pathname === link.path
                  ? "text-primary"
                  : "text-foreground hover:text-primary"
              )}
            >
              {link.name}
            </Link>
          ))}
          <Button variant="artisan" className="mt-4" asChild>
            <a href="tel:+91 7318732751">
              <Phone className="w-4 h-4" />
              Call Now
            </a>
          </Button>
        </nav>
      </div>
    </header>
  );
}
