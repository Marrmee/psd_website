import { AnimatedSection } from "@/components/animated-section"
import { PageLayout } from "@/components/page-layout"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { Metadata } from "next"
import { Users, Zap, HelpCircle, Network, Scale, HeartHandshake, Blocks } from "lucide-react"

export const metadata: Metadata = {
  title: "Ecosystem | Poscidon - Decentralized Science Platform",
  description:
    "Explore the Poscidon ecosystem - a comprehensive decentralized science platform connecting researchers, funders, and innovators in biotech and personalized medicine.",
  keywords: [
    "Poscidon ecosystem",
    "DeSci platform",
    "decentralized science",
    "biotech ecosystem",
    "research funding",
    "blockchain research",
  ],
  openGraph: {
    title: "Ecosystem | Poscidon - Decentralized Science Platform",
    description:
      "Explore the Poscidon ecosystem - a comprehensive decentralized science platform connecting researchers, funders, and innovators in biotech and personalized medicine.",
    url: "https://poscidon.com/ecosystem",
    siteName: "Poscidon",
    images: [
      {
        url: "https://poscidon.com/ecosystem.svg",
        width: 1200,
        height: 630,
        alt: "Poscidon Ecosystem",
      },
    ],
    locale: "en_US",
    type: "website",
  },
}

export default function EcosystemPage() {
  return (
    <PageLayout>
      <div className="container mx-auto py-16 px-4">
        <AnimatedSection className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            The Poscidon Ecosystem
          </h1>
          <p className="text-xl text-white/80">
            A comprehensive decentralized science platform connecting researchers, funders, and innovators
          </p>
        </AnimatedSection>
        
        {/* Ecosystem SVG Centerpiece */}
        <AnimatedSection delay={0.2} className="max-w-4xl mx-auto mb-12">
          <div className="relative">
            <div className="relative bg-white/10 backdrop-blur-sm rounded-3xl p-8 transition-all duration-500 hover:bg-white/10 group">
              <Image
                src="/ecosystem.svg"
                alt="Poscidon Ecosystem Diagram"
                width={1839}
                height={673}
                className="w-full h-auto rounded-3xl transition-all duration-500 group-hover:scale-[1.02]"
                priority
              />
            </div>
          </div>
        </AnimatedSection>

        {/* Ecosystem Overview Section */}
        <AnimatedSection delay={0.3} className="max-w-4xl mx-auto bg-white/10 rounded-xl p-8 mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-center">
            Powering the Future of Decentralized Science
          </h2>
          <p className="text-white/80 mb-6 text-center">
            Our ecosystem brings together cutting-edge blockchain technology, innovative research funding mechanisms, 
            and a vibrant community of scientists, investors, and innovators working together to accelerate 
            breakthroughs in personalized medicine and biotech research.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.4} className="max-w-4xl mx-auto mb-12">
          <h2 className="text-2xl font-semibold mb-6 text-center">Core Components</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/10 rounded-xl p-6">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-4">
                <Blocks className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Decentralized Funding</h3>
              <p className="text-white/70">
                Revolutionary blockchain-based funding mechanisms that eliminate traditional barriers and accelerate research timelines.
              </p>
            </div>

            <div className="bg-white/10 rounded-xl p-6">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-4">
                <HeartHandshake className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Global Community</h3>
              <p className="text-white/70">
                A thriving network of researchers, investors, and innovators collaborating to solve humanity's greatest health challenges.
              </p>
            </div>

            <div className="bg-white/10 rounded-xl p-6">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-4">
                <Scale className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Transparent Governance</h3>
              <p className="text-white/70">
                DAO-driven decision making ensures every stakeholder has a voice in shaping the future of scientific research funding.
              </p>
            </div>
          </div>
        </AnimatedSection>

        {/* Ecosystem Components Section */}
        <AnimatedSection delay={0.5} className="max-w-4xl mx-auto mb-12">
          <h2 className="text-2xl font-semibold mb-6 text-center">Ecosystem Components</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/10 rounded-xl p-6">
              <div className="w-12 h-12 bg-gradient-to-br from-[#2E8ED7] to-[#78DFEC] rounded-full flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">PoSciDonDAO</h3>
              <p className="text-white/70">
                Decentralized governance structure enabling community-driven decision making for research funding allocation and platform development.
              </p>
            </div>

            <div className="bg-white/10 rounded-xl p-6">
              <div className="w-12 h-12 bg-gradient-to-br from-[#22D6C4] to-[#A1ECD6] rounded-full flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Spark</h3>
              <p className="text-white/70">
                Innovative intellectual property management system that fairly distributes research outcomes among contributors and stakeholders.
              </p>
            </div>

            <div className="bg-white/10 rounded-xl p-6">
              <div className="w-12 h-12 bg-gradient-to-br from-[#0b1dee] to-[#2E8ED7] rounded-full flex items-center justify-center mb-4">
                <HelpCircle className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Mystery Third Component</h3>
              <p className="text-white/70">
                An exciting new component of the ecosystem that will be revealed in due time. Stay tuned for more information about this innovative addition to the Poscidon platform.
              </p>
            </div>
          </div>
        </AnimatedSection>

        {/* Integration & Flow Section */}
        <AnimatedSection delay={0.6} className="max-w-4xl mx-auto bg-white/10 rounded-xl p-8 mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-center">Seamless Integration</h2>
          <p className="text-white/80 mb-6 text-center">
            Our ecosystem components work together to create a frictionless experience from research proposal to breakthrough discovery.
          </p>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Propose", desc: "Researchers submit innovative biotech projects" },
              { step: "02", title: "Evaluate", desc: "Community reviews and votes on proposals" },
              { step: "03", title: "Fund", desc: "Smart contracts automatically release funding" },
              { step: "04", title: "Discover", desc: "Breakthrough research benefits humanity" }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-[#2E8ED7] to-[#78DFEC] rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-white font-bold text-sm">{item.step}</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-white/70 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </AnimatedSection>

        {/* Call to Action Section */}
        <AnimatedSection delay={0.7} className="max-w-4xl mx-auto bg-white/10 rounded-xl p-8">
          <h2 className="text-2xl font-semibold mb-4 text-center">Ready to Join the Revolution?</h2>
          <p className="text-white/80 mb-6 text-center">
            Be part of the future of scientific research funding. Whether you're a researcher, investor, or innovator, 
            there's a place for you in the Poscidon ecosystem.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/apply-for-funding">
              <Button className="bg-gradient-to-r from-[#2E8ED7] to-[#78DFEC] text-white hover:from-[#2E8ED7]/90 hover:to-[#78DFEC]/90 px-8 py-3">
                Apply for Funding
              </Button>
            </Link>
            <Link href="/get-involved">
              <Button variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-3">
                Get Involved
              </Button>
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </PageLayout>
  )
}
