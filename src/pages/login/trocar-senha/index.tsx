import { useUpdatePassword } from 'react-firebase-hooks/auth'
import { useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { auth } from '@/../services/firebase'
import VoltarButton from '@/Layouts/LoginAndRegister/_voltarButton'

import styles from '@/Layouts/LoginAndRegister/Scss/LayoutLogin.module.scss'

export default function ChangePassword() {
  const [password, setPassword] = useState('')
  const [updatePassword] = useUpdatePassword(auth)
  const router = useRouter()

  async function UpdatePassword(e: { preventDefault: () => void }) {
    e.preventDefault()

    const success = await updatePassword(password)
    if (success) {
      return router.push('/')
    }
  }

  return (
    <>
      <Head>
        <title>Trocar senha</title>
      </Head>
      <section className={styles.Login}>
        <div className={styles.container}>
          <div className={styles.box} style={{ height: 275 }}>
            <VoltarButton />
            <form>
              <h2>Trocar senha</h2>
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
                <Link href="/registro">Criar conta</Link>
              </div>
              <div className={styles.loginButtons}>
                <input
                  type="submit"
                  value={'Trocar senha'}
                  onClick={UpdatePassword}
                />
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}
