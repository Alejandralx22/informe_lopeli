import { Database } from "lucide-react"
import MarkdownSection from "./mdSection"

export default function Datos() {
  return (
    <MarkdownSection
      title="Datos del caso"
      subtitle="Información detallada sobre el caso BlackCat"
      file="06_datos_lopeli.md"
      Icon={Database}
    />
  )
}