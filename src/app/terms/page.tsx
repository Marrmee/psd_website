import { PageLayout } from "@/components/page-layout"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Terms of Service | Poscidon",
  description:
    "Read the official Terms of Service for Poscidon. Understand the rules and guidelines for using our website and platform.",
  keywords: [
    "Poscidon terms of service",
    "terms and conditions",
    "legal",
    "website policy",
    "decentralized science",
  ],
  openGraph: {
    title: "Terms of Service | Poscidon",
    description:
      "Read the official Terms of Service for Poscidon. Understand the rules and guidelines for using our website and platform.",
    url: "https://poscidon.com/terms",
    siteName: "Poscidon",
    images: [
      {
        url: "https://poscidon.com/og-image-terms.png",
        width: 1200,
        height: 630,
        alt: "Poscidon Terms of Service",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms of Service | Poscidon",
    description:
      "Read the official Terms of Service for Poscidon. Understand the rules and guidelines for using our website and platform.",
    images: ["https://poscidon.com/twitter-image-terms.png"],
  },
};

export default function TermsOfService() {
  return (
    <PageLayout>
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">Website Terms of Service</h1>

        <div className="space-y-8 text-white/90">
          <section>
            <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
            <p className="mb-4">
              Welcome to PoSciDonDAO Foundation ("Company", "we", "our", "us"). These Terms of Service ("Terms") govern
              your access and use of our website located at https://www.poscidon.com (the "Website").
            </p>
            <p>
              By visiting or using our Website, you acknowledge and agree to these Terms. If you disagree with any part,
              please discontinue your use of the Website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">2. Use of Website</h2>
            <p>
              The content provided on this Website is for informational purposes only and should not be considered
              financial, investment, or legal advice. Users are solely responsible for conducting their own due
              diligence.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">3. Intellectual Property</h2>
            <p>
              All content on the Website, including text, graphics, logos, and images, is the property of PoSciDonDAO
              Foundation or its licensors and is protected by applicable intellectual property laws. Unauthorized use or
              reproduction is strictly prohibited.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">4. Third-Party Links</h2>
            <p>
              Our Website may contain links to external websites or resources not controlled by us. We are not
              responsible for the content or privacy practices of these external websites. Users access these links at
              their own risk.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">5. Disclaimer</h2>
            <p>
              The information provided on our Website is offered "as-is" without any warranty of accuracy, completeness,
              or reliability. PoSciDonDAO Foundation disclaims all liability arising from the use or reliance on this
              Website or its contents.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">6. Limitation of Liability</h2>
            <p>
              Under no circumstances will PoSciDonDAO Foundation be liable for any direct, indirect, incidental, or
              consequential damages resulting from your access or use of the Website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">7. Changes to Terms</h2>
            <p>
              We reserve the right to amend or update these Terms at any time. Changes will be posted on this page with
              an updated revision date. Your continued use of the Website signifies acceptance of these changes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">8. Governing Law</h2>
            <p>
              These Terms are governed by and construed in accordance with the laws of the Republic of Panama. Any
              dispute arising out of or related to these Terms shall be submitted to the exclusive jurisdiction of the
              courts of Panama.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">9. Contact Information</h2>
            <p>For any questions regarding these Terms, please contact us at hello@poscidon.com.</p>
          </section>
        </div>
      </div>
    </PageLayout>
  )
}
