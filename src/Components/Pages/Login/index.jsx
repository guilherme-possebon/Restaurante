import "./LayoutLogin.scss"

import { Link, useNavigate } from "react-router-dom"
import { useState} from "react";
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from "../../../services/firebase";
import { onAuthStateChanged } from "firebase/auth"


import VoltarButton from "./Layouts/VoltarButton";

export default function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate()

    const [signInWithEmailAndPassword, error] = useSignInWithEmailAndPassword(auth);

    function HandleSingIn(e) {
        
        e.preventDefault();

        signInWithEmailAndPassword(email, password)

        console.log( error )

        onAuthStateChanged(auth, (data) => {
            if(data != null) {
              return navigate('/')
            }
          })
    }


    return (
        <section className="Login">
            <div className="box">
                <VoltarButton />
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
                        <Link to={'#'}>Esqueceu a senha?</Link>
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