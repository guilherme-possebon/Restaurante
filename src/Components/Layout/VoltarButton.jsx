import { Link } from "react-router-dom"
import '../Css/HeaderCardapio.css'

export default function VoltarButton() {
    return <button className='HeaderButton'><Link to={"/Restaurante/"}>{`<`} Voltar</Link></button>
}