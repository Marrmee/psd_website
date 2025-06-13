import { PageLayout } from "@/components/page-layout"
import { AnimatedSection } from "@/components/animated-section"
import { Button } from "@/components/ui/button"
import { TokenCard } from "@/components/token-card"
import { Metadata } from "next"
import Head from "next/head"
import { Scale, Sparkles } from "lucide-react"

export const metadata: Metadata = {
  title: "SCI Token | Poscidon",
  description:
    "Learn about the SCI token, the utility and governance token of the Poscidon ecosystem. Discover tokenomics, how to acquire SCI, and its role in funding research.",
  keywords: [
    "SCI token",
    "Poscidon token",
    "DeSci token",
    "governance token",
    "utility token",
    "tokenomics",
    "buy SCI",
  ],
  openGraph: {
    title: "SCI Token | Poscidon",
    description:
      "Learn about the SCI token, the utility and governance token of the Poscidon ecosystem. Discover tokenomics, how to acquire SCI, and its role in funding research.",
    url: "https://poscidon.com/sci-token",
    siteName: "Poscidon",
    images: [
      {
        url: "https://poscidon.com/og-image-sci-token.png",
        width: 1200,
        height: 630,
        alt: "Poscidon SCI Token",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SCI Token | Poscidon",
    description:
      "Learn about the SCI token, the utility and governance token of the Poscidon ecosystem. Discover tokenomics, how to acquire SCI, and its role in funding research.",
    images: ["https://poscidon.com/twitter-image-sci-token.png"],
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
    "name": "SCI Token",
    "item": "https://poscidon.com/sci-token"
  }]
};

export default function SciTokenPage() {
  return (
    <PageLayout>
      <Head>
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      </Head>
      <div className="container mx-auto py-16 px-4">
        <AnimatedSection className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">The SCI Token: Powering a DeSci Revolution</h1>
          <p className="text-xl text-white/80">
            The SCI token is the utility and governance token that powers the Poscidon ecosystem, granting voting rights in the DAO and shaping the future of decentralized science.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.2} className="max-w-4xl mx-auto bg-white/10 rounded-xl p-8 mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-center">Explore the SCI Utility Token</h2>
          <p className="text-white/80 mb-6 text-center">
            The SCI utility token is the backbone of the Poscidon DeSci ecosystem. It allows holders to vote on proposals regarding DAO operations and the election of scientific experts who review personalized medicine research projects. Additionally, the SCI token is required to obtain licenses for the Spark IP pools.
          </p>
          <div className="flex justify-center">
            <a
              href="https://app.uniswap.org/swap?inputCurrency=ETH&outputCurrency=0x25E0A7767d03461EaF88b47cd9853722Fe05DFD3"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="bg-white text-[#010737] hover:bg-white/90 px-8">Buy SCI</Button>
            </a>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.3} className="max-w-4xl mx-auto mb-12">
          <h2 className="text-2xl font-semibold mb-6 text-center">SCI Utility</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white/10 rounded-xl p-6">
              <div className="w-12 h-12 bg-gradient-to-br from-[#2E8ED7] to-[#78DFEC] rounded-full flex items-center justify-center mb-4">
                <Scale className="text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Governance</h3>
              <p className="text-white/70">
                By locking the SCI governance token, members receive voting rights over Poscidon's treasury, its DeSci operations, the election of scientific experts, and the management of the personalized medicine IP portfolio.
              </p>
            </div>

            <div className="bg-white/10 rounded-xl p-6">
              <div className="w-12 h-12 bg-gradient-to-br from-[#22D6C4] to-[#A1ECD6] rounded-full flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-white"
                >
                  <title>Stake in IP Icon</title>
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                  <polyline points="14,2 14,8 20,8"></polyline>
                  <line x1="16" y1="13" x2="8" y2="13"></line>
                  <line x1="16" y1="17" x2="8" y2="17"></line>
                  <polyline points="10,9 9,9 8,9"></polyline>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Stake in IP</h3>
              <p className="text-white/70">
                A portion of the revenue generated from commercialized IP will be used to buy back SCI from the market
                followed by a token burn, ensuring token holders benefit from scientific innovation and a growing IP
                portfolio.
              </p>
            </div>

            <div className="bg-white/10 rounded-xl p-6">
              <div className="w-12 h-12 bg-gradient-to-br from-[#0b1dee] to-[#2E8ED7] rounded-full flex items-center justify-center mb-4">
                <Sparkles className="text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Incentives</h3>
              <p className="text-white/70">
                SCI is used to attract and incentivise talent and experts to support the development of Poscidon's
                funded personalized medicine research projects.
              </p>
            </div>

            <div className="bg-white/10 rounded-xl p-6">
              <div className="w-12 h-12 bg-gradient-to-br from-[#2E8ED7] to-[#78DFEC] rounded-full flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-white"
                >
                  <title>Rewards Icon</title>
                  <path d="M8 21h8" />
                  <path d="M12 17v4" />
                  <path d="M7 4h10" />
                  <path d="M17 4v8a5 5 0 0 1-10 0V4" />
                  <path d="M5 9H3" />
                  <path d="M19 9h2" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Rewards</h3>
              <p className="text-white/70">
                Voting on governance proposals will give you PO, a non-tradable non-fungible token. PO can be exchanged
                for SCI tokens and in the future for other rewards including conference tickets and merch.
              </p>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.4} className="max-w-4xl mx-auto mb-12">
          <div className="bg-white/10 rounded-xl p-8">
            <h2 className="text-2xl font-semibold mb-6 text-center">Token Allocation</h2>
            <p className="text-center mb-8 text-xl">Maximum Total Supply: 18,910,000</p>

            <div className="flex flex-col md:flex-row items-center justify-center gap-8">
              <div className="relative w-64 h-64">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <title>SCI Token Allocation Chart</title>
                  <desc>A donut chart showing the allocation of SCI tokens: Foundation 37%, Community 32.456%, DAO Operators 15%, Public Sale 11.17%, and Private Sale 4.374%.</desc>
                  {/* Foundation - 37% */}
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    fill="none"
                    stroke="#2E8ED7" // steelBlue
                    strokeWidth="20"
                    strokeDasharray={`${37 * 2.51} ${100 * 2.51 - 37 * 2.51}`}
                    strokeDashoffset="0"
                    transform="rotate(-90 50 50)"
                  />
                  {/* Community - 32.456% */}
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    fill="none"
                    stroke="#78DFEC" // tropicalBlue
                    strokeWidth="20"
                    strokeDasharray={`${32.456 * 2.51} ${100 * 2.51 - 32.456 * 2.51}`}
                    strokeDashoffset={`${-(37) * 2.51}`}
                    transform="rotate(-90 50 50)"
                  />
                  {/* DAO Operators - 15% */}
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    fill="none"
                    stroke="#22D6C4" // aquaBlue
                    strokeWidth="20"
                    strokeDasharray={`${15 * 2.51} ${100 * 2.51 - 15 * 2.51}`}
                    strokeDashoffset={`${-(37 + 32.456) * 2.51}`}
                    transform="rotate(-90 50 50)"
                  />
                  {/* Public Sale - 11.17% */}
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    fill="none"
                    stroke="#0b1dee" // deepseaBlue
                    strokeWidth="20"
                    strokeDasharray={`${11.17 * 2.51} ${100 * 2.51 - 11.17 * 2.51}`}
                    strokeDashoffset={`${-(37 + 32.456 + 15) * 2.51}`}
                    transform="rotate(-90 50 50)"
                  />
                  {/* Private Sale - 4.374% */}
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    fill="none"
                    stroke="#A1ECD6" // mintGreen
                    strokeWidth="20"
                    strokeDasharray={`${4.374 * 2.51} ${100 * 2.51 - 4.374 * 2.51}`}
                    strokeDashoffset={`${-(37 + 32.456 + 15 + 11.17) * 2.51}`}
                    transform="rotate(-90 50 50)"
                  />
                  {/* Inner circle to create donut */}
                  <circle cx="50" cy="50" r="30" fill="#010737" />
                </svg>
              </div>

              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-4 h-4" style={{ backgroundColor: "#2E8ED7" }}></div>
                  <div className="flex-1">
                    <div className="font-medium">Foundation</div>
                    <div>37%</div>
                    <div className="text-sm text-white/70">6,996,700 Tokens</div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-4 h-4" style={{ backgroundColor: "#78DFEC" }}></div>
                  <div className="flex-1">
                    <div className="font-medium">Community</div>
                    <div>32.456%</div>
                    <div className="text-sm text-white/70">6,137,429.6 Tokens</div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-4 h-4" style={{ backgroundColor: "#22D6C4" }}></div>
                  <div className="flex-1">
                    <div className="font-medium">DAO Operators</div>
                    <div>15%</div>
                    <div className="text-sm text-white/70">2,836,500 Tokens</div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-4 h-4" style={{ backgroundColor: "#0b1dee" }}></div>
                  <div className="flex-1">
                    <div className="font-medium">Public Sale</div>
                    <div>11.17%</div>
                    <div className="text-sm text-white/70">2,112,262.4 Tokens</div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-4 h-4" style={{ backgroundColor: "#A1ECD6" }}></div>
                  <div className="flex-1">
                    <div className="font-medium">Private Sale</div>
                    <div>4.374%</div>
                    <div className="text-sm text-white/70">827,108 Tokens</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center mt-8">
              <a
                href="https://poscidondao.gitbook.io/litepaper/about-poscidondao/sci-tokenomics"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="bg-white text-[#010737] hover:bg-white/90 px-8">
                  Learn More About SCI Tokenomics
                </Button>
              </a>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.5} className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold mb-6 text-center">A Dual-Token Economy for DeSci Innovation</h2>
          <p className="text-white/80 text-center mb-8">
            Poscidon's unique dual-token economy incentivizes participation, long-term engagement, and innovation in decentralized science.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <TokenCard
              name="SCI Token"
              description="The tradable governance token that grants voting rights in the DAO. Lock SCI tokens in the DAO dApp to participate in governance decisions."
              features={[
                "Tradable on exchanges",
                "Governance voting power",
                "Token burn mechanism",
                "Total supply: 18,910,000",
              ]}
              isPrimary={true}
            />

            <TokenCard
              name="PO Token"
              description="A non-tradable NFT awarded for governance participation. Exchange PO tokens for SCI tokens and other rewards."
              features={[
                "Proof of participation",
                "Account-bound NFT",
                "Exchangeable for rewards",
                "Incentivizes governance",
              ]}
              isPrimary={false}
            />
          </div>
        </AnimatedSection>
      </div>
    </PageLayout>
  )
}
