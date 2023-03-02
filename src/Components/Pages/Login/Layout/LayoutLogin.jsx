import "./Scss/LayoutLogin.scss"

import Signin from './Signin'

import { Link } from "react-router-dom"
import { useState } from "react";
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from "../services/firebaseConfig";

export default function LayoutLogin({pageName, Conta, Forgot, linkto}) {
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [createUserWithEmailAndPassword, user, loading, error,] = useCreateUserWithEmailAndPassword(auth);

    function HandleSingIn(e) {
        e.preventDefault();
        createUserWithEmailAndPassword(email, password)
    }

    if (loading) {
        return <p>Carregando...</p>;
    }
    return (
        <section>
            <div className="box">
                <form>
                    <h2>{pageName}</h2>
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
                        <Link to={"#"}>{Forgot}</Link>
                        <Link to={linkto}>{Conta}</Link>
                    </div>
                    <div>
                        <input type="submit" value={pageName} onClick={HandleSingIn} />
                        <Signin />
                    </div>
                </form>
            </div>
        </section>
    )
}