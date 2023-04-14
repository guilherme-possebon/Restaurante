import MySwipper from '@/Layouts/Main/_swipper'
import Header from '@/Layouts/Main/_header'
import Footer from '@/Layouts/Main/_footer'
import Contact, { About } from '@/Layouts/Main/_contactAbout'
import Reserva, { Pedido } from '@/Layouts/Main/_reservapedido'

import styles from '@/Layouts/Main/Scss/Main.module.scss'
import Head from 'next/head'

export default function MainContent() {
  return (
    <>
      <Head>
        <title>Restaurante</title>
      </Head>
      <Header />
      <MySwipper />
      <section aria-label="Sobre e contato">
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
      <section aria-label="Pedido e reserva">
        <Pedido />
        <hr className={styles.HrRemovivel} />
        <Reserva />
      </section>
      <Footer />
    </>
  )
}
