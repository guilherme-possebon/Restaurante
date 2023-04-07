import { useState } from 'react'
import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile
} from 'react-firebase-hooks/auth'
import { useRouter } from 'next/router'
import Head from 'next/head'
import Link from 'next/link'

import { auth } from '../../../services/firebase'
import GoButton, { GhButton } from '../login/Layout/_buttons'
import VoltarButton from '../login/Layout/_voltarButton'

import styles from '../login/Layout/Scss/LayoutLogin.module.scss'

export default function Register() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [username, setUsername] = useState('')
  const router = useRouter()

  const [createUserWithEmailAndPassword] =
    useCreateUserWithEmailAndPassword(auth)
  const [updateProfile] = useUpdateProfile(auth)

  const handleSignUp = async (e: { preventDefault: () => void }) => {
    e.preventDefault() // Não deixa o form direcionar para outra pagina

    try {
      await createUserWithEmailAndPassword(email, password)
      const success = await updateProfile({ displayName: username })
      if (success) {
        return router.push('/')
      }
    } catch (erro) {
      console.error(erro)
    }
  }

  return (
    <>
      <Head>
        <title>Registro</title>
      </Head>
      <section className={styles.Register}>
        <div className={styles.container}>
          <div className={styles.box} style={{ height: 600 }}>
            <VoltarButton />
            <form onSubmit={handleSignUp}>
              <h2>Criar conta</h2>
              <div className={styles.inputBox}>
                <input
                  type="text"
                  required
                  maxLength={10}
                  onChange={(e) => setUsername(e.target.value)}
                />
                <span>Nome de usuario</span>
                <i></i>
              </div>
              <div className={styles.inputBox}>
                <input
                  type="email"
                  required
                  onChange={(e) => setEmail(e.target.value)}
                />
                <span>E-mail</span>
                <i></i>
              </div>
              <div className={styles.inputBox}>
                <input
                  type="password"
                  required
                  onChange={(e) => setPassword(e.target.value)}
                />
                <span>Senha</span>
                <i></i>
              </div>
              <div className={styles.links}>
                <Link href="/login">Entrar na conta</Link>
              </div>
              <div className={styles.loginButtons}>
                <input type="submit" value={'Criar conta'} />
                <p>ou entrar com</p>
                <div className={styles.socialButtons}>
                  <GoButton />
                  <GhButton />
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}
