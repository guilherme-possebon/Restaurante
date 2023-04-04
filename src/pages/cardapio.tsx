import Image from 'next/image'
import Entrada from './Components/LayoutCaradapio/_entrada'
import Porcao from './Components/LayoutCaradapio/_porcao'
import Pratos from './Components/LayoutCaradapio/_pratos'
import Bebidas from './Components/LayoutCaradapio/_bebidas'
import Footer from './Components/LayoutMain/_footer'

import styles from './Components/ScssCardapio/Cardapio.module.scss'

import imgLogo from '../../public/Logo3.webp'
import NavBarCardapio from './Components/LayoutCaradapio/_navBarCardapio'
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
