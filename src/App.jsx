import { useState } from "react"
import CaixaDeResposta from "./components/caixaDeResposta"
import Formulario from "./components/formulario"


function App() {

  const [registrados,setRegistro] = useState([])

  const aoNovoRegistro = (registrado) => {
    setRegistro([...registrados,registrado])
    console.log(registrado)
  }

  return (
    <div>
     <Formulario aosDadosRegistrados={registrado=>aoNovoRegistro(registrado)}/>
     <CaixaDeResposta registro={registrados}/>
    </div>
  )
}

export default App
