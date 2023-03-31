import { FaArrowLeft } from "react-icons/fa";
import { Link } from 'react-router-dom';

export default function NavBarCardapio() {
    return (
        <div>
            <nav className='opcao'>
                <ul>
                    <li>
                        <a href="#Entrada" className='itens'  >
                            Entrada
                        </a>
                    </li>

                    <li>
                        <a href="#Pratos" className='itens' >
                            Pratos
                        </a>
                    </li>

                    <li>
                        <a href="#Porção" className='itens' >
                            Porção
                        </a>
                    </li>

                    <li>
                        <a href="#Drinks" className='itens' >
                            Bebidas
                        </a>
                    </li>

                    <li>
                        <Link to="/" className="ButtonIcon itens">
                        <FaArrowLeft/>Voltar
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}