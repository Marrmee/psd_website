import { PageLayout } from "@/components/page-layout"
import { AnimatedSection } from "@/components/animated-section"
import { Lightbulb, Target, Network, AlertTriangle } from "lucide-react"
import Link from "next/link"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "About | Poscidon",
  description:
    "Learn more about Poscidon's mission to revolutionize personalized medicine research funding through decentralized science (DeSci).",
  keywords: [
    "About Poscidon",
    "Poscidon mission",
    "decentralized science",
    "DeSci",
    "biotech funding",
    "personalized medicine research",
  ],
  openGraph: {
    title: "About | Poscidon",
    description:
      "Learn more about Poscidon's mission to revolutionize personalized medicine research funding through decentralized science (DeSci).",
    url: "https://poscidon.com/about",
    siteName: "Poscidon",
    images: [
      {
        url: "https://poscidon.com/og-image-about.png",
        width: 1200,
        height: 630,
        alt: "About Poscidon",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About | Poscidon",
    description:
      "Learn more about Poscidon's mission to revolutionize personalized medicine research funding through decentralized science (DeSci).",
    images: ["https://poscidon.com/twitter-image-about.png"],
  },
};

export default function About() {
  return (
    <PageLayout>
      <div className="container mx-auto py-16 px-4">
        <AnimatedSection className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Poscidon</h1>
          <p className="text-xl text-white/80">
            Learn more about our mission to revolutionize personalized medicine research funding through decentralized science.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.2} className="max-w-4xl mx-auto mb-12">
          <h2 className="text-2xl font-semibold mb-6 text-center">Our Mission & Approach</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white/10 rounded-xl p-6">
              <div className="w-12 h-12 bg-gradient-to-br from-[#2E8ED7] to-[#78DFEC] rounded-full flex items-center justify-center mb-4">
                <Target className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
              <p className="text-white/70 mb-4">
                Poscidon is a decentralized biotech organization dedicated to funding personalized medicine
                research for life-altering diseases. We aim to address the challenges in the current research funding
                process, which is often centralized, biased, and inefficient.
              </p>
              <p className="text-white/70">
                By leveraging blockchain technology and decentralized governance, we're creating a more transparent,
                efficient, and democratic system for funding scientific research that can lead to breakthroughs in
                personalized medicine.
              </p>
            </div>

            <div className="bg-white/10 rounded-xl p-6">
              <div className="w-12 h-12 bg-gradient-to-br from-[#22D6C4] to-[#A1ECD6] rounded-full flex items-center justify-center mb-4">
                <Network className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Our Approach</h3>
              <p className="text-white/70 mb-4">
                We focus on funding early-stage, pre-patented projects from academic research groups, private labs, and
                early-startup biotech companies that work on bridging the gap between academic research and industrial
                commercialization for personalized medicine.
              </p>
              <p className="text-white/70">
                Our team consists of experts in virology, immunology, biotechnology, oncology, and epidemiology, allowing us
                to assess which projects have the potential to make a significant impact in the personalized medicine field.
              </p>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.3} className="max-w-4xl mx-auto mb-12">
          <div className="bg-white/10 rounded-xl p-8">
            <h2 className="text-2xl font-semibold mb-6 text-center">Why Decentralization Matters</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white/10 rounded-xl p-6">
                <div className="w-12 h-12 bg-gradient-to-br from-[#0b1dee] to-[#2E8ED7] rounded-full flex items-center justify-center mb-4">
                  <AlertTriangle className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Current Challenges</h3>
                <p className="text-white/70">
                  The current funding system for scientific research is often influenced by political priorities, economic
                  conditions, and institutional biases. These influences can shift funding away from certain areas of science,
                  regardless of their scientific merit.
                </p>
              </div>
              
                                            <div className="bg-white/10 rounded-xl p-6">
                 <div className="w-12 h-12 bg-gradient-to-br from-[#22D6C4] to-[#A1ECD6] rounded-full flex items-center justify-center mb-4">
                    <Lightbulb className="h-6 w-6 text-white" />
                 </div>
                 <h3 className="text-xl font-semibold mb-2">Our Solution</h3>
                <p className="text-white/70">
                  By decentralizing the funding process, we can reduce these biases and create a more equitable system that
                  prioritizes scientific merit and potential impact over other factors. This approach can lead to more
                  innovative research and faster breakthroughs in personalized medicine.
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.4} className="max-w-4xl mx-auto">
          <div className="bg-white/10 rounded-xl p-8 text-center">
            <h2 className="text-2xl font-semibold mb-6">Join Our Mission</h2>
            <p className="text-white/80 max-w-3xl mx-auto mb-8">
              We invite scientists, entrepreneurs, investors, and decentralized science enthusiasts to join our community
              and be part of the revolution in personalized medicine research funding. Together, we can create a more
              democratic and unbiased ecosystem that redefines the funding process of personalized medicine research.
            </p>
            
            <Link href="https://dao.poscidon.com" target="_blank" rel="noopener noreferrer" className="px-8 py-3 bg-gradient-to-r from-[#2E8ED7] to-[#22D6C4] rounded-lg text-white font-medium hover:shadow-lg hover:shadow-[#78DFEC]/20 transition-all duration-300 transform hover:-translate-y-1">
              Join the DAO
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </PageLayout>
  )
}
