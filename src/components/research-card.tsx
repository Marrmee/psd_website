import { Dna, Pill, Bot, TestTube, type LucideProps } from "lucide-react"
import { FC } from "react"

interface ResearchCardProps {
  title: string
  description: string
  icon: "genomic-diagnostics" | "gene-therapy" | "ai-drug-discovery" | "biomarker-development"
}

const icons: Record<ResearchCardProps["icon"], FC<LucideProps>> = {
  "genomic-diagnostics": Dna,
  "gene-therapy": Pill,
  "ai-drug-discovery": Bot,
  "biomarker-development": TestTube,
}

export function ResearchCard({ title, description, icon }: ResearchCardProps) {
  // Define gradient backgrounds based on icon type
  const getGradientClass = () => {
    switch (icon) {
      case "gene-therapy":
        return "bg-gradient-to-br from-[#2E8ED7] to-[#78DFEC]"
      case "biomarker-development":
        return "bg-gradient-to-br from-[#22D6C4] to-[#A1ECD6]"
      case "genomic-diagnostics":
        return "bg-gradient-to-br from-[#0b1dee] to-[#2E8ED7]"
      case "ai-drug-discovery":
        return "bg-gradient-to-br from-[#78DFEC] to-[#22D6C4]"
      default:
        return "bg-gradient-to-br from-[#2E8ED7] to-[#78DFEC]"
    }
  }

  const IconComponent = icons[icon]

  return (
    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/15 transition-colors">
      <div className={`w-12 h-12 ${getGradientClass()} rounded-full flex items-center justify-center mb-4`}>
        <IconComponent className="text-white" width={24} height={24} />
      </div>
      <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
      <p className="text-white/70">{description}</p>
    </div>
  )
}
