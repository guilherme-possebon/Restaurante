import { Link } from "react-router-dom"
import './Css/NavBar.css'


export default function NavBarCardapio() {
    return (
        <nav className='opcao'>
            <ul>
                <li>
                    <Link to={"/"} className='itens' >
                        Entrada
                    </Link>
                </li>
                <li>
                    <Link to={"/pratos"} className='itens' >
                        Pratos
                    </Link>
                </li>
                <li>
                    <Link to={"/porcao"} className='itens' >
                        Porção
                    </Link>
                </li>
                <li>
                    <Link to={"/bebidas"} className='itens' >
                        Bebidas
                    </Link>
                </li>
            </ul>
        </nav>
    )
}