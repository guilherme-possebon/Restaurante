import Entrada from "./Pages/Entrada"
import Porcao from "./Pages/Porcao"
import Pratos from "./Pages/Pratos"
import Bebidas from "./Pages/Bebidas"

import HeaderCardapio from "./HeaderCardapio"
import NavBarCardapio from "./Layout/NavBarCardapio"


export default function Cardapio() {
    return (
        <div className="MainContainer">

                <HeaderCardapio />
                <NavBarCardapio  />
            
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
    )
}