import './App.css'
import Header from './Components/Header'
import Swipper from './Components/Swipper'
import AboutPlusContact from './Components/AboutPlusContact'
import Footer from './Components/Footer'

function App() {

  return (
    <>

      <section>
        <Header />
      </section>

      <section>
        <Swipper />
      </section>

      <section>
        <AboutPlusContact />
      </section>
      <section>
        <Footer />
      </section>

    </>
  )
}

export default App
