import { Route, Routes, BrowserRouter  } from "react-router-dom";

import MainContent from './Components/Pages/Main/index'
import Cardapio from './Components/Pages/Cardapio/Index';
import Login from "./Components/Pages/Login/index"
import Register from "./Components/Pages/Login/Register/Index"


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
          </BrowserRouter>
        
    </>
  )
}

export default App

// TODO npm run build && firebase deploy --only hosting