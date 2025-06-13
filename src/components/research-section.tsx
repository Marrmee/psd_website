import { ResearchCard } from "@/components/research-card"
import { AnimatedSection } from "@/components/animated-section"

export function ResearchSection() {
  return (
    <section id="research" className="py-20 sm:px-4 md:px-8">
      <div className="container mx-auto">
        <AnimatedSection className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Poscidon's DeSci Research Focus in Biotech</h2>
          <p className="text-white/80">
            Poscidon's research funding is directed towards cutting-edge techniques in personalized medicine and biotech, enabling treatments tailored to patients' unique genetic profiles.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-8">
          <AnimatedSection delay={0.2}>
            <ResearchCard
              title="Genetic Screening"
              description="Advanced sequencing and analysis of individual genetic profiles to identify disease markers and treatment targets."
              icon="genomic-diagnostics"
            />
          </AnimatedSection>

          <AnimatedSection delay={0.3}>
            <ResearchCard
              title="Gene-Based Therapy"
              description="Developing targeted gene editing and delivery systems to correct genetic abnormalities at their source."
              icon="gene-therapy"
            />
          </AnimatedSection>

          <AnimatedSection delay={0.4}>
            <ResearchCard
              title="AI-Driven Drug Discovery"
              description="Leveraging artificial intelligence to accelerate the identification and development of personalized therapeutic compounds."
              icon="ai-drug-discovery"
            />
          </AnimatedSection>

          <AnimatedSection delay={0.5}>
            <ResearchCard
              title="Biomarker Development"
              description="Identifying and validating molecular indicators that predict disease progression and treatment response."
              icon="biomarker-development"
            />
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
