import "../Layout/ScssLayout/SignIn.scss"
import "../Layout/ScssLayout/LayoutLogin.scss"

import Signin from "../Layout/Signin";

import { Link } from "react-router-dom"
import { useState } from "react";
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from "../../../../services/firebase";

export default function Register() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [createUserWithEmailAndPassword, user, loading, error,] = useCreateUserWithEmailAndPassword(auth);

    function HandleSingUp(e) {
        e.preventDefault();
        createUserWithEmailAndPassword(email, password)
    }

    if (loading) {
        return <p>Carregando...</p>;
    }
    
    return (
        <section className="Register">
            <div className="box">
                <form>
                    <h2>Criar conta</h2>
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
                        <Link to={'/login'}>Entrar na conta</Link>
                    </div>
                    <div>
                        <input type="submit" value={'Criar conta'} onClick={HandleSingUp} />
                        <Signin />
                    </div>
                </form>
            </div>
        </section>
    )
}