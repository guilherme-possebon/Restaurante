import MySwipper from './Layouts/Swipper'
import AboutPlusContact from './Layouts/AboutPlusContact'
import ReservaAndDelivery from './Layouts/ReservaAndDelivery'
import Header from './Layouts/Header'

import "./Css/Main.scss"


export default function MainContent() {
    return (
        <>
            <section id='Header'>
                <Header />
            </section>
            
            <section id='Swipper'>
                <MySwipper />
            </section>

            <section id='AboutPlusContact'>
                <AboutPlusContact numero={'+55 (51) 1245-6789'} email={'meurestaurante@gmail.com'} emailHref={'mailto:Emaildeexemplo@gmail.com'} facebook={'MeuRestaurante'} facebookHref={'https://pt-br.facebook.com/Meurestaurante.com.br'} instagram={'MeuRestaurante'} instagramHref={'https://www.instagram.com/MeuRestaurante/'} />
            </section>

                <hr className="HrRemovivel" />

            <section className='ReservaAndDelivery'>
                <ReservaAndDelivery />
            </section>
        </>
    )
}