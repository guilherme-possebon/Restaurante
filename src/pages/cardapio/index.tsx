import Image from 'next/image'
import Head from 'next/head'

import Entrada from './Layout/_entrada'
import Porcao from './Layout/_porcao'
import Pratos from './Layout/_pratos'
import Bebidas from './Layout/_bebidas'
import Footer from '../Layout/_footer'
import NavBarCardapio from './Layout/_navBarCardapio'

import styles from './Layout/Scss/Cardapio.module.scss'
import imgLogo from '../../../public/logo3.webp'

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
              loading="lazy"
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
