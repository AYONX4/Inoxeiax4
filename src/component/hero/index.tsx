import { HeroSection } from "@/component/hero/demo"

function HeroSectionDemo() {
  return (
    <HeroSection
      title="Code soon opensource"
      subtitle={{
        regular: "Your AI Assistant, Visible to you ",
        gradient: "-Invisible to Everyone Else.",
      }}
      description="AI that lives on your screen but stays invisible on video calls. Perfect for coding, demos, or interviews without distractions (or getting caught)."
      ctaText="Download for pc  "
      ctaHref="/download"
      bottomImage={{
        light: "/inoxeia.png",
        dark: "/inoxeia.png",
      }}
      gridOptions={{
        angle: 65,
        opacity: 0.4,
        cellSize: 50,
        lightLineColor: "#4a4a4a",
        darkLineColor: "#2a2a2a",
      }}
    />
  )
}
export { HeroSectionDemo }
