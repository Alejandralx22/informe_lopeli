import { Heart, Mail, Code } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gradient-to-r from-slate-800 via-slate-900 to-black text-white mt-16">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-indigo-400">Sobre LOPELI</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Informe completo sobre el caso de los sistemas de Change Healthcare, analizando el marco legal, los delitos cometidos, las responsabilidades y los datos relevantes.
            </p>
          </div>

          {/* Secciones */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-indigo-400">Secciones</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li><a href="#resumen" className="hover:text-violet-400 transition-colors">Resumen Ejecutivo</a></li>
              <li><a href="#marco" className="hover:text-violet-400 transition-colors">Marco Legal</a></li>
              <li><a href="#delitos" className="hover:text-violet-400 transition-colors">Delitos</a></li>
              <li><a href="#datos" className="hover:text-violet-400 transition-colors">Datos</a></li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-indigo-400">Contacto</h3>
            <div className="flex flex-col gap-3">
              <a href="https://github.com/Alejandralx22" className="flex items-center gap-2 text-gray-300 hover:text-violet-400 transition-colors text-sm">
                <Code size={16} />
                GitHub
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 pt-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {currentYear} Informe LOPELI. Todos los derechos reservados.
            </p>
            <div className="flex items-center gap-1 text-gray-400 text-sm">
              Hecho con <Heart size={16} className="text-red-500" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
