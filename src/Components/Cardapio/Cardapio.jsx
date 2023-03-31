import Entrada from "./Components/Entrada"
import Porcao from "./Components/Porcao"
import Pratos from "./Components/Pratos"
import Bebidas from "./Components/Bebidas"
import Footer from '../Main/Footer'

import './ScssCardapio/Cardapio.scss'

import imgLogo from '/Logo3.png'
import NavBarCardapio from "./Layout/NavBarCardapio"


function Cardapio() {

  return (
    <>
      <div className="MainContainer">

        <div>

          <header>
            <img src={imgLogo} alt="Logo do restaurante" className='imgLogo' />
            <h1>Cardápio</h1>
            <NavBarCardapio  />
          </header>

          <section id="Entrada">
          <Entrada />
          </section>

          <section id="Pratos">
          <Pratos />
          </section>

          <section id="Porção">
          <Porcao />
          </section>

          <section id="Drinks">
          <Bebidas />
          </section>


        </div>
          <Footer />

      </div>
    </>
  )
}

export default Cardapio
