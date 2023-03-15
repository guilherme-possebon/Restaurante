import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../../../../services/firebase';
import { onAuthStateChanged } from 'firebase/auth';


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
                <div>
                    <img src={logoHeader} alt="Logo do restaurante" className="imgLogo" />
                </div>
                <nav>
                    <ul className='list'>
                        <li className='itens'><a href="#pedido">Pedido</a></li>
                        <li className='itens'><a href="#reserva">Reserva</a></li>
                        <li className='itens'><Link to={"/Cardapio"}>Cardapio</Link></li>
                    </ul>
                </nav>
                <div>
                    {isLoged && (
                    <button>{auth.currentUser.displayName}</button>)}
                    {!isLoged && (
                    <Link to={'/login'}><button className='itens'>Login</button></Link>
                    )}
                </div>
        </header>
    )
}

// Fazer com que o "<Link to={'/login'}><li className='itens'>Login</li></Link>" apareça quando o "data" é null (Que não fez o login), mas quando fizer o login, sumir o "<Link to={'/login'}><li className='itens'>Login</li></Link>" e colocar no lugar o "<li>{auth.currentUser.displayName}</li>".