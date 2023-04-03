import Image from 'next/image'
import styles from '../ScssMain/ReservaPedido.module.scss'

import reservaImg from '../../../../public/reserva.jpg'
import deliverymg from '../../../../public/delivery.jpg'

export default function Reserva() {
  return (
    <>
      <section className={`${styles.Container} ${styles.espaco}`} id="reserva">
        <Image
          src={reservaImg}
          alt="Logo do restaurante no cabeçalho"
          height={560}
          width={410}
        />
        <div className={styles.CotainerListAll}>
          <div className={styles.ContainerListChildrenAll}>
            <h1>Reserva</h1>
            <div className={styles.text}>
              Faça sua reserva assim garantindo o seu lugar com segurança!
            </div>
            <div>
              <button className={styles.btnRD}>Fazer reserva</button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export function Pedido() {
  return (
    <section className={styles.Container} id="pedido">
      <div>
        <div className={styles.ContainerListChildrenAll}>
          <h1>Pedido</h1>
          <div className={styles.text}>
            Faça seu pedido que levaremos até a sua residência
          </div>
          <div>
            <a href="/cardapio">
              <button className={styles.btnRD}>Fazer pedido</button>
            </a>
          </div>
        </div>
      </div>
      {/* <div className={`${styles.imgEntrega} ${styles.ContainerImgAll}`}></div> */}
      <Image
        src={deliverymg}
        alt="Logo do restaurante no cabeçalho"
        height={560}
        width={410}
      />
    </section>
  )
}
