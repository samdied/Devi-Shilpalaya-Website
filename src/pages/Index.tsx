import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { IntroSection } from "@/components/home/IntroSection";
import { FeaturedGallery } from "@/components/home/FeaturedGallery";
import { ServicesPreview } from "@/components/home/ServicesPreview";
import { CTASection } from "@/components/home/CTASection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <IntroSection />
      <FeaturedGallery />
      <ServicesPreview />
      <CTASection />
    </Layout>
  );
};

export default Index;
