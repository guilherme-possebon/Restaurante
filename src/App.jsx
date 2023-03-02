import { Route, Routes, BrowserRouter } from "react-router-dom";

import logoFooter from '/Logo4.png'
import Footer from './Components/Pages/Main/Layouts/Footer'

import MainContent from './Components/Pages/Main/index'
import Cardapio from './Components/Pages/Cardapio/Index';
import Login from "./Components/Pages/Login/Pages/Login/index"
import Register from "./Components/Pages/Login/Pages/Register/index"


function App() {


  return (
    <>
          <BrowserRouter>
              <Routes>
                <Route exact path='/' element={<MainContent />}></Route>
                <Route path='/cardapio' element={<Cardapio />}></Route>
                <Route path='/login' element={< Login />}></Route>
                <Route path='/register' element={<Register />}></Route>
              </Routes>
          <Footer imglogo={logoFooter} />
          </BrowserRouter>
        
    </>
  )
}

export default App


