import "../Scss/pages.scss"
import "../../Layout/scss/LayoutLogin.scss"

import Signin from "../../Layout/Signin";

import { Link } from "react-router-dom"
import { useState } from "react";
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from "../../../../../services/firebase";


export default function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [signInWithEmailAndPassword, user, loading, error, ] = useSignInWithEmailAndPassword(auth);

    function HandleSingIn(e) {
        e.preventDefault();
        signInWithEmailAndPassword(email, password)
    }

    if (loading) {
        return <p>Carregando...</p>;
    }
    
    
    return (
        <section className="Register">
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
                        <input type="submit" value={'Criar conta'} onClick={HandleSingIn} />
                        <Signin />
                    </div>
                </form>
            </div>
        </section>
    )
}