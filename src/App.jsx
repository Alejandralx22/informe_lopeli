import Resumen from "./components/Resumen"
import Marco from "./components/marco"
import Delitos from "./components/delitos"
import Comparacion from "./components/comparacion"
import Responsabilidades from "./components/responsabilidades"
import Datos from "./components/datos"
import Conclusiones from "./components/conclusiones"
import Datos from "./components/datos"
import Conclusiones from "./components/conclusiones"
import Prompts from "./components/prompts"

function App() {
  return (
    <div className="min-h-screen bg-slate-50 p-10">
      <Resumen />
      <Marco />
      <Delitos />
      <Comparacion />
      <Responsabilidades />
      <Datos />
      <Conclusiones />
      <Prompts />
    </div>
  )
}

export default App