import { useUpdateEmail } from 'react-firebase-hooks/auth'
import { useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { auth } from '@/../services/firebase'
import VoltarButton from '@/Layouts/LoginAndRegister/_voltarButton'

import styles from '@/Layouts/LoginAndRegister/Scss/LayoutLogin.module.scss'

export default function ChangePassword() {
  const [email, setEmail] = useState('')
  const [updateEmail, updating] = useUpdateEmail(auth)
  const router = useRouter()
  if (updating) {
    console.log('carregando')
  }

  async function UpdateEmail(e: { preventDefault: () => void }) {
    e.preventDefault()

    const success = await updateEmail(email)
    if (success) {
      return router.push('/')
    }
  }

  return (
    <>
      <Head>
        <title>Trocar E-mail</title>
      </Head>
      <section className={styles.Login}>
        <div className={styles.container}>
          <div className={styles.box} style={{ height: 275 }}>
            <VoltarButton />
            <form>
              <h2>Trocar E-mail</h2>
              <div className={styles.inputBox}>
                <input
                  type="email"
                  required
                  onChange={(e) => setEmail(e.target.value)}
                />
                <span>E-mail</span>
                <i></i>
              </div>
              <div className={styles.links}>
                <Link href="/registro">Criar conta</Link>
              </div>
              <div className={styles.loginButtons}>
                <input
                  type="submit"
                  value={'Trocar E-mail'}
                  onClick={UpdateEmail}
                />
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}
