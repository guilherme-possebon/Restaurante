import { FaApple, FaGithub, FaGoogle } from "react-icons/fa";
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { auth } from "../../../services/firebase";
import { useNavigate } from "react-router-dom"

import '../Scss/Buttons.scss'

export function GoButton() {

    const [signInWithGoogle, user] = useSignInWithGoogle(auth);
    
    const navigate = useNavigate()

    if(user != undefined) {
        setTimeout(() => {
            return navigate('/')
        }, 100);
    }
    
    return (
        <div className="BrandButtons">
            <button className="Button" onClick={() => signInWithGoogle()}>
                <FaGoogle /> Entrar com Google
            </button>
        </div>
    )
}
export function GhButton() {

    const [signInWithGithub, user] = useSignInWithGithub(auth);
    const navigate = useNavigate()

    console.log( user )

    if(user != undefined) {
        setTimeout(() => {
            return navigate('/')
        }, 100);
    }
    
    return (
        <div className="BrandButtons">
            <button className="Button" onClick={() => signInWithGithub()}>
                <FaGithub /> Entrar com GitHub
            </button>
        </div>
    )
}
export function ApButton() {
    
    return (
        <div className="BrandButtons">
            <button className="Button">
                <FaApple /> Entrar com Apple
            </button>
        </div>
    )
}