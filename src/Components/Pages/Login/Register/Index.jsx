
import "../LayoutLogin.scss"



import { Link, useNavigate } from "react-router-dom"
import { useState } from "react";
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from "../../../../services/firebase";

export default function Register() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate()

    const [createUserWithEmailAndPassword] = useCreateUserWithEmailAndPassword(auth);

    function HandleSingUp(e) {
        e.preventDefault();
        createUserWithEmailAndPassword(email, password)
        navigate("/")
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
                        
                    </div>
                </form>
            </div>
        </section>
    )
}