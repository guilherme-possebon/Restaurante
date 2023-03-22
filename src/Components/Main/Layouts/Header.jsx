import { Link } from 'react-router-dom';

import logoHeader from '/Logo3.png'
import UserLoginButton from '../../Login/Layouts/UserLoginButton';

export default function Header() {


    return (
        <header className="Header">
               
                    <div className="HeaderContainer">
                        <UserLoginButton />
                        <div className='DivLogo'><img src={logoHeader} alt="Logo do restaurante" className="imgLogo" /></div>
                        <nav>
                            <ul className='list'>
                                <li className='itens'><Link to={"/Cardapio"}>Cardapio</Link></li>
                                <li className='itens'><a href="#pedido">Pedido</a></li>
                                <li className='itens'><a href="#reserva">Reserva</a></li>
                            </ul>
                        </nav>
                    </div>
                    
                
        </header>
    )
}

// Fazer com que o "<Link to={'/login'}><li className='itens'>Login</li></Link>" apareça quando o "data" é null (Que não fez o login), mas quando fizer o login, sumir o "<Link to={'/login'}><li className='itens'>Login</li></Link>" e colocar no lugar o "<li>{auth.currentUser.displayName}</li>".