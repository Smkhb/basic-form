import CaixaDeResposta from '../caixaDeResposta'
import './campoTexto.css'

const CampoTexto = ({ label, placeholder, obrigatorio }) => {
    return (
        <div className='campo-texto'>
            <label>{label}</label>
            <input placeholder={placeholder} required={obrigatorio} />
            <CaixaDeResposta/>
        </div>
    )
}
export default CampoTexto