import Image, { StaticImageData } from 'next/image'
import styles from './Scss/Cardapio.module.scss'

interface CardapioInterface {
  NomeDoPrato: string
  imgPrato: StaticImageData
  Desc: string
  PrecoP: string
  PrecoM: string
  PrecoG: string
}
export default function CardapioItensSize({
  NomeDoPrato,
  imgPrato,
  Desc,
  PrecoP,
  PrecoM,
  PrecoG
}: CardapioInterface) {
  return (
    <li>
      <div className={styles.CDIContainer}>
        <div className={styles.text}>
          <h3>{NomeDoPrato}</h3>
          <p>{Desc}</p>
        </div>
        <div className={styles.infos}>
          <Image src={imgPrato} alt="Imagem do prato" loading="lazy" />
          <p className={styles.preco}>R$ {PrecoP} - P</p>
          <p className={styles.preco}>R$ {PrecoM} - M</p>
          <p className={styles.preco}>R$ {PrecoG} - G</p>
        </div>
      </div>
    </li>
  )
}
