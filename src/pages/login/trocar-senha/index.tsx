import { useUpdatePassword } from 'react-firebase-hooks/auth'
import { useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { auth } from '../../../../services/firebase'
import GoButton, { GhButton } from '../Layout/_buttons'
import VoltarButton from '../Layout/_voltarButton'

import styles from '../Layout/Scss/LayoutLogin.module.scss'

export default function ChangePassword() {
  const [password, setPassword] = useState('')
  const [updatePassword, updating] = useUpdatePassword(auth)
  const router = useRouter()
  if (updating) {
    console.log('carregando')
  }

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
          <div className={styles.box}>
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

// export default function Teste() {
//   const [password, setPassword] = useState('')
//   const [updatePassword, updating, error] = useUpdatePassword(auth)

//   if (error) {
//     return (
//       <div>
//         <p>Error: {error.message}</p>
//       </div>
//     )
//   }
//   if (updating) {
//     return <p>Updating...</p>
//   }
//   return (
//     <div className="App">
//       <input
//         type="password"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//       />
//       <button
//         onClick={async () => {
//           const success = await updatePassword(password)
//           if (success) {
//             alert('Updated password')
//           }
//         }}
//       >
//         Update password
//       </button>
//     </div>
//   )
// }
