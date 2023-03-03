import { Link } from 'react-router-dom';

import logoHeader from '/Logo3.png'

export default function Header() {
    return (
        <header className="Header">
            <nav>
              <div>
                  <img src={logoHeader} alt="Logo do restaurante" className="imgLogo" />
              </div>
              <ul className='list'>
                  <a href="#pedido"><li className='itens'>Pedido</li></a>
                  <a href="#reserva"><li className='itens'>Reserva</li></a>
                  <Link to={"/Cardapio"}><li className='itens'>Cardapio</li></Link>
                  <Link to={'/login'}><li className='itens'>Login</li></Link>
              </ul>
          </nav>
        </header>
    )
}

