
import { Route, Routes, BrowserRouter } from "react-router-dom";

import MainContent from '../Pages/Main/index'
import Cardapio from '../Pages/Cardapio/index';

function Rotas() {


  return (
    <>
          <BrowserRouter>
              <Routes>
                <Route exact path='/' element={<MainContent />}></Route>
                <Route path='/cardapio' element={<Cardapio />}></Route>
              </Routes>
          </BrowserRouter>
    </>
  )
}

export default Rotas
