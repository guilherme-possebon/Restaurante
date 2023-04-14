import { FaArrowLeft } from 'react-icons/fa'
import Link from 'next/link'
import styles from './Scss/Cardapio.module.scss'

export default function NavBarCardapio() {
  return (
    <>
      <div className={styles.teste}>
        <Link href="/" className={styles.BackButton}>
          <FaArrowLeft />
          Voltar
        </Link>
      </div>
      <nav className={styles.opcao}>
        <ul>
          <li>
            <a href="#Entrada" className={styles.itens}>
              Entrada
            </a>
          </li>

          <li>
            <a href="#Pratos" className={styles.itens}>
              Pratos
            </a>
          </li>

          <li>
            <a href="#Porção" className={styles.itens}>
              Porção
            </a>
          </li>

          <li>
            <a href="#Drinks" className={styles.itens}>
              Bebidas
            </a>
          </li>
        </ul>
      </nav>
    </>
  )
}
