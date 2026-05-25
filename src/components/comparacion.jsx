import { arrowLeftRight } from "lucide-react"
import MarkdownSection from "./mdSection"

export default function Comparacion() {
  return (
    <MarkdownSection
      title="Comparación caso con Chile"
      subtitle="Análisis comparativo entre el caso BlackCat y situaciones similares en Chile"
      file="04_comparacion_lopeli.md"
      Icon={arrowLeftRight}
    />
  )
}