
import "./LayoutLogin.scss"

import { Link, Navigate, redirect, useNavigate } from "react-router-dom"
import { useState } from "react";
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from "../../../services/firebase";


export default function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate()

    const [signInWithEmailAndPassword] = useSignInWithEmailAndPassword(auth);

    function HandleSingIn(e) {
        e.preventDefault();
        signInWithEmailAndPassword(email, password)
        navigate("/")
    }

    
    
    return (
        <section className="Login">
            <div className="box">
                <form>
                    <h2>Login</h2>
                    <div className="inputBox">
                        <input type="email" required="requered" onChange={(e) => setEmail(e.target.value)} />
                        <span>E-mail</span>
                        <i></i>
                    </div>
                    <div className="inputBox">
                        <input type="password" required="requered" onChange={(e) => setPassword(e.target.value)} />
                        <span>Senha</span>
                        <i></i>
                    </div>
                    <div className="links">
                        <Link to={'#'}>Esqueceu a senha ?</Link>
                        <Link to={'/register'}>Criar conta</Link>
                    </div>
                    <div>
                        <input type="submit" value={'Entrar na conta'} onClick={HandleSingIn} />                        
                    </div>
                </form>
            </div>
        </section>
    )
}