import Image from 'next/image'

import logoHeader from '../../../../public/Logo3.png'
import UserLoginButton from '../../Login/Layouts/_userLoginButton'

import styles from '../Scss/Main.module.scss'
export default function Header() {
  return (
    <header className={styles.Header}>
      <div className={styles.HeaderContainer}>
        <UserLoginButton />
        <div className={styles.DivLogo}>
          <Image
            src={logoHeader}
            alt="Logo do restaurante no cabeçalho"
            className={styles.imgLogo}
            height={17}
            width={160}
          />
        </div>
        <nav>
          <ul className={styles.list}>
            <li className={styles.itens}>
              <a href="/cardapio">Cardapio</a>
            </li>
            <li className={styles.itens}>
              <a href="#pedido">Pedido</a>
            </li>
            <li className={styles.itens}>
              <a href="#reserva">Reserva</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

// Fazer com que o "<Link to={'/login'}><li className='itens'>Login</li></Link>" apareça quando o "data" é null (Que não fez o login), mas quando fizer o login, sumir o "<Link to={'/login'}><li className='itens'>Login</li></Link>" e colocar no lugar o "<li>{auth.currentUser.displayName}</li>".
