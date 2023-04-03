import Image from 'next/image'

import imgLogo from '../../../../public/Logo3.png'
import NavBarCardapio from './_navBarCardapio'

import styles from '../ScssCardapio/Cardapio.module.scss'

// TODO Nome "_headerCardapio.tsx"

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
