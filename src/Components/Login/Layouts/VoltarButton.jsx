import { Link } from "react-router-dom"
import { FaArrowLeft } from "react-icons/fa"

// TODO Nome do arquivo "_backButton.tsx"

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