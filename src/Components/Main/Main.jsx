import MySwipper from './Layouts/Swipper'
import Header from './Layouts/Header'
import Footer from './Footer'
import Contact from './Contact'
import About from './About'
import Pedido from './Pedido'
import Reserva from './Reserva'

import logoFooter from '/Logo4.png'
import "./Scss/Main.scss"



export default function MainContent() {
    return (
        <>
            <section>
                <Header />
            </section>
            
            <section>
                <MySwipper />
            </section>

            <section>
                <About />
                <hr className="HrRemovivel" />
                <Contact numero={'+55 (51) 1245-6789'} email={'meurestaurante@gmail.com'} emailHref={'mailto:Emaildeexemplo@gmail.com'} facebook={'MeuRestaurante'} facebookHref={'https://pt-br.facebook.com/Meurestaurante.com.br'} instagram={'MeuRestaurante'} instagramHref={'https://www.instagram.com/MeuRestaurante/'} />
            </section>

                <hr className="HrRemovivel" />

            <section>
                <Pedido />
                <hr className='HrRemovivel' />
                <Reserva />
            </section>

            <section>
                <Footer imglogo={logoFooter} />
            </section>
        </>
    )
}