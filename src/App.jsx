import './App.css'
import Header from './Components/Header'
import Home from './Components/Home.jsx'
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
