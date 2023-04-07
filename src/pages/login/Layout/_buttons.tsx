import { FaGithub, FaGoogle } from 'react-icons/fa'
import {
  useSignInWithGithub,
  useSignInWithGoogle
} from 'react-firebase-hooks/auth'
import { useRouter } from 'next/router'

import { auth } from '../../../../services/firebase'
import styles from './Scss/Buttons.module.scss'

export default function GoButton() {
  const [signInWithGoogle, user] = useSignInWithGoogle(auth)
  const router = useRouter()

  if (user != undefined) {
    setTimeout(() => {
      return router.push('/')
    }, 100)
  }

  return (
    <div className={styles.BrandButtons}>
      <button className={styles.Button} onClick={() => signInWithGoogle()}>
        <FaGoogle /> Entrar com Google
      </button>
    </div>
  )
}

export function GhButton() {
  const [signInWithGithub, user] = useSignInWithGithub(auth)
  const router = useRouter()

  if (user != undefined) {
    setTimeout(() => {
      return router.push('/')
    }, 100)
  }

  return (
    <div className={styles.BrandButtons}>
      <button className={styles.Button} onClick={() => signInWithGithub()}>
        <FaGithub /> Entrar com GitHub
      </button>
    </div>
  )
}
