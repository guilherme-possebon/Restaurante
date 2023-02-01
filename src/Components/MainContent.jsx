import Swipper from './Swipper'
import AboutPlusContact from './AboutPlusContact'
import ReservaAndDelivery from './ReservaAndDelivery'
import Header from './Header'


export default function MainContent() {
    return (
        <>
            <section className='Header'>
                <Header />
            </section>
            
            <section className='Swipper'>
                <Swipper />
            </section>

            <section className='AboutPlusContact'>
                <AboutPlusContact numero={'+55 (51) 1245-6789'} email={'meurestaurante@gmail.com'} emailHref={'mailto:Emaildeexemplo@gmail.com'} facebook={'MeuRestaurante'} facebookHref={'https://pt-br.facebook.com/Meurestaurante.com.br'} instagram={'MeuRestaurante'} instagramHref={'https://www.instagram.com/MeuRestaurante/'} />
            </section>

                <hr className="HrRemovivel" />

            <section className='ReservaAndDelivery'>
                <ReservaAndDelivery />
            </section>
        </>
    )
}