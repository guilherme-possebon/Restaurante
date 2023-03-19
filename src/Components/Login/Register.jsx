import "./LayoutLogin.scss"

import { Link, useNavigate } from "react-router-dom"
import { useState } from "react";
import { useCreateUserWithEmailAndPassword, useUpdateProfile} from 'react-firebase-hooks/auth';
import { auth } from "../../services/firebase";
import VoltarButton from "./VoltarButton";

export default function Register() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    

    const navigate = useNavigate()

    const [createUserWithEmailAndPassword] = useCreateUserWithEmailAndPassword(auth);
    const [updateProfile] = useUpdateProfile(auth);

    const handleSignUp = async (e) => {

        e.preventDefault();

        try {
            await createUserWithEmailAndPassword(email, password)
            const success = await updateProfile({ displayName: username });
              if (success) {
                return navigate('/') + alert(`${username} sua conta foi criada com sucesso`);
              }
        }catch(erro) {
            alert(erro)
        }
        
    } 

    
    return (
        <section className="Register">
            <div className="container">
                <div className="box" style={{height: 510}}>
                    <VoltarButton />
                    <form className="backgroundLoginpage">
                        <h2>Criar conta</h2>
                        <div className="inputBox">
                            <input type="text" required="requered" maxLength={10} onChange={(e) => setUsername(e.target.value)}  value={username} />
                            <span>Nome de usuario</span>
                            <i></i>
                        </div>
                        <div className="inputBox">
                            <input type="email" required="requered" onChange={(e) => setEmail(e.target.value)}  value={email} />
                            <span>E-mail</span>
                            <i></i>
                        </div>
                        <div className="inputBox">
                            <input type="password" required="requered" onChange={(e) => setPassword(e.target.value)} value={password} />
                            <span>Senha</span>
                            <i></i>
                        </div>
                        <div className="links">
                            <Link to={'/login'}>Entrar na conta</Link>
                        </div>
                        <div>
                            <input type="submit" value={'Criar conta'} onClick={handleSignUp} />
                
                        </div>
                    </form>
                </div>
                <div className="box" style={{height: 510}}>
                    <div className="backgroundLoginpage">
                        {/* TODO Fazer os botões em um componente separado e por aqui e estilizar os botões em um scss separado */}
                    </div>
                </div>
            </div>
        </section>
    )
}