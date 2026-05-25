import { Checkline } from "lucide-react"
import MarkdownSection from "./mdSection"

export default function Conclusiones() {
  return (
    <MarkdownSection
      title="Conclusiones"
      subtitle="Reflexiones finales sobre el caso BlackCat y su impacto en la ciberseguridad"
      file="07_conclusiones_lopeli.md"
      Icon={Checkline}
    />
  )
}