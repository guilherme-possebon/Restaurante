import { Link } from "react-router-dom"
import './Css/NavBar.css'


export default function NavBar() {
    return (
        <nav className='opcao'>
            <ul>
                <li>
                    <Link to={"/Cardapio/"} className='itens' >
                        Entrada
                    </Link>
                </li>
                <li>
                    <Link to={"/Cardapio/pratos"} className='itens' >
                        Pratos
                    </Link>
                </li>
                <li>
                    <Link to={"/Cardapio/porcao"} className='itens' >
                        Porção
                    </Link>
                </li>
                <li>
                    <Link to={"/Cardapio/bebidas"} className='itens' >
                        Bebidas
                    </Link>
                </li>
            </ul>
        </nav>
    )
}