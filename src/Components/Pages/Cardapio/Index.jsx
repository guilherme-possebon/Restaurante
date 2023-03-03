import Entrada from "./Pages/Entrada"
import Porcao from "./Pages/Porcao"
import Pratos from "./Pages/Pratos"
import Bebidas from "./Pages/Bebidas"
import Footer from '../Main/Layouts/Footer'
import logoFooter from '/Logo4.png'

import './ScssCardapio/Cardapio.scss'

import HeaderCardapio from "./Layout/HeaderCardapio"


function Cardapio() {

  return (
    <>
      <div className="MainContainer">

      <HeaderCardapio />

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

      <section>
      <Footer />
      </section>

      </div>
    </>
  )
}

export default Cardapio
