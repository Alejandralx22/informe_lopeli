import React, { useEffect, useState } from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

export default function MarkdownSection({ title, subtitle, file, Icon }) {
  const [content, setContent] = useState('')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  useEffect(() => {
    let active = true
    async function load() {
      setLoading(true)
      setError('')
      try {
        const resp = await fetch(`/docs_lopeli/${file}`)
        if (!resp.ok) throw new Error(`Error ${resp.status}`)
        const text = await resp.text()
        if (active) setContent(text)
      } catch (err) {
        if (active) setError('No se pudo cargar')
      } finally {
        if (active) setLoading(false)
      }
    }
    load()
    return () => {
      active = false
    }
  }, [file])

  return (
    <section className="max-w-4xl mx-auto p-4">
      <div className="p-[2px] rounded-3xl bg-gradient-to-r from-sky-500 via-indigo-500 to-violet-500"/>
            <div className="bg-white rounded-3xl p-6">
        <div className="flex items-center gap-3 mb-5">
          {Icon && <Icon className="h-8 w-8 text-violet-500" />}
          <div>
            <h2 className="text-2xl font-semibold text-slate-900">{title}</h2>
            {subtitle && <p className="text-sm text-slate-500">{subtitle}</p>}
          </div>
        </div>
        <div className="prose max-w-none text-slate-700">
          {loading && <p>Cargando...</p>}
          {error && <p className="text-red-600">{error}</p>}
          {!loading && !error && <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>}
        </div>
      </div>
    </section>
  )
}