import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../../../../services/firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { FaUserAlt } from 'react-icons/fa';


import logoHeader from '/Logo3.png'

export default function Header() {

    const [isLoged, setIsLoged] = useState(false)
    
    useEffect(() => {
        onAuthStateChanged(auth, (data) => {
        if(data != null) {
            return setIsLoged(true)
        }
        })
    })
  

    return (
        <header className="Header">
               
                    <div className="HeaderContainer">
                        <div className='DivLogo'><img src={logoHeader} alt="Logo do restaurante" className="imgLogo" /></div>
                        <nav>
                            <ul className='list'>
                                <li className='itens'><Link to={"/Cardapio"}>Cardapio</Link></li>
                                <li className='itens'><a href="#pedido">Pedido</a></li>
                                <li className='itens'><a href="#reserva">Reserva</a></li>
                            </ul>
                        </nav>
                        <div className='UserAndLoginButton'>
                            {isLoged && (
                            <span><FaUserAlt/><p>{auth.currentUser.displayName}</p></span>)}
                            {!isLoged && (
                            <Link to={'/login'}>Login</Link>
                            )}
                        </div>
                    </div>
                
        </header>
    )
}

// Fazer com que o "<Link to={'/login'}><li className='itens'>Login</li></Link>" apareça quando o "data" é null (Que não fez o login), mas quando fizer o login, sumir o "<Link to={'/login'}><li className='itens'>Login</li></Link>" e colocar no lugar o "<li>{auth.currentUser.displayName}</li>".