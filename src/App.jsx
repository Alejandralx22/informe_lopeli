import Resumen from "./components/Resumen"
import Marco from "./components/marco"
import Delitos from "./components/delitos"
import Comparacion from "./components/comparacion"

function App() {
  return (
    <div className="min-h-screen bg-slate-50 p-10">
      <Resumen />
      <Marco />
      <Delitos />
      <Comparacion />
    </div>
  )
}

export default App