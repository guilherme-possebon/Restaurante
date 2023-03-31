import { useState, useEffect, useRef } from 'react';
import { auth } from '../../../services/firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { FaUserAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useSignOut, useSendEmailVerification  } from 'react-firebase-hooks/auth';
import { GoSignOut } from "react-icons/go";
import { GrClose } from "react-icons/gr";

import "../Scss/UserLoginButton.scss"

// TODO Nome do arquivo "_userInfo.tsx"


export default function UserLoginButton() {


    const [isLoged, setIsLoged] = useState(false)
    const [showPopUp, setShowPopUp] = useState(false)
    const popupRef = useRef(null)

    const [sendEmailVerification] = useSendEmailVerification(auth);

    const [signOut] = useSignOut(auth);

    const tooglePopUp = () => {
        setShowPopUp(!showPopUp)
        console.log( showPopUp )
    }    

    useEffect(() => {
        console.log( "userLoginButton" )
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


        }, []);

    return (
        <>        
            <div className='UserAndLoginButton'>
                {/* se for "true" o botão de usuario aparece */}
                {isLoged && (<div>
                    <button onClick={tooglePopUp} className="Button"><FaUserAlt/>{auth.currentUser.displayName}</button>
                    <div>
            {auth.currentUser.emailVerified 
                ? 

                <div>
                    <p>Teste Verificado</p>
                </div>

                : 

                <>
                    <button onClick={async () => {const success = await sendEmailVerification();
                            if (success) {
                                alert('E-mail enviado');
                            }
                        }}>
                            Verificar E-mail
                        </button>
                </>
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
                                <p className='overflow'>Usuário: {auth.currentUser.displayName}</p>
                                <p className='email overflow'>E-mail: {auth.currentUser.email}</p>
                            </div>
                            <div className="PopUpButtons">
                                <button onClick={async () => { const sucess = await signOut();
                                if (sucess) {
                                    window.location.reload();
                                }
                                }} className="Button"><GoSignOut/> Desconectar</button>
                                <button className='Button'>Trocar a senha e/ou E-mail</button> {/* TODO Por o sistema de trocar senha + uma pagina especifica pra isso */}
                            </div>
                             <button onClick={tooglePopUp} className="CloseButton Button"><GrClose/></button>
                        </div>
                </div>
            )}
        </>
    )
}
