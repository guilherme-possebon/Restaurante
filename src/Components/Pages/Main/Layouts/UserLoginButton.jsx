import { useState, useEffect, useRef } from 'react';
import { auth } from '../../../../services/firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { FaUserAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { BiBlock } from "react-icons/bi";
 
import "../Scss/UserLoginButton.scss"


export default function UserLoginButton() {


    const [isLoged, setIsLoged] = useState(false)
    const [showPopUp, setShowPopUp] = useState(false)
    const popupRef = useRef(null)

    const tooglePopUp = () => {
        setShowPopUp(!showPopUp)
        console.log( showPopUp )
    }    

    useEffect(() => {
        console.log( "primeiro login button" )
        onAuthStateChanged(auth, (data) => {
            if(data != null) {
                return setIsLoged(true)
            }
        })
        function handleClickOutside(event) {
            if (popupRef.current && !popupRef.current.contains(event.target)) {
                setShowPopUp(false);
            }
          }
      
          document.addEventListener('mousedown', handleClickOutside);
          document.addEventListener('scroll', handleClickOutside);
          return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            document.removeEventListener('scroll', handleClickOutside);
          };
        }, [popupRef]);


    return (
        <>
            <div className='UserAndLoginButton'>
                {/* se for "true" o botão de usuario aparece */}
                {isLoged && (<button onClick={tooglePopUp}><FaUserAlt/>{auth.currentUser.displayName}</button>)}

                {/* Se for "False" o botão de login aparece */}
                {!isLoged && (<Link to={'/login'}>Login</Link>)}
            </div>


                {/* Aqui vai aparecer o PopUp no meio da tela */}
                    {isLoged && showPopUp && (
                <div className='testeb blur'>
                        <div className='PopUp' ref={popupRef}>
                            <div className="DisconectButton">
                                <button><BiBlock/> Desconectar</button>
                                <button><BiBlock/> Deletar Usuario</button>
                            </div>
                            <button onClick={tooglePopUp} className="CloseButton">Close</button>
                        </div>
                </div>
                    )}

        
        </>


    )
}