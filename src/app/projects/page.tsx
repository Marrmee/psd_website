import { PageLayout } from "@/components/page-layout"
import { AnimatedSection } from "@/components/animated-section"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Metadata } from "next"
import Head from "next/head"

export const metadata: Metadata = {
  title: "Projects | Poscidon",
  description:
    "Explore the innovative personalized medicine and DeSci research projects funded by Poscidon. See how we are advancing science through decentralized funding.",
  keywords: [
    "Poscidon projects",
    "research projects",
    "funded projects",
    "personalized medicine",
    "DeSci projects",
    "biotech innovation",
  ],
  openGraph: {
    title: "Projects | Poscidon",
    description:
      "Explore the innovative personalized medicine and DeSci research projects funded by Poscidon. See how we are advancing science through decentralized funding.",
    url: "https://poscidon.com/projects",
    siteName: "Poscidon",
    images: [
      {
        url: "https://poscidon.com/og-image-projects.png",
        width: 1200,
        height: 630,
        alt: "Poscidon Projects",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Projects | Poscidon",
    description:
      "Explore the innovative personalized medicine and DeSci research projects funded by Poscidon. See how we are advancing science through decentralized funding.",
    images: ["https://poscidon.com/twitter-image-projects.png"],
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
    "name": "Projects",
    "item": "https://poscidon.com/projects"
  }]
};

const projects = [
  {
    id: 1,
    title: "Rare Compute Foundation",
    description: "This project aims to use next-generation AI-driven BioML agents and a wet-dry feedback loop to fast-track the discovery of novel personalized therapeutics (small molecules, peptides, and binders) for rare diseases.",
    funding: "$115,000",
    readMoreLink: "https://dao.poscidon.com/governance/on-chain/proposals/0",
    tags: ["Artificial Intelligence", "Drug Discovery", "Rare Diseases"],
    gradientColors: {
      from: "#2E8ED7",
      to: "#78DFEC"
    },
    iconPaths: [
      { type: "rect", props: { width: "20", height: "14", x: "2", y: "3", rx: "2" } },
      { type: "line", props: { x1: "2", x2: "22", y1: "7", y2: "7" } },
      { type: "line", props: { x1: "8", x2: "16", y1: "21", y2: "21" } },
      { type: "line", props: { x1: "12", x2: "12", y1: "17", y2: "21" } }
    ]
  },
  {
    id: 2,
    title: "NephroNet",
    description: "The team at Ulster University is building an AI-powered blood test that uses ageing signals (senescence biomarkers) to predict kidney failure before symptoms appear.",
    funding: "$70,000",
    readMoreLink: "https://dao.poscidon.com/governance/on-chain/proposals/5",
    tags: ["Artificial Intelligence", "Kidney Diseases"],
    gradientColors: {
      from: "#A855F7",
      to: "#EC4899"
    },
    iconPaths: [
      { type: "polyline", props: { points: "22 12 18 12 15 21 9 3 6 12 2 12" } }
    ]
  },
  {
    id: 3,
    title: "Motif: AI-powered scientist for biomarker discovery",
    description: "This AI-scientist reduces 6 months of biomarker research to 6 minutes.",
    funding: null,
    readMoreLink: "https://motif.bio/",
    tags: ["Artificial Intelligence"],
    gradientColors: {
      from: "#22D6C4",
      to: "#A1ECD6"
    },
    iconPaths: [
      {
        type: "path",
        props: {
          d: "M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"
        }
      }
    ]
  },
  {
    id: 4,
    title: "Spark: On-chain Intellectual Property Framework",
    description: "Spark is an on-chain idea commitment engine built to outcompete closed innovation ecosystems, unlocking unstoppable collaboration, crypto-powered incentives, and shared upside for every contributor. It helps inventors bring bold ideas to life by connecting them with the people, tools, and capital they need to succeed.",
    funding: null,
    tags: ["Intellectual Property", "On-chain", "Collaboration"],
    gradientColors: {
      from: "#FF8C42",
      to: "#FFB84D"
    },
    iconPaths: [
      { type: "path", props: { d: "M15 2L6 13h4l-1 9 9-12h-4l1-8z", fill: "currentColor", stroke: "none" } }
    ]
  }
]

export default function ProjectsPage() {
  return (
    <PageLayout>
      <Head>
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      </Head>
      <div className="container mx-auto py-16 px-4">
        <AnimatedSection className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Projects</h1>
          <p className="text-xl text-white/80">
            Discover the innovative personalized medicine research projects currently being funded through the Poscidon
            platform.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.2} className="max-w-4xl mx-auto mb-16">
          {projects.map((project, index) => (
            <div key={project.id} className={`bg-white/10 backdrop-blur-sm rounded-xl p-8 ${index < projects.length - 1 ? 'mb-8' : ''}`}>
              <div className="flex flex-col md:flex-row gap-6 items-center">
                <div className={`h-24 w-24 bg-gradient-to-br rounded-full flex items-center justify-center shrink-0`} style={{ background: `linear-gradient(to bottom right, ${project.gradientColors.from}, ${project.gradientColors.to})` }}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-white"
                    aria-label={`${project.title} Icon`}
                  >
                    {project.iconPaths.map((path, pathIndex) => {
                       if (path.type === 'rect') {
                         return <rect key={pathIndex} {...path.props} />
                       } else if (path.type === 'line') {
                         return <line key={pathIndex} {...path.props} />
                       } else if (path.type === 'polyline') {
                         return <polyline key={pathIndex} {...path.props} />
                       } else if (path.type === 'path') {
                         return <path key={pathIndex} {...path.props} />
                       }
                       return null
                     })}
                  </svg>
                </div>
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                    <h2 className="text-2xl font-semibold">{project.title}</h2>
                    {project.funding && (
                      <div className="bg-white/20 rounded-full px-4 py-1 text-sm">Funding: {project.funding}</div>
                    )}
                  </div>
                  <p className="text-white/80 mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="bg-white/10 rounded-full px-3 py-1 text-sm">{tag}</span>
                    ))}
                  </div>
                  {(project as any).readMoreLink && (
                    <div className="mt-4">
                      <Link href={(project as any).readMoreLink} target="_blank" rel="noopener noreferrer">
                        <Button
                          size="sm"
                          className="font-semibold text-white transition-opacity hover:opacity-90"
                          style={{
                            background: `linear-gradient(to right, ${project.gradientColors.from}, ${project.gradientColors.to})`,
                          }}
                        >
                          Read More
                        </Button>
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </AnimatedSection>

        <AnimatedSection delay={0.3} className="text-center">
          <p className="text-xl md:text-2xl font-medium text-white mb-6">
            Have an innovative personalized medicine research project?
          </p>
          <Link href="/apply-for-funding">
            <Button size="lg" className="bg-gradient-to-r from-[#2E8ED7] to-[#22D6C4] text-white hover:shadow-lg hover:shadow-[#78DFEC]/20 transition-all duration-300">
              Apply for Funding
            </Button>
          </Link>
        </AnimatedSection>
      </div>
    </PageLayout>
  )
}
