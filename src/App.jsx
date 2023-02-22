import './Components/Main/Css/Main.css'
import './Components/Cardapio/Css/Cardapio.css'
import Footer from './Components/Main/Footer'
import { Route, Routes, BrowserRouter } from "react-router-dom";

import logoFooter from '/Logo4.png'
import MainContent from './Components/Main/MainContent'
import Cardapio from './Components/Cardapio/Cardapio';

function App() {


  return (
    <>
          <BrowserRouter>
              <Routes>
                <Route exact path='/' element={<MainContent />}></Route>
                <Route path='/cardapio' element={<Cardapio />}></Route>
              </Routes>
          <Footer imglogo={logoFooter} />
          </BrowserRouter>
    </>
  )
}

export default App


