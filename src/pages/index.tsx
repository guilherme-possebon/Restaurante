import MySwipper from './Layout/_swipper'
import Header from './Layout/_header'
import Footer from './Layout/_footer'
import Contact, { About } from './Layout/_contactAbout'
import Reserva, { Pedido } from './Layout/_reservapedido'

import styles from './Layout/Scss/Main.module.scss'
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
