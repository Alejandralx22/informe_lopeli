import { FileText } from "lucide-react"
import MarkdownSection from "./mdSection"

export default function Resumen() {
  return (
    <MarkdownSection
      title="Resumen ejecutivo"
      subtitle="Caso blackcat"
      file="01_resumen_lopeli.md"
      Icon={FileText}
    />
  )
}