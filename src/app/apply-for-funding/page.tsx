import { PageLayout } from "@/components/page-layout"
import { ProjectForm } from "@/components/ui/project-form"
import { Metadata } from "next"
import Head from "next/head"

export const metadata: Metadata = {
  title: "Apply for Funding | Poscidon",
  description:
    "Submit your personalized medicine research project for funding consideration through our decentralized platform.",
  keywords: [
    "Apply for funding",
    "Poscidon funding",
    "research funding",
    "biotech funding",
    "personalized medicine",
    "decentralized science",
  ],
  openGraph: {
    title: "Apply for Funding | Poscidon",
    description:
      "Submit your personalized medicine research project for funding consideration through our decentralized platform.",
    url: "https://poscidon.com/apply-for-funding",
    siteName: "Poscidon",
    images: [
      {
        url: "https://poscidon.com/og-image-apply.png",
        width: 1200,
        height: 630,
        alt: "Apply for Funding at Poscidon",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Apply for Funding | Poscidon",
    description:
      "Submit your personalized medicine research project for funding consideration through our decentralized platform.",
    images: ["https://poscidon.com/twitter-image-apply.png"],
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
    "name": "Apply for Funding",
    "item": "https://poscidon.com/apply-for-funding"
  }]
};

export default function ApplyForFundingPage() {
  return (
    <PageLayout>
      <Head>
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      </Head>
      <ProjectForm />
    </PageLayout>
  )
}
