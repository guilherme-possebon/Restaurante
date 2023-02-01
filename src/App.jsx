import './App.css'
import './MediaQuery.css'
import Footer from './Components/Footer'

import Entrada from './Components/Pages/Entrada'
import Pratos from './Components/Pages/Pratos'
import Porcao from './Components/Pages/Porcao'
import Bebidas from './Components/Pages/Bebidas'

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'


import logoFooter from '/Logo4.png'
import MainContent from './Components/MainContent'

function App() {

  return (
    <>

      <Router>

            <Routes>

                <Route exact path='/Restaurante/' element={<MainContent />}></Route>
                <Route path='/Restaurante/Cardapio/' element={<Entrada />}></Route>
                <Route path='/Restaurante/Cardapio/pratos' element={<Pratos />}></Route>
                <Route path='/Restaurante/Cardapio/porcao' element={<Porcao />}></Route>
                <Route path='/Restaurante/Cardapio/bebidas' element={<Bebidas />}></Route>

            </Routes>

          <Footer imglogo={logoFooter} />
      </Router>

    </>
  )
}

export default App
