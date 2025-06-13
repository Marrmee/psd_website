import { PageLayout } from "@/components/page-layout"
import { AnimatedSection } from "@/components/animated-section"
import { Button } from "@/components/ui/button"
import { Metadata } from "next"
import Head from "next/head"
import { Cog } from "lucide-react"

export const metadata: Metadata = {
  title: "Get Involved | Poscidon",
  description:
    "Join the Poscidon community and help revolutionize personalized medicine research funding. Apply to a crew, join our Discord, and contribute to the future of DeSci.",
  keywords: [
    "Get involved with Poscidon",
    "Poscidon community",
    "DeSci community",
    "DAO contribution",
    "biotech research",
    "personalized medicine",
  ],
  openGraph: {
    title: "Get Involved | Poscidon",
    description:
      "Join the Poscidon community and help revolutionize personalized medicine research funding. Apply to a crew, join our Discord, and contribute to the future of DeSci.",
    url: "https://poscidon.com/get-involved",
    siteName: "Poscidon",
    images: [
      {
        url: "https://poscidon.com/og-image-get-involved.png",
        width: 1200,
        height: 630,
        alt: "Get Involved with Poscidon",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Get Involved | Poscidon",
    description:
      "Join the Poscidon community and help revolutionize personalized medicine research funding. Apply to a crew, join our Discord, and contribute to the future of DeSci.",
    images: ["https://poscidon.com/twitter-image-get-involved.png"],
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [{
    "@type": "ListItem",
    "position": 1,
    "name": "Home",
    "item": "https://poscidon.com"
  },{
    "@type": "ListItem",
    "position": 2,
    "name": "Get Involved",
    "item": "https://poscidon.com/get-involved"
  }]
};

export default function GetInvolvedPage() {
  return (
    <PageLayout>
      <Head>
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      </Head>
      <div className="container mx-auto py-16 px-4">
        <AnimatedSection className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Get Involved</h1>
          <p className="text-xl text-white/80 mb-8">
            Join the Poscidon community and help revolutionize personalized medicine research funding. There are many
            ways to participate in our ecosystem. The Poscidon community consists of many expert scientists,
            bioentrepreneurs and decentralized science enthusiasts. They collectively help the organisation and one
            another flourish. The DAO is managed by a core team with expertise in science, web3 and entrepreneurship.
          </p>
          <div className="flex justify-center">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLScj5fun-KY86Ty3_IuUxeSSsFYaTMmbBloqNccUnNsrjurn8g/viewform"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="bg-gradient-to-r from-[#2E8ED7] to-[#22D6C4] text-white hover:shadow-lg hover:shadow-[#78DFEC]/20 transition-all duration-300 px-8 py-6 text-lg">Apply to a Crew</Button>
            </a>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.3} className="max-w-4xl mx-auto mb-12">
          <h2 className="text-3xl font-bold mb-8 text-center">Crews</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 hover:bg-white/15 transition-colors">
              <div className="w-16 h-16 bg-gradient-to-br from-[#2E8ED7] to-[#78DFEC] rounded-full flex items-center justify-center mb-6">
                <Cog className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">Operations</h3>
              <p className="text-white/80 leading-relaxed">
                The Operations Crew is dedicated to keep all the DAO operations running smoothly. This includes
                tokenomics, marketing, governance, community building and onboarding, branding, and managing the
                election process for scientific experts.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 hover:bg-white/15 transition-colors">
              <div className="w-16 h-16 bg-gradient-to-br from-[#22D6C4] to-[#A1ECD6] rounded-full flex items-center justify-center mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-white"
                >
                  <title>Due Diligence Icon</title>
                  <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                  <path d="M9 15v-2"></path>
                  <path d="M12 15v-6"></path>
                  <path d="M15 15v-4"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">Due Diligence</h3>
              <p className="text-white/80 leading-relaxed">
                Scientific experts elected by the community will become part of the Due Diligence Crew. These crew
                members will dedicate their expertise to source and review ground-breaking personalized medicine-focused
                research projects.
              </p>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.5} className="max-w-4xl mx-auto bg-white/10 backdrop-blur-sm rounded-xl p-8">
          <div className="text-center">
            <h3 className="text-2xl font-semibold mb-4">Ready to Join Our Community?</h3>
            <p className="text-white/80 mb-6">
              Apply to join one of our crews and contribute your expertise to revolutionizing personalized medicine
              research funding.
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLScj5fun-KY86Ty3_IuUxeSSsFYaTMmbBloqNccUnNsrjurn8g/viewform"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="bg-gradient-to-r from-[#2E8ED7] to-[#22D6C4] text-white hover:shadow-lg hover:shadow-[#78DFEC]/20 transition-all duration-300">Apply to a Crew</Button>
              </a>
              <a href="https://discord.com/invite/75SrHpcNSZ" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="border-[#78DFEC]/30 text-white hover:bg-white/10 hover:border-[#78DFEC]/50">
                  Join Discord
                </Button>
              </a>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </PageLayout>
  )
}
