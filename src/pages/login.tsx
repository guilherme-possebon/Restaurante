import { useState } from 'react'
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth'
import { onAuthStateChanged } from 'firebase/auth'
import { useRouter } from 'next/router'
import Head from 'next/head'
import Link from 'next/link'

import { auth } from '../../services/firebase'
import GoButton, { GhButton } from './Components/LayoutLogin/_buttons'
import VoltarButton from './Components/LayoutLogin/_voltarButton'

import styles from './Components/ScssLogin/LayoutLogin.module.scss'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const router = useRouter()

  const [signInWithEmailAndPassword] = useSignInWithEmailAndPassword(auth)

  function HandleSingIn(e: { preventDefault: () => void }) {
    e.preventDefault()

    signInWithEmailAndPassword(email, password)

    onAuthStateChanged(auth, (data) => {
      if (data != null) {
        return router.push('/')
      }
    })
  }

  return (
    <>
      <Head>
        <title>Login</title>
      </Head>
      <section className={styles.Login}>
        <div className={styles.container}>
          <div className={styles.box}>
            <VoltarButton />
            <form onSubmit={HandleSingIn}>
              <h2>Login</h2>
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
                {/* TODO  <a href='#'>Esqueceu a senha?</a> fazer uma pagina só para isso  */}
                <Link href="/register">Criar conta</Link>
              </div>
              <div className={styles.loginButtons}>
                <input type="submit" value={'Entrar na conta'} />
                <p>ou</p>
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
