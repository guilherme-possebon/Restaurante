import { Link, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react";
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth'
import { auth } from "../../services/firebase";
import { ApButton, GhButton, GoButton } from "./Layouts/Buttons";
import VoltarButton from "./Layouts/VoltarButton";

import "./Scss/LayoutLogin.scss"


export default function Register() {
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    

    const navigate = useNavigate()

    const [createUserWithEmailAndPassword] = useCreateUserWithEmailAndPassword(auth);
    const [updateProfile] = useUpdateProfile(auth);

    useEffect(() => {
        console.log( "Register" )
    })

    const handleSignUp = async (e) => {
        
        e.preventDefault(); // Não deixa o form direcionar para outra pagina
        
        try {
            await createUserWithEmailAndPassword(email, password)
            const success = await updateProfile({ displayName: username });
            if (success) {
                return navigate('/') + alert(`${username} sua conta foi criada com sucesso `);
            }
        }catch(erro) {
            console.error( erro )
        }
        
    } 
    
    return (
        <section className="Register">
            <div className="container">
                <div className="box" style={{height: 510}}>
                    <VoltarButton />
                    <form className="backgroundLoginpage" onSubmit={handleSignUp}>
                        <h2>Criar conta</h2>
                        <div className="inputBox">
                            <input type="text" required maxLength={10} onChange={(e) => setUsername(e.target.value)} />
                            <span>Nome de usuario</span>
                            <i></i>
                        </div>
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
                            <Link to={'/login'}>Entrar na conta</Link>
                        </div>
                        <div>
                            <input type="submit" value={'Criar conta'} />
                        </div>
                    </form>
                </div>
                <p className="Ou">Ou</p>
                <div className="box" style={{height: 510}}>
                <div className="backgroundLoginpage"> 
                        <GhButton />
                        <GoButton />
                        <ApButton />
                    </div>
                </div>
            </div>
        </section>
    )
}