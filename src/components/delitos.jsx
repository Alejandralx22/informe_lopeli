import { ShieldBan } from "lucide-react"
import MarkdownSection from "./mdSection"

export default function Delitos() {
  return (
    <MarkdownSection
      title="Delitos informáticos"
      subtitle="Análisis de los delitos relacionados con la tecnología"
      file="03_delitos_lopeli.md"
      Icon={ShieldBan}
    />
  )
}