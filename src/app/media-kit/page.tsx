import { PageLayout } from "@/components/page-layout"
import { AnimatedSection } from "@/components/animated-section"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { Download } from "lucide-react"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Media Kit | Poscidon",
  description:
    "Access Poscidon's official brand assets, logos, and media guidelines. Download resources for press and media use.",
  keywords: [
    "Poscidon media kit",
    "Poscidon brand assets",
    "Poscidon logo",
    "press kit",
    "media resources",
    "decentralized science",
  ],
  openGraph: {
    title: "Media Kit | Poscidon",
    description:
      "Access Poscidon's official brand assets, logos, and media guidelines. Download resources for press and media use.",
    url: "https://poscidon.com/media-kit",
    siteName: "Poscidon",
    images: [
      {
        url: "https://poscidon.com/og-image-media-kit.png",
        width: 1200,
        height: 630,
        alt: "Poscidon Media Kit",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Media Kit | Poscidon",
    description:
      "Access Poscidon's official brand assets, logos, and media guidelines. Download resources for press and media use.",
    images: ["https://poscidon.com/twitter-image-media-kit.png"],
  },
};

const logos = [
  {
    name: "Poscidon Logo",
    variants: [
      { color: "Black", png: "/psdlogo_black.png", svg: "/psdlogo_black.svg" },
      { color: "Blue", png: "/psdlogo_blue.png", svg: "/psdlogo_blue.svg" },
      { color: "White", png: "/psdlogo_white.png", svg: "/psdlogo_white.svg" },
    ],
  },
  {
    name: "Poscidon Mark",
    variants: [
      { color: "Black", png: "/psdmark_black.png", svg: "/psdmark_black.svg" },
      { color: "Blue", png: "/psdmark_blue.png", svg: "/psdmark_blue.svg" },
      { color: "White", png: "/psdmark_white.png", svg: "/psdmark_white.svg" },
    ],
  },
]

export default function MediaKitPage() {
  return (
    <PageLayout>
      <div className="container mx-auto py-16 px-4">
        <AnimatedSection className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Media Kit</h1>
          <p className="text-xl text-white/80 mb-8">
            Access Poscidon's brand assets and guidelines for consistent representation across all platforms.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.2} className="max-w-4xl mx-auto mb-16">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
            <h2 className="text-2xl font-semibold mb-6">Brand Guidelines</h2>
            <p className="text-white/80 mb-6">
              Our brand guidelines provide comprehensive information on how to properly use Poscidon's visual identity,
              including our logo, colors, typography, and more. Please follow these guidelines to ensure consistent
              representation of our brand.
            </p>
            <div className="flex justify-center">
              <a href="/brand-guidelines.pdf" target="_blank" rel="noopener noreferrer">
                <Button className="bg-white text-[#010737] hover:bg-white/90">Download Brand Guidelines</Button>
              </a>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.3} className="max-w-4xl mx-auto mb-16">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
            <h2 className="text-2xl font-semibold mb-6">Brand Assets</h2>
            <div className="space-y-8">
              {logos.map((logo, logoIndex) => (
                <div key={logoIndex}>
                  <h3 className="text-xl font-medium mb-4 text-center md:text-left">{logo.name}</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {logo.variants.map((variant, variantIndex) => (
                      <div
                        key={variantIndex}
                        className={`rounded-lg p-4 flex flex-col items-center justify-between ${
                          variant.color === "White" ? "bg-[#010737]" : "bg-gray-200"
                        }`}
                      >
                        <Image
                          src={variant.png}
                          alt={`${logo.name} ${variant.color}`}
                          width={150}
                          height={50}
                          className="object-contain h-12"
                        />
                        <div className="text-center mt-4">
                          <p
                            className={`font-semibold ${
                              variant.color === "White" ? "text-white" : "text-gray-800"
                            }`}
                          >
                            {variant.color}
                          </p>
                          <div className="flex gap-2 mt-2">
                            <a href={variant.png} download>
                              <Button
                                size="sm"
                                variant="outline"
                                className={`text-xs flex items-center bg-transparent ${
                                  variant.color === "White"
                                    ? "text-white border-white/50 hover:bg-white/10"
                                    : "text-gray-800 border-gray-800/50 hover:bg-black/10"
                                }`}
                              >
                                <Download className="w-3 h-3 mr-1" />
                                PNG
                              </Button>
                            </a>
                            <a href={variant.svg} download>
                              <Button
                                size="sm"
                                variant="outline"
                                className={`text-xs flex items-center bg-transparent ${
                                  variant.color === "White"
                                    ? "text-white border-white/50 hover:bg-white/10"
                                    : "text-gray-800 border-gray-800/50 hover:bg-black/10"
                                }`}
                              >
                                <Download className="w-3 h-3 mr-1" />
                                SVG
                              </Button>
                            </a>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.4} className="max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
            <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
            <p className="text-white/80 mb-6">
              For media inquiries, partnership opportunities, or additional brand assets, please contact our team.
            </p>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-medium mb-2">Email</h3>
                <p className="text-white/80">
                  <a href="mailto:hello@poscidon.com" className="hover:text-white transition-colors">
                    hello@poscidon.com
                  </a>
                </p>
              </div>
              <div>
                <h3 className="text-xl font-medium mb-2">Social Media</h3>
                <div className="flex flex-wrap gap-4">
                  <a
                    href="https://x.com/PoSciDonDAO"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/80 hover:text-white transition-colors"
                  >
                    X (Twitter)
                  </a>
                  <a
                    href="https://discord.com/invite/75SrHpcNSZ"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/80 hover:text-white transition-colors"
                  >
                    Discord
                  </a>
                  <a
                    href="https://www.linkedin.com/company/poscidondao?trk=public_post_feed-actor-name"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/80 hover:text-white transition-colors"
                  >
                    LinkedIn
                  </a>
                  <a
                    href="https://t.me/OfficialPoSciDonDAO"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/80 hover:text-white transition-colors"
                  >
                    Telegram
                  </a>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </PageLayout>
  )
}
