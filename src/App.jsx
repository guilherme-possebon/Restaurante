import './App.css'
import Footer from './Components/Footer'

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'


import logoFooter from '/Logo4.png'
import MainContent from './Components/MainContent'
import Cardapio from './Components/Cardapio'

function App() {


  return (
    <>
      <Router>
            <Routes>
                <Route exact path='/' element={<MainContent />}></Route>
                <Route exact path='/Cardapio/' element={<Cardapio />}></Route>
            </Routes>
          <Footer imglogo={logoFooter} />
      </Router>
    </>
  )
}

export default App


