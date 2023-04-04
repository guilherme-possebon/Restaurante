import Image from 'next/image'

import imgLogo from '../../../../public/logo3.webp'
import NavBarCardapio from './_navBarCardapio'

import styles from '../ScssCardapio/Cardapio.module.scss'

export default function HeaderCardapio() {
  return (
    <>
      <Image
        src={imgLogo}
        alt="Logo do restaurante"
        className={styles.imgLogo}
      />
      <h1>Cardápio</h1>
      <NavBarCardapio />
    </>
  )
}
