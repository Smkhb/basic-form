import { useState } from "react"
import CaixaDeResposta from "./components/caixaDeResposta"
import Formulario from "./components/formulario"
import index from './index.css'

function App() {

  const [registrados, setRegistro] = useState([])

  const aoNovoRegistro = (registrado) => {
    setRegistro([...registrados, registrado])
    console.log(registrado)
  }

  return (
    <div>
      <CaixaDeResposta registro={registrados} />
      <Formulario aosDadosRegistrados={registrado => aoNovoRegistro(registrado)} />

    </div>
  )
}

export default App
