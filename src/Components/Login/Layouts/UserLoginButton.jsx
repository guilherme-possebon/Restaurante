import { useState, useEffect, useRef } from 'react';
import { auth } from '../../../services/firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { FaUserAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useSignOut } from 'react-firebase-hooks/auth';
import { GoSignOut } from "react-icons/go";

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
        console.log( "userLoginButton" )
            onAuthStateChanged(auth, (data) => {
                console.log( data )
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


        }, []);


    return (
        <>        
            <div className='UserAndLoginButton'>
                {/* se for "true" o botão de usuario aparece */}
                {isLoged && (<div>
                    <button onClick={tooglePopUp} className="Button"><FaUserAlt/>{auth.currentUser.displayName}</button>
                    <div>
            {auth.currentUser.emailVerified 
                ? <div>
                    <p>Teste Verificado</p>
                </div>

                : <div>
                    <p>Teste Desverificado</p>
                </div>
            }
        </div>
                    </div>
                
                )}

                {/* Se for "False" o botão de login aparece */}
                {!isLoged && (<Link to={'/login'} className="Button">Login</Link>)}
            </div>


                {/* Aqui vai aparecer o PopUp no meio da tela */}
                    {isLoged && showPopUp && (
                <div className='PopUpContainer blur'>
                        <div className='PopUp' ref={popupRef}>
                            <div className='UserInfo'>
                                <p>Usuário: {auth.currentUser.displayName}</p>
                                <p className='email'>E-mail: <input type="email" id="emailuser" defaultValue={auth.currentUser.email} disabled /></p>
                                <p>{auth.currentUser.emailVerified ? "E-mail verificado!" : "E-mail não verificado!"}</p>
                            </div>
                            <div className="Buttons">
                                <button onClick={async () => { const sucess = await signOut();
                                if (sucess) {
                                    window.location.reload();
                                }
                                }} className="Button"><GoSignOut/> Desconectar</button>
                                <button className='Button'>Atualizar usuário</button> {/* TODO Por o sistema de trocar senha + uma pagina especifica pra isso */}
                                <button className='Button'>Verificar E-mail</button>
                            </div>
                             <button onClick={tooglePopUp} className="CloseButton Button">Fechar</button> {/* TODO por um icone de "X" */}
                        </div>
                </div>
                    )}

        
        </>


    )
}