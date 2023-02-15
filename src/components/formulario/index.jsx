import Botao from '../botao'
import CampoTexto from '../campoTexto'
import './formulario.css'

const Formulario = () => {
    return(
        <section className='formulario'>
            <form >
                <h2>Preencha os campos para se registrar</h2>
                <CampoTexto label='Nome' placeholder='Digite seu nome' obrigatorio={true}/>
                <CampoTexto label='Sobrenome' placeholder='Digite seu Sobrenome'obrigatorio={true}/>
                <CampoTexto label='Email' placeholder='Digite seu Email' obrigatorio={true}/>
                <Botao/>
            </form>
        </section>
    )
}

export default Formulario