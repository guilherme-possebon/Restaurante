import { Link } from "react-router-dom"
import { FaArrowLeft } from "react-icons/fa"


export default function VoltarButton() {
    
    return (
        <>
        <Link to="/" className="VoltarLink" >
            <button className="ButtonIcon">
                <FaArrowLeft/>Voltar
            </button>
        </Link>
        </>
    )
}