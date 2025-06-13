import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { AnimatedSection } from "@/components/animated-section"

export function FaqSection() {
  return (
    <section id="faq" className="py-20 sm:px-4 md:px-8 bg-white/5 backdrop-blur-sm">
      <div className="container mx-auto">
        <AnimatedSection className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Frequently Asked Questions</h2>
        </AnimatedSection>

        <AnimatedSection delay={0.2} className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="border-white/20 rounded-lg bg-white/10 px-6">
              <AccordionTrigger className="flex w-full justify-between text-left text-lg font-medium py-4 hover:no-underline">
                What is a decentralized autonomous organisation (DAO)?
              </AccordionTrigger>
              <AccordionContent className="text-white/80 pb-4">
                A DAO is an organisation where its members work towards one common goal and that is governed by programs
                run on blockchain technology. These programs are also called smart contracts. Using this technology, the
                organisation can be governed in an objective, transparent, decentralized and borderless way.
                Poscidon's smart contracts create a tamper-proof, verifiable, and trustless proposal and voting
                mechanism.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="border-white/20 rounded-lg bg-white/10 px-6">
              <AccordionTrigger className="flex w-full justify-between text-left text-lg font-medium py-4 hover:no-underline">
                What kind of research does Poscidon fund?
              </AccordionTrigger>
              <AccordionContent className="text-white/80 pb-4">
                Poscidon funds research that focuses on identifying biomarkers that can predict treatment response or
                on developing personalized therapies for life-altering diseases, including but not limited to, cancer,
                Alzheimer's disease and diabetes.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="border-white/20 rounded-lg bg-white/10 px-6">
              <AccordionTrigger className="flex w-full justify-between text-left text-lg font-medium py-4 hover:no-underline">
                How can Poscidon support my research?
              </AccordionTrigger>
              <AccordionContent className="text-white/80 pb-4">
                Besides funding your research project, Poscidon can provide scientific and commercial support for
                your research output. We are a diverse community with a broad range of expertise in the personalized
                medicine field. We will leverage our network in any way we can to support and uplift your inventions.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="border-white/20 rounded-lg bg-white/10 px-6">
              <AccordionTrigger className="flex w-full justify-between text-left text-lg font-medium py-4 hover:no-underline">
                Who is part of the Poscidon community?
              </AccordionTrigger>
              <AccordionContent className="text-white/80 pb-4">
                Our community consists of academic researchers, bioentrepreneurs, physicians, decentralized science
                enthusiasts, biotech investors, and people that care about solving life's most challenging diseases.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </AnimatedSection>
      </div>
    </section>
  )
}
