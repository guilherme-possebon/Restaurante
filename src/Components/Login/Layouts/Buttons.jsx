import { FaApple, FaFacebookF, FaGithub, FaGoogle } from "react-icons/fa";

import '../Scss/Buttons.scss'

export function FcButton() {
    
    return (
        <div className="BrandButtons">
            <button className="Button">
                <FaFacebookF /> Entrar com FaceBook
            </button>
        </div>
    )
}
export function GoButton() {
    
    return (
        <div className="BrandButtons">
            <button className="Button">
                <FaGoogle /> Entrar com Google
            </button>
        </div>
    )
}
export function GhButton() {
    
    return (
        <div className="BrandButtons">
            <button className="Button">
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