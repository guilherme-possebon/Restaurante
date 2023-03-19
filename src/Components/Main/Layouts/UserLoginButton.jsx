import { useState, useEffect, useRef } from 'react';
import { auth } from '../../../services/firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { FaUserAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useSignOut } from 'react-firebase-hooks/auth';
import { HiArrowRightOnRectangle } from "react-icons/hi2"; 

import "../Scss/UserLoginButton.scss"


export default function UserLoginButton() {


    const [isLoged, setIsLoged] = useState(false)
    const [showPopUp, setShowPopUp] = useState(false)
    const popupRef = useRef(null)

    const [signOut] = useSignOut(auth);

    const tooglePopUp = () => {
        setShowPopUp(!showPopUp)
        console.log( showPopUp )
    }    

    useEffect(() => {
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
                {isLoged && (<button onClick={tooglePopUp} className="Button"><FaUserAlt/>{auth.currentUser.displayName}</button>)}

                {/* Se for "False" o botão de login aparece */}
                {!isLoged && (<Link to={'/login'} className="Button">Login</Link>)}
            </div>


                {/* Aqui vai aparecer o PopUp no meio da tela */}
                    {isLoged && showPopUp && (
                <div className='PopUpContainer blur'>
                        <div className='PopUp' ref={popupRef}>
                            <div className='UserInfo'>
                                <p className='teste'>Usuário: {auth.currentUser.displayName}</p>
                                <p className='email'>Email: <input type="email" id="emailuser" defaultValue={auth.currentUser.email} disabled /></p>
                            </div>
                            <div className="Buttons">
                                <button onClick={async () => { const sucess = await signOut();
                                if (sucess) {
                                    window.location.reload();
                                }
                                }} className="Button"><HiArrowRightOnRectangle/> Desconectar</button>
                                <button className='Button'>Trocar senha</button>
                                <button className='Button'>Trocar email</button>
                            </div>
                            <button onClick={tooglePopUp} className="CloseButton Button">Close</button>
                        </div>
                </div>
                    )}

        
        </>


    )
}