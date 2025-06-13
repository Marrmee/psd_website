import { FloatingLightsAnimation } from "@/components/floating-lights-animation"
import { AboutSection } from "@/components/about-section"
import { ResearchSection } from "@/components/research-section"
import { TokenSection } from "@/components/token-section"
import { CommunitySection } from "@/components/community-section"
import { FaqSection } from "@/components/faq-section"
import { PartnersSection } from "@/components/partners-section"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Poscidon | Decentralized Biotech Research Funding",
  description:
    "Poscidon is a decentralized organization funding personalized medicine research for life-altering diseases. Join us to revolutionize research funding.",
  keywords: [
    "Poscidon",
    "decentralized science",
    "DeSci",
    "biotech",
    "research funding",
    "personalized medicine",
    "blockchain",
    "DAO",
  ],
  openGraph: {
    title: "Poscidon | Decentralized Biotech Research Funding",
    description:
      "Poscidon is a decentralized organization funding personalized medicine research for life-altering diseases. Join us to revolutionize research funding.",
    url: "https://poscidon.com",
    siteName: "Poscidon",
    images: [
      {
        url: "https://poscidon.com/og-image.png", // Must be an absolute URL
        width: 1200,
        height: 630,
        alt: "Poscidon",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Poscidon | Decentralized Biotech Research Funding",
    description:
      "Poscidon is a decentralized organization funding personalized medicine research for life-altering diseases. Join us to revolutionize research funding.",
    images: ["https://poscidon.com/twitter-image.png"], // Must be an absolute URL
  },
};

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0 z-0">
        <FloatingLightsAnimation />
      </div>
      
      <div className="relative z-10">
        <Header />
        <main>
          {/* Hero section is now part of the animation */}
          <div className="h-screen" id="hero"></div>
          <AboutSection />
          <ResearchSection />
          <PartnersSection />
          <TokenSection />
          <CommunitySection />
          <FaqSection />
        </main>
        <Footer />
      </div>
    </div>
  )
}
