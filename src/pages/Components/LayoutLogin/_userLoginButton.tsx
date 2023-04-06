import { useState, useEffect, useRef, MouseEvent } from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import { FaUserAlt } from 'react-icons/fa'
import { useSignOut, useSendEmailVerification } from 'react-firebase-hooks/auth'
import { GoSignOut } from 'react-icons/go'
import { GrClose } from 'react-icons/gr'
import Link from 'next/link'
import { auth } from '../../../../services/firebase'

import styles from '../ScssLogin/UserLoginButton.module.scss'

export default function UserLoginButton() {
  const [isLoged, setIsLoged] = useState(false)
  const [showPopUp, setShowPopUp] = useState(false)
  const popupRef = useRef<HTMLDivElement>(null)

  const [sendEmailVerification] = useSendEmailVerification(auth)

  const [signOut] = useSignOut(auth)

  const tooglePopUp = () => {
    setShowPopUp(!showPopUp)
    console.log(showPopUp)
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (data) => {
      if (data != null) {
        setIsLoged(true)
      }
    })
    function handleClickOutside(event: MouseEvent) {
      if (
        popupRef.current &&
        !popupRef.current.contains(event.target as Node)
      ) {
        setShowPopUp(false)
      }
    }
    document.addEventListener(
      'mousedown',
      handleClickOutside as unknown as EventListener
    )
    document.addEventListener(
      'scroll',
      handleClickOutside as unknown as EventListener
    )
    return () => {
      unsubscribe()
      document.removeEventListener(
        'mousedown',
        handleClickOutside as unknown as EventListener
      )
      document.removeEventListener(
        'scroll',
        handleClickOutside as unknown as EventListener
      )
    }
  }, [])

  return (
    <>
      <div
        className={styles.UserAndLoginButton}
        aria-label="Botão de login ou informações do usuario"
      >
        {/* se for "true" o botão de usuario aparece */}
        {isLoged && (
          <div>
            <button onClick={tooglePopUp} className={styles.Button}>
              <FaUserAlt />
              {auth.currentUser?.displayName}
            </button>
            <>
              {auth.currentUser?.emailVerified ? (
                <></>
              ) : (
                <>
                  <button
                    onClick={async () => {
                      const success = await sendEmailVerification()
                      if (success) {
                        alert('E-mail enviado')
                      }
                    }}
                    className={styles.Button}
                  >
                    Verificar E-mail
                  </button>
                </>
              )}
            </>
          </div>
        )}

        {/* Se for "False" o botão de login aparece */}
        {!isLoged && (
          <Link href="/login" className={styles.Button}>
            Login
          </Link>
        )}
      </div>

      {/* Aqui vai aparecer o PopUp no meio da tela */}
      {isLoged && showPopUp && (
        <div className={`${styles.PopUpContainer} ${styles.blur}`}>
          <div className={styles.PopUp} ref={popupRef}>
            <div className={styles.UserInfo}>
              <p className={styles.overflow}>
                Usuário: {auth.currentUser?.displayName}
              </p>
              <p className={`${styles.email} ${styles.overflow}`}>
                E-mail: {auth.currentUser?.email}
              </p>
            </div>
            <div className={styles.PopUpButtons}>
              <button
                onClick={async () => {
                  const sucess = await signOut()
                  if (sucess) {
                    window.location.reload()
                  }
                }}
                className={styles.Button}
              >
                <GoSignOut /> Desconectar
              </button>
              <button className={styles.Button}>
                Trocar a senha e/ou E-mail
              </button>{' '}
              {/* TODO Por o sistema de trocar senha + uma pagina especifica pra isso */}
            </div>
            <button
              onClick={tooglePopUp}
              className={`${styles.CloseButton} ${styles.Button}`}
            >
              <GrClose />
            </button>
          </div>
        </div>
      )}
    </>
  )
}
