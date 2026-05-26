import React, { useEffect, useState } from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { contentMap } from '../assets/markdownContent'

const colors = {
  resumen: { bg: 'from-blue-500 to-cyan-500', dark: 'from-blue-600 to-cyan-600' },
  marco: { bg: 'from-indigo-500 to-purple-500', dark: 'from-indigo-600 to-purple-600' },
  delitos: { bg: 'from-rose-500 to-pink-500', dark: 'from-rose-600 to-pink-600' },
  comparacion: { bg: 'from-amber-500 to-orange-500', dark: 'from-amber-600 to-orange-600' },
  responsabilidades: { bg: 'from-emerald-500 to-teal-500', dark: 'from-emerald-600 to-teal-600' },
  datos: { bg: 'from-violet-500 to-purple-500', dark: 'from-violet-600 to-purple-600' },
  conclusiones: { bg: 'from-cyan-500 to-blue-500', dark: 'from-cyan-600 to-blue-600' },
  prompts: { bg: 'from-fuchsia-500 to-rose-500', dark: 'from-fuchsia-600 to-rose-600' },
}

export default function MarkdownSection({ title, subtitle, file, Icon }) {
  const [content, setContent] = useState('')
  const [error, setError] = useState('')
  const [isDark, setIsDark] = useState(false)
  
  const colorKey = title.toLowerCase().split(' ')[0]
  const colorTheme = colors[colorKey] || colors.resumen

  useEffect(() => {
    const checkDarkMode = () => {
      setIsDark(document.documentElement.classList.contains('dark'))
    }
    
    checkDarkMode()
    
    const observer = new MutationObserver(checkDarkMode)
    observer.observe(document.documentElement, { attributes: true })
    
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    try {
      const fileContent = contentMap[file]
      if (fileContent) {
        setContent(fileContent)
        setError('')
      } else {
        setError('Archivo no encontrado')
      }
    } catch (err) {
      setError('Error al cargar el contenido')
    }
  }, [file])

  return (
    <section className="w-full">
      <div className={`p-[3px] rounded-2xl bg-gradient-to-r ${colorTheme.bg}`}>
        <div className={`rounded-2xl p-4 sm:p-6 lg:p-8 shadow-xl hover:shadow-2xl transition-all duration-300 ${
          isDark 
            ? 'bg-slate-800 text-slate-100' 
            : 'bg-white text-slate-800'
        }`}>
          <div className="flex items-start gap-3 sm:gap-4 mb-6">
            {Icon && (
              <div className={`p-2 sm:p-3 rounded-lg bg-gradient-to-r ${colorTheme.bg} flex-shrink-0`}>
                <Icon className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
              </div>
            )}
            <div className="flex-1 min-w-0">
              <h2 className={`text-xl sm:text-2xl lg:text-3xl font-bold bg-gradient-to-r ${colorTheme.bg} bg-clip-text text-transparent`}>
                {title}
              </h2>
              {subtitle && (
                <p className={`text-xs sm:text-sm mt-1 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                  {subtitle}
                </p>
              )}
            </div>
          </div>

          <div className="max-w-none">
            {error && <p className="text-red-600 font-semibold">{error}</p>}
            {!error && (
              <div className="space-y-4">
                <ReactMarkdown 
                  remarkPlugins={[remarkGfm]}
                  components={{
                    h1: ({node, ...props}) => <h1 className={`text-xl sm:text-2xl font-bold mt-6 mb-3 ${isDark ? 'text-slate-100' : 'text-slate-800'}`} {...props} />,
                    h2: ({node, ...props}) => <h2 className={`text-lg sm:text-xl font-bold mt-5 mb-2 ${isDark ? 'text-slate-100' : 'text-slate-800'}`} {...props} />,
                    h3: ({node, ...props}) => <h3 className={`text-base sm:text-lg font-semibold mt-4 mb-2 ${isDark ? 'text-slate-200' : 'text-slate-700'}`} {...props} />,
                    p: ({node, ...props}) => <p className={`text-sm sm:text-base leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-700'}`} {...props} />,
                    ul: ({node, ...props}) => <ul className={`list-disc list-inside space-y-2 text-sm sm:text-base ${isDark ? 'text-slate-300' : 'text-slate-700'}`} {...props} />,
                    ol: ({node, ...props}) => <ol className={`list-decimal list-inside space-y-2 text-sm sm:text-base ${isDark ? 'text-slate-300' : 'text-slate-700'}`} {...props} />,
                    li: ({node, ...props}) => <li className={isDark ? 'text-slate-300' : 'text-slate-700'} {...props} />,
                    a: ({node, ...props}) => <a className={`underline ${isDark ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-800'}`} {...props} />,
                  }}
                >
                  {content}
                </ReactMarkdown>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}