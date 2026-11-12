import Hero from "@/components/sections/home/Hero";
import Statement from "@/components/sections/home/Statement";
import ServicesShowcase from "@/components/sections/home/ServicesShowcase";
import FeaturedWorks from "@/components/sections/home/FeaturedWorks";
import MetricsStrip from "@/components/sections/home/MetricsStrip";

export default function Home() {
  return (
    <>
      <Hero />
      <Statement />
      <ServicesShowcase />
      <FeaturedWorks />
      <MetricsStrip />
    </>
  );
}

