import { FaInstagram, FaFacebookF } from 'react-icons/fa'
import Link from 'next/link'
import Image from 'next/image'

import logoFooter from '../../../../public/logo4.webp'

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
              loading="lazy"
            />
          </div>
          <div className={styles.socialMedia}>
            <Link
              href="https://www.instagram.com/guilhermnhh/"
              target={'_blank'}
            >
              <FaInstagram />
            </Link>
            <Link
              href="https://www.linkedin.com/in/guilherme-possebon-4652a625a/"
              target={'_blank'}
            >
              <FaFacebookF />
            </Link>
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
