
import { Route, Routes, BrowserRouter } from "react-router-dom";

import MainContent from '../Pages/Main/index'
import Cardapio from '../Pages/Cardapio/index';
import Login from "../Pages/Login/Pages/Login/index"
import Register from "../Pages/Login/Pages/Register/index"

function Rotas() {


  return (
    <>
          <BrowserRouter>
              <Routes>
                <Route exact path='/' element={<MainContent />}></Route>
                <Route path='/cardapio' element={<Cardapio />}></Route>
                <Route path='/login' element={< Login />}></Route>
                <Route path='/register' element={<Register />}></Route>
              </Routes>
          </BrowserRouter>
    </>
  )
}

export default Rotas
