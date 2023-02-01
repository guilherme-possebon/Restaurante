import { Link } from "react-router-dom"
import '../Css/NavBar.css'


export default function NavBarCardapio() {
    return (
        <nav className='opcao'>
            <ul>
                <li>
                    <Link to={"/Restaurante/Cardapio/"} className='itens'  >
                        Entrada
                    </Link>
                </li>
                <li>
                    <Link to={"/Restaurante/Cardapio/pratos"} className='itens' >
                        Pratos
                    </Link>
                </li>
                <li>
                    <Link to={"/Restaurante/Cardapio/porcao"} className='itens' >
                        Porção
                    </Link>
                </li>
                <li>
                    <Link to={"/Restaurante/Cardapio/bebidas"} className='itens' >
                        Bebidas
                    </Link>
                </li>
            </ul>
        </nav>
    )
}