import { UserLock } from "lucide-react"
import MarkdownSection from "./mdSection"

export default function Responsabilidades() {
  return (
    <MarkdownSection
      title="Responsabilidades"
      subtitle="Análisis de las responsabilidades en el caso blackcat"
      file="05_responsabilidades_lopeli.md"
      Icon={UserLock}
    />
  )
}