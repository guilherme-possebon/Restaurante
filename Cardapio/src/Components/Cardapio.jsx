import './Css/Cardapio.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import imgLogo from '/Logo3.png'
import NavBarCardapio from './NavBarCardapio'

import Entrada from './Pages/Entrada'
import Pratos from './Pages/Pratos'
import Porcao from './Pages/Porcao'
import Bebidas from './Pages/Bebidas'

export default function Cardapio() {
    return (
        <div className="MainContainer">
            <img src={imgLogo} alt="Logo do restaurante" className='imgLogo' />
            <h1>Cardápio</h1>
            <Router>
                <NavBarCardapio />
                <Routes>
                    <Route exact path='/' element={<Entrada />}></Route>
                    <Route path='/pratos' element={<Pratos />}></Route>
                    <Route path='/porcao' element={<Porcao />}></Route>
                    <Route path='/bebidas' element={<Bebidas />}></Route>
                </Routes>
            </Router>
        </div>
    )
}