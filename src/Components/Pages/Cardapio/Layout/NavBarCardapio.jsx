import { FaArrowLeft } from "react-icons/fa";
import { Link } from 'react-router-dom';

export default function NavBarCardapio() {
    return (
            <div className="sticky">
                <nav className='opcao'>
                    <div>
                        <ul>
                            <a href="#Entrada" className='itens'  >
                                <li>
                                    Entrada
                                </li>
                            </a>
                            <a href="#Pratos" className='itens' >
                                <li>
                                    Pratos
                                </li>
                            </a>
                            <a href="#Porção" className='itens' >
                                <li>
                                    Porção
                                </li>
                            </a>
                            <a href="#Drinks" className='itens' >
                                <li>
                                    Bebidas
                                </li>
                            </a>
                            <Link to="/" className="ButtonIcon HeaderButton itens">
                                <li>
                                    <FaArrowLeft/>Voltar
                                </li>
                            </Link>
                        </ul>
                    </div>
                </nav>
            </div>
    )
}