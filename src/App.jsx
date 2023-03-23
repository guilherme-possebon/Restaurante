import { Route, Routes, BrowserRouter  } from "react-router-dom";

import MainContent from './Components/Main/Main'
import Cardapio from './Components/Cardapio/Cardapio';
import Login from "./Components/Login/Login"
import Register from "./Components/Login/Register"


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

// npm run build && firebase deploy --only hosting