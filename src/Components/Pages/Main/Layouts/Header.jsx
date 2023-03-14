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
                  <a href="#pedido"><li className='itens'>Pedido</li></a>
                  <a href="#reserva"><li className='itens'>Reserva</li></a>
                  <Link to={"/Cardapio"}><li className='itens'>Cardapio</li></Link>
                  {isLoged && (
                    <a>
                        <li className='itens'>{auth.currentUser.displayName}</li>
                    </a>
                  )}
                  {!isLoged && (
                    <Link to={'/login'}><li className='itens'>Login</li></Link>
                  )}
              </ul>
          </nav>
        </header>
    )
}

// Fazer com que o "<Link to={'/login'}><li className='itens'>Login</li></Link>" apareça quando o "data" é null (Que não fez o login), mas quando fizer o login, sumir o "<Link to={'/login'}><li className='itens'>Login</li></Link>" e colocar no lugar o "<li>{auth.currentUser.displayName}</li>".