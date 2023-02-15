import { useState } from 'react'
import Botao from '../botao'
import CampoTexto from '../campoTexto'
import './formulario.css'

const Formulario = (props) => {


    const [nome,setNome] = useState('')
    const [sobrenome,setSobrenome] = useState('')
    const [email,setEmail] = useState('')

    const registrar = (evento) => {
        evento.preventDefault()
        props.aosDadosRegistrados({
            nome,
            sobrenome,
            email
        })
    }
    return(
        <section className='formulario'>
            <form onSubmit={registrar}>
                <h2>Preencha os campos para se registrar</h2>
                <CampoTexto 
                    label='Nome' 
                    placeholder='Digite seu nome' 
                    obrigatorio={true}
                    valor={nome}
                    aoAlterado={valor=>setNome(valor)}
                />
                <CampoTexto 
                    label='Sobrenome' 
                    placeholder='Digite seu Sobrenome' 
                    obrigatorio={true}
                    valor={sobrenome}
                    aoAlterado={valor=>setSobrenome(valor)}
                />
                <CampoTexto 
                    label='Email'
                    placeholder='Digite seu Email' 
                    obrigatorio={true}
                    valor={email}
                    aoAlterado={valor=>setEmail(valor)}
                />
                <Botao/>
            </form>
        </section>
    )
}

export default Formulario