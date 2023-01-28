import './App.css'
import './MediaQuery.css'
import Header from './Components/Header'
import Swipper from './Components/Swipper'
import AboutPlusContact from './Components/AboutPlusContact'
import ReservaAndDelivery from './Components/ReservaAndDelivery'
import Footer from './Components/Footer'

import logoHeader from '/Logo3.png'
import logoFooter from '/Logo4.png'

function App() {

  return (
    <>

      <section>
        <Header imglogo={logoHeader} />
      </section>

      <section>
        <Swipper />
      </section>

      <section>
        <AboutPlusContact numenro={'+55 (51) 1245-6789'} email={'meurestaurante@gmail.com'} emailHref={'mailto:Emaildeexemplo@gmail.com'} facebook={'MeuRestaurante'} facebookHref={'https://pt-br.facebook.com/Meurestaurante.com.br'} instagram={'MeuRestaurante'} instagramHref={'https://www.instagram.com/MeuRestaurante/'} />
      </section>
        <hr />
      <section>
        <ReservaAndDelivery />
      </section>

      <section>
        <Footer imglogo={logoFooter} />
      </section>

    </>
  )
}

export default App
