import { Hero } from "@/components/home/hero";
import { ProductMarquee } from "@/components/home/product-marquee";
import { Story } from "@/components/home/story";
import { TimelineSection } from "@/components/home/timeline-section";
import { FeaturedWork } from "@/components/home/featured-work";
import { SkillsSection } from "@/components/home/skills-section";
import { AskAiSection } from "@/components/home/ask-ai-section";
import { Impact } from "@/components/home/impact";
import { Contact } from "@/components/home/contact";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ProductMarquee />
      <Story />
      <TimelineSection />
      <FeaturedWork />
      <SkillsSection />
      <AskAiSection />
      <Impact />
      <Contact />
    </>
  );
}
