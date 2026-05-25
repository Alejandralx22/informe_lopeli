import Resumen from "./components/Resumen"
import Marco from "./components/marco"
import Delitos from "./components/delitos"
import Comparacion from "./components/comparacion"
import Responsabilidades from "./components/responsabilidades"

function App() {
  return (
    <div className="min-h-screen bg-slate-50 p-10">
      <Resumen />
      <Marco />
      <Delitos />
      <Comparacion />
      <Responsabilidades />
    </div>
  )
}

export default App