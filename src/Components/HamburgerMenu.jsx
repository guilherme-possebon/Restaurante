import React, { useState, useEffect } from 'react';
import { AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom"
import "./Css/Header.css"

const HamburgerMenu = ({imglogo}) => {
  const [isOpen, setIsOpen] = useState(true);
  const [showButton, setShowButton] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div>
      {showButton && (
        <div className='HamburgerMenu' onClick={() => setIsOpen(!isOpen)}>
          <AiOutlineMenu className='icon' />
        </div>
      )}
      {isOpen && (
          <nav>
              <div>
                  <img src={imglogo} alt="" className="imgLogo" />
              </div>
              <ul className='list'>
                  <li className='itens'><a href="#pedido">Pedido</a></li>
                  <li className='itens'><Link to={'/Restaurante/Cardapio/'} >Cardapio</Link></li> {/* target={"_blank"} */}
                  <li className='itens'><a href="#reserva">Reserva</a></li>
                  <li className='itens'><span className="login">Login</span></li>
                  
              </ul>
          </nav>
      )}
    </div>
  );
}

export default HamburgerMenu