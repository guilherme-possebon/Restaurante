import { FaArrowLeft } from "react-icons/fa";

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
                            <a href="/" className="ButtonIcon HeaderButton itens">
                                <li>
                                    <FaArrowLeft/>Voltar
                                </li>
                            </a>
                        </ul>
                    </div>
                </nav>
            </div>
    )
}