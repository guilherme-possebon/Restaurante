import './App.css'
import Header from './Components/Header'
import Swipper from './Components/Swipper'
import AboutPlusContact from './Components/AboutPlusContact'

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
    </>
  )
}

export default App
