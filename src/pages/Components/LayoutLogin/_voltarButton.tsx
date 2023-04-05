import { FaArrowLeft } from 'react-icons/fa'
import Link from 'next/link'

import styles from '../ScssLogin/LayoutLogin.module.scss'

export default function VoltarButton() {
  return (
    <>
      <Link href="/" className={styles.VoltarLink}>
        <FaArrowLeft />
        Voltar
      </Link>
    </>
  )
}
