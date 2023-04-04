import Image from 'next/image'

import logoHeader from '../../../../public/Logo3.webp'
import UserLoginButton from '../LayoutLogin/_userLoginButton'

import styles from '../ScssMain/Main.module.scss'
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
