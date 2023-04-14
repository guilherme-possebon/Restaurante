import Image from 'next/image'
import Head from 'next/head'

import Entrada from '@/Layouts/Cardapio/_entrada'
import Porcao from '@/Layouts/Cardapio/_porcao'
import Pratos from '@/Layouts/Cardapio/_pratos'
import Bebidas from '@/Layouts/Cardapio/_bebidas'
import Footer from '@/Layouts/Main/_footer'
import NavBarCardapio from '@/Layouts/Cardapio/_navBarCardapio'

import styles from '@/Layouts/Cardapio/Scss/Cardapio.module.scss'
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
