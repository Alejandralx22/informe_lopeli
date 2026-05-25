import { scale } from "lucide-react"
import MarkdownSection from "./mdSection"

export default function Marco() {
  return (
    <MarkdownSection
      title="Marco normativo y regulatorio"
      subtitle="Normas y regulaciones aplicables al caso blackcat"
      file="02_marco_lopeli.md"
      Icon={scale}
    />
  )
}