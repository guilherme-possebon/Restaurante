import "./Scss/ReservaPedido.scss"

// TODO Nome da pasta "_reserva.tsx"
// TODO por em uma mesma pasta o reserva e o pedido só que em function diferentes

export default function Reserva() {
    return (
        <section className='Container espaco'  id="reserva" >
                    <div className='imgReserva ContainerImgAll'></div>
                        <div className="CotainerListAll">
                                <div className='ContainerListChildrenAll' >
                            <h1>Reserva</h1>
                                    <div className='text'>
                                        Faça sua reserva assim garantindo o seu lugar com segurança!
                                    </div>
                                    <div>
                                        <button className='btnRD'>Fazer reserva</button>
                                    </div>
                                </div>
                        </div>
        </section>  
    )
}