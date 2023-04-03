import { FaInstagram, FaFacebookF } from 'react-icons/fa'

import logoFooter from '../../../../public/Logo4.png'
import Image from 'next/image'

import styles from '../ScssMain/Footer.module.scss'

export default function Footer() {
  return (
    <footer className={styles.Footer}>
      <div className={styles.footerWrapper}>
        <div className={styles.column}>
          <div className={styles.logo}>
            <Image
              src={logoFooter}
              alt="Logo do rodapé"
              className={styles.imgLogo}
            />
          </div>
          <div className={styles.socialMedia}>
            <a href="#" target={'_blank'}>
              <FaInstagram />
            </a>
            <a href="#" target={'_blank'}>
              <FaFacebookF />
            </a>
          </div>
        </div>
        <div>
          <ul className={styles.footerList}>
            <li>Exemplo 1</li>
            <li>Exemplo 2</li>
            <li>Exemplo 3</li>
            <li>Exemplo 4</li>
            <li>Exemplo 5</li>
            <li>Exemplo 6</li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
