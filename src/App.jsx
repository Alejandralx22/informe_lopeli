import { useState } from "react"
import Resumen from "./components/Resumen"
import Marco from "./components/marco"
import Delitos from "./components/delitos"
import Comparacion from "./components/comparacion"
import Responsabilidades from "./components/responsabilidades"
import Datos from "./components/datos"
import Conclusiones from "./components/conclusiones"
import Prompts from "./components/prompts"
import Header from "./components/Header"
import Footer from "./components/Footer"

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <Header />
      
      <main className="flex-grow">
        <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8 space-y-8">
          <section id="resumen"><Resumen /></section>
          <section id="marco"><Marco /></section>
          <section id="delitos"><Delitos /></section>
          <section id="comparacion"><Comparacion /></section>
          <section id="responsabilidades"><Responsabilidades /></section>
          <section id="datos"><Datos /></section>
          <section id="conclusiones"><Conclusiones /></section>
          <section id="prompts"><Prompts /></section>
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default App