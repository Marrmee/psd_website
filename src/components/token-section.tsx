import { AnimatedSection } from "@/components/animated-section"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function TokenSection() {
  return (
    <section id="tokens" className="py-20 sm:px-4 md:px-8 bg-white/5 backdrop-blur-sm">
      <div className="container mx-auto">
        <AnimatedSection className="max-w-3xl mx-auto text-center my-8 flex flex-col items-center justify-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">The SCI Governance and Utility Token</h2>
          <p className="text-white/80 mb-8">
            The SCI token is the backbone of the Poscidon DeSci ecosystem. As a governance and utility token, it allows holders to vote on proposals regarding DAO operations, election of scientific experts who review personalized medicine research projects, and it is required to obtain licenses for our personalized medicine IP portfolio.
          </p>
          <Link href="/sci-token">
            <Button className="bg-white text-[#010737] hover:bg-white/90">Learn More About the SCI Token</Button>
          </Link>
        </AnimatedSection>
      </div>
    </section>
  )
}
