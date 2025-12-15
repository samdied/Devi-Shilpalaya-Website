import { Layout } from "@/components/layout/Layout";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <Layout>
      <section className="min-h-[80vh] flex items-center justify-center bg-background texture-grain">
        <div className="container text-center">
          <span className="font-heading text-9xl md:text-[12rem] font-bold text-primary/10">
            404
          </span>
          <h1 className="font-heading text-4xl md:text-5xl font-semibold text-foreground -mt-12 mb-4">
            Page Not Found
          </h1>
          <p className="text-muted-foreground text-lg max-w-md mx-auto mb-8">
            The page you're looking for doesn't exist or has been moved. 
            Let us guide you back to our workshop.
          </p>
          <Button variant="artisan" size="lg" asChild>
            <Link to="/">
              <Home className="w-5 h-5" />
              Return Home
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default NotFound;
