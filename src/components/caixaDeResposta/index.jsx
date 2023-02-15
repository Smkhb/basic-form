import './caixaDeResposta.css'

const CaixaDeResposta = (props) => {
    return (
        props.registro.length > 0
        ?<div className='caixa-respostsa'>
            <p>Parabéns! Sua registro foi concluído com sucesso!</p>
        </div>
        :''
    )
}
export default CaixaDeResposta