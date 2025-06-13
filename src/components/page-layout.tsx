import type { ReactNode } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

interface PageLayoutProps {
  children: ReactNode
}

export function PageLayout({ children }: PageLayoutProps) {
  return (
    <div className="min-h-screen bg-[#010737] text-white">
      <Header />
      <main className="pt-24">{children}</main>
      <Footer />
    </div>
  )
}
