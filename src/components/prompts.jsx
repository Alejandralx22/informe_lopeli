import { BookCheck } from "lucide-react"
import MarkdownSection from "./mdSection"

export default function Prompts() {
  return (
    <MarkdownSection
      title="Prompts"
      subtitle="Instrucciones para el análisis del caso BlackCat"
      file="08_prompts_lopeli.md"
      Icon={BookCheck}
    />
  )
}