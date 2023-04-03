import { FaArrowLeft } from 'react-icons/fa'

import styles from '../Scss/LayoutLogin.module.scss'

// TODO Nome do arquivo "_backButton.tsx"

export default function VoltarButton() {
  return (
    <>
      <a href="/" className={styles.VoltarLink}>
        <button className={styles.ButtonIcon}>
          <FaArrowLeft />
          Voltar
        </button>
      </a>
    </>
  )
}
