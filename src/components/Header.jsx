import { useState } from "react"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const sections = [
    { name: "Resumen", id: "resumen" },
    { name: "Marco Legal", id: "marco" },
    { name: "Delitos", id: "delitos" },
    { name: "Comparación", id: "comparacion" },
    { name: "Responsabilidades", id: "responsabilidades" },
    { name: "Datos", id: "datos" },
    { name: "Conclusiones", id: "conclusiones" },
    { name: "Prompts", id: "prompts" },
  ]

  const handleScroll = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsOpen(false)
    }
  }

  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-white bg-opacity-20 rounded-lg flex items-center justify-center font-bold text-lg">
              LO
            </div>
            <h1 className="text-xl sm:text-2xl font-bold">Informe LOPELI</h1>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-1">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => handleScroll(section.id)}
                className="px-3 py-2 rounded-lg text-sm font-medium hover:bg-white hover:bg-opacity-20 transition-colors"
              >
                {section.name}
              </button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-white hover:bg-opacity-20 transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <nav className="md:hidden mt-4 pb-4 space-y-2">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => handleScroll(section.id)}
                className="w-full text-left px-4 py-2 rounded-lg text-sm font-medium hover:bg-white hover:bg-opacity-20 transition-colors block"
              >
                {section.name}
              </button>
            ))}
          </nav>
        )}
      </div>
    </header>
  )
}
