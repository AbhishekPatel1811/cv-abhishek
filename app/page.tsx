import { Hero } from "@/components/home/hero";
import { ProductMarquee } from "@/components/home/product-marquee";
import { Story } from "@/components/home/story";
import { ExperienceSection } from "@/components/home/experience-section";
import { FeaturedWork } from "@/components/home/featured-work";
import { SkillsSection } from "@/components/home/skills-section";
import { EducationSection } from "@/components/home/education-section";
import { AskAiSection } from "@/components/home/ask-ai-section";
import { Impact } from "@/components/home/impact";
import { Contact } from "@/components/home/contact";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ProductMarquee />
      <Story />
      <ExperienceSection />
      <FeaturedWork />
      <SkillsSection />
      <EducationSection />
      <AskAiSection />
      <Impact />
      <Contact />
    </>
  );
}
