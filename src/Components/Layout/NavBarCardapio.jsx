import { Link } from "react-router-dom"
import { FaArrowLeft } from "react-icons/fa";

export default function NavBarCardapio() {
    return (
        <nav className='opcao'>
            <ul>

                <Link to={"/Restaurante/Cardapio/"} className='itens'  >
                    <li>
                        Entrada
                    </li>
                </Link>

                <Link to={"/Restaurante/Cardapio/pratos"} className='itens' >
                    <li>
                        Pratos
                    </li>
                </Link>

                <Link to={"/Restaurante/Cardapio/porcao"} className='itens' >
                    <li>
                        Porção
                    </li>
                </Link>

                <Link to={"/Restaurante/Cardapio/bebidas"} className='itens' >
                    <li>
                        Bebidas
                    </li>
                </Link>

                <Link to={"/Restaurante/"} className="ButtonIcon HeaderButton itens">
                    <li>
                        <FaArrowLeft/>Voltar
                    </li>
                </Link>
            </ul>
        </nav>
    )
}