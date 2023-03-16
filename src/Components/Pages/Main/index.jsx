import MySwipper from './Layouts/Swipper'
import Header from './Pages/Header'
import Footer from './Pages/Footer'
import Contact from './Pages/Contact'
import About from './Pages/About'
import Pedido from './Pages/Pedido'
import Reserva from './Pages/Reserva'

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