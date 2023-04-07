import Image from 'next/image'
import Link from 'next/link'
import styles from './Scss/ReservaPedido.module.scss'

import reservaImg from '../../../public/reserva.webp'
import deliveryImg from '../../../public/delivery.webp'

export function Pedido() {
  return (
    <section className={styles.Container} id="pedido">
      <div>
        <div className={styles.ContainerListChildrenAll}>
          <h1>Pedido</h1>
          <div className={styles.text}>
            Faça seu pedido que levaremos até a sua residência
          </div>
          <>
            <Link href="/cardapio" className={styles.btnRD}>
              Fazer pedido
            </Link>
          </>
        </div>
      </div>
      <Image
        src={deliveryImg}
        alt="Imagem de motos prontas para delivery"
        height={560}
        width={410}
        className={`${styles.ContainerImgAll} ${styles.ImgConfig}`}
        loading="lazy"
      />
    </section>
  )
}
export default function Reserva() {
  return (
    <>
      <section className={`${styles.Container} ${styles.espaco}`} id="reserva">
        <Image
          src={reservaImg}
          alt="Imagens de cadeiras vazias"
          height={560}
          width={410}
          className={`${styles.ContainerImgAll} ${styles.ImgConfig}`}
          loading="lazy"
        />
        <div className={styles.CotainerListAll}>
          <div className={styles.ContainerListChildrenAll}>
            <h1>Reserva</h1>
            <div className={styles.text}>
              Faça sua reserva assim garantindo o seu lugar com segurança!
            </div>
            <div>
              <a href="#" className={styles.btnRD}>
                Fazer reserva
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
