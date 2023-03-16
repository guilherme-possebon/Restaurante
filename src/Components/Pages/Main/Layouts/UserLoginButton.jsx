import { useState, useEffect } from 'react';
import { auth } from '../../../../services/firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { FaUserAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { BiBlock } from "react-icons/bi";
 
import "../Scss/UserLoginButton.scss"


export default function UserLoginButton() {


    const [isLoged, setIsLoged] = useState(false)
    const [popUpIsOpened, setPopUpIsOpened] = useState(false)

    const handleUserClick = () => {
        setPopUpIsOpened(!popUpIsOpened);
      };
    
    useEffect(() => {
        onAuthStateChanged(auth, (data) => {
        if(data != null) {
            return setIsLoged(true)
        }
        })
    })

    return (
    <div className='UserAndLoginButton'>
                    {isLoged && (
                    <span onClick={handleUserClick}>
                        <FaUserAlt/>
                        <button>{auth.currentUser.displayName}</button>
                    </span>
                            )}
                            <div className='teste'>
                                {isLoged && popUpIsOpened && (
                                <div className="DisconectButton">
                                    <button>
                                        <BiBlock/> Desconectar
                                    </button>
                                </div>
                            )}
                            </div>
    
        {!isLoged && (
        <Link to={'/login'}>Login</Link>
    )}
    </div>

    )
}