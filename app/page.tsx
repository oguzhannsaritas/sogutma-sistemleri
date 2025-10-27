import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { WhyTamgucSection } from "@/components/why-tamguc-section"
import { ProductsSection } from "@/components/products-section"
import { ProjectsSection } from "@/components/projects-section"
import { BlogSection } from "@/components/blog-section"
import { FaqSection } from "@/components/faq-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <WhyTamgucSection />
        <ProductsSection />
        <ProjectsSection />
        <BlogSection />
        <FaqSection />
      </main>
      <Footer />
    </div>
  )
}
