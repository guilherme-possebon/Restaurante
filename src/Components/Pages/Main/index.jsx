import MySwipper from './Layouts/Swipper'
import AboutPlusContact from './Layouts/AboutPlusContact'
import ReservaAndDelivery from './Layouts/ReservaAndDelivery'
import Header from './Layouts/Header'
import Footer from './Layouts/Footer'
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
                <AboutPlusContact numero={'+55 (51) 1245-6789'} email={'meurestaurante@gmail.com'} emailHref={'mailto:Emaildeexemplo@gmail.com'} facebook={'MeuRestaurante'} facebookHref={'https://pt-br.facebook.com/Meurestaurante.com.br'} instagram={'MeuRestaurante'} instagramHref={'https://www.instagram.com/MeuRestaurante/'} />
            </section>

                <hr className="HrRemovivel" />

            <section>
                <ReservaAndDelivery />
            </section>

            <section>
                <Footer imglogo={logoFooter} />
            </section>
        </>
    )
}