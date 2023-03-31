import { Link, useNavigate } from "react-router-dom"
import { useState} from "react";
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { onAuthStateChanged } from "firebase/auth"

import { auth } from "../../services/firebase";
import { GhButton, GoButton } from "./Layouts/Buttons";
import VoltarButton from "./Layouts/VoltarButton";

import "./Scss/LayoutLogin.scss"

// TODO Nome da pasta "login.tsx"
// TODO juntar o register com o login para uma utilização menor de imports


export default function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate()

    const [signInWithEmailAndPassword] = useSignInWithEmailAndPassword(auth);

    function HandleSingIn(e) {
        
        e.preventDefault();

        signInWithEmailAndPassword(email, password)

        

        onAuthStateChanged(auth, (data) => {
            if(data != null) {
              return navigate('/')
            }
          })
    }




    return (
        <section className="Login">
            <div className="container">
                <div className="box">
                    <VoltarButton />
                    <form className="backgroundLoginpage" onSubmit={HandleSingIn}>
                        <h2>Login</h2>
                        <div className="inputBox">
                            <input type="email" required onChange={(e) => setEmail(e.target.value)} />
                            <span>E-mail</span>
                            <i></i>
                        </div>
                        <div className="inputBox">
                            <input type="password" required onChange={(e) => setPassword(e.target.value)} />
                            <span>Senha</span>
                            <i></i>
                        </div>
                        <div className="links">
                            {/* TODO  <Link to={'#'}>Esqueceu a senha?</Link> fazer uma pagina só para isso  */}
                            <Link to={'/register'}>Criar conta</Link>
                        </div>
                        <div>
                            <input type="submit" value={'Entrar na conta'} />
                        </div>
                    </form>
                </div>
                <p className="Ou">Ou</p>
                <div className="box">
                    <div className="backgroundLoginpage"> 
                        <GhButton />
                        <GoButton />
                    </div>
                </div>
            </div>
        </section>
    )
}