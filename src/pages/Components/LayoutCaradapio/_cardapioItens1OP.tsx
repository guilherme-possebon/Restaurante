import Image, { StaticImageData } from 'next/image'
import styles from '../Scss/Cardapio.module.scss'

interface CardapioInterface {
  NomeDoPrato: string
  imgPrato: StaticImageData
  Desc: string
  Preco: string
}

export default function CardapioItens1OP({
  NomeDoPrato,
  imgPrato,
  Desc,
  Preco
}: CardapioInterface) {
  return (
    <li>
      <div className={styles.CDIContainer}>
        <div className={styles.text}>
          <h3>{NomeDoPrato}</h3>
          <p>{Desc}</p>
        </div>
        <div className={styles.infos}>
          <Image src={imgPrato} alt="Imagem do prato" />
          <p className={styles.preco}>R$ {Preco}</p>
        </div>
      </div>
    </li>
  )
}
