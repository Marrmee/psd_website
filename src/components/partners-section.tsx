"use client";
import { AnimatedSection } from "@/components/animated-section"
import Image from "next/image"

export function PartnersSection() {
  const partners = [
    { name: "Boost VC", logo: "/logo_boostvc.svg", url: "https://www.boost.vc/" },
    { name: "Cyberscope", logo: "/logo_cyberscope.svg", url: "https://www.cyberscope.io/" },
    { name: "Human.tech", logo: "/logo_humantech.svg", url: "https://human.tech/" },
    { name: "AxonDAO", logo: "/logo_axondao.svg", url: "https://axondao.io/" },
    { name: "Lilypad", logo: "/logo_lilypad.svg", url: "https://lilypad.tech/" },
    { name: "QuillAudits", logo: "/logo_quillaudits.svg", url: "https://www.quillaudits.com/" },
    { name: "Rare Compute", logo: "/RCLOGO2.svg", url: "https://www.rarecompute.io/" },
  ];

  return (
    <section className="py-16 sm:px-4 md:px-8 bg-[#010737]/80 backdrop-blur-sm relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute w-full h-full bg-[url('/hexagon-grid.svg')] bg-repeat opacity-5"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-[#78DFEC]/10 blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-48 h-48 rounded-full bg-[#2E8ED7]/10 blur-3xl"></div>
        </div>
      </div>

      <div className="container mx-auto relative z-10 mb-16">
        <AnimatedSection className="text-center mb-16" triggerOnce={true} direction="down" duration={0.5}>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white via-[#78DFEC] to-white">Our Partners</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-[#2E8ED7] to-[#22D6C4] rounded-full mb-8 mx-auto"></div>
          <p className="text-white/80 max-w-2xl mx-auto">
            We collaborate with leading organizations in blockchain, science, and technology to advance personalized medicine research.
          </p>
        </AnimatedSection>
        <AnimatedSection delay={0.2} triggerOnce={true} direction="up" duration={0.5}>
          <div
            className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)] group"
          >
            <ul className="flex items-center justify-center md:justify-start [&_img]:max-w-none animate-infinite-scroll group-hover:paused">
                {partners.map((partner, index) => (
                  <li key={`${partner.name}-${index}`} className="mx-4 sm:mx-8">
                    <Image
                      src={partner.logo}
                      alt={`${partner.name} logo`}
                      width={150}
                      height={50}
                      className="h-8 sm:h-12 w-auto object-contain cursor-pointer"
                      onClick={() => window.open(partner.url, '_blank')}
                    />
                  </li>
                ))}
            </ul>
            <ul className="flex items-center justify-center md:justify-start [&_img]:max-w-none animate-infinite-scroll group-hover:paused" aria-hidden="true">
                {partners.map((partner, index) => (
                  <li key={`${partner.name}-${index}-duplicate`} className="mx-4 sm:mx-8">
                    <Image
                      src={partner.logo}
                      alt={`${partner.name} logo`}
                      width={150}
                      height={50}
                      className="h-8 sm:h-12 w-auto object-contain cursor-pointer"
                      onClick={() => window.open(partner.url, '_blank')}
                    />
                  </li>
                ))}
            </ul>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
} 