import Image from 'next/image'
import Entrada from './Cardapio/Components/_entrada'
import Porcao from './Cardapio/Components/_porcao'
import Pratos from './Cardapio/Components/_pratos'
import Bebidas from './Cardapio/Components/_bebidas'
import Footer from './Main/_footer'

import styles from './Cardapio/Scss/Cardapio.module.scss'

import imgLogo from '../../public/Logo3.png'
import NavBarCardapio from './Cardapio/Layout/_navBarCardapio'
import Head from 'next/head'

function Cardapio() {
  return (
    <>
      <Head>
        <title>Cardapio</title>
      </Head>
      <div className={styles.MainContainer}>
        <div>
          <header>
            <Image
              src={imgLogo}
              alt="Logo do restaurante"
              className={styles.imgLogo}
              width={160}
            />
            <h1>Cardápio</h1>
            <NavBarCardapio />
          </header>

          <section id={styles.Entrada}>
            <Entrada />
          </section>

          <section id={styles.Pratos}>
            <Pratos />
          </section>

          <section id={styles.Porção}>
            <Porcao />
          </section>

          <section id={styles.Drinks}>
            <Bebidas />
          </section>
        </div>
        <Footer />
      </div>
    </>
  )
}

export default Cardapio
