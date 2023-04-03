import MySwipper from './Components/LayoutMain/_swipper'
import Header from './Components/LayoutMain/_header'
import Footer from './Components/LayoutMain/_footer'
import Contact, { About } from './Components/LayoutMain/_contactAbout'
import Reserva, { Pedido } from './Components/LayoutMain/_reservapedido'

import styles from './Components/ScssMain/Main.module.scss'
import Head from 'next/head'

export default function MainContent() {
  return (
    <>
      <Head>
        <title>Restaurante</title>
      </Head>
      <Header />
      <MySwipper />
      <section>
        <About />
        <hr className={styles.HrRemovivel} />
        <Contact
          numero={'+55 (51) 1245-6789'}
          email={'meurestaurante@gmail.com'}
          emailHref={'mailto:Emaildeexemplo@gmail.com'}
          facebook={'MeuRestaurante'}
          facebookHref={'https://pt-br.facebook.com/Meurestaurante.com.br'}
          instagram={'MeuRestaurante'}
          instagramHref={'https://www.instagram.com/MeuRestaurante/'}
        />
      </section>
      <hr className={styles.HrRemovivel} />
      <section>
        <Pedido />
        <hr className={styles.HrRemovivel} />
        <Reserva />
      </section>
      <Footer />
    </>
  )
}
