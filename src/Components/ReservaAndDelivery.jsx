export default function ReservaAndDelivery() {
    return (
        <div>
            <div className='Container'>
                    <div className="CotainerListAll">
                            <div className='ContainerListChildrenAll'>
                        <h1>Pedido</h1>
                                <div className='text'>Faça seu pedido que levaremos até a sua residência</div>
                                <div><button  className='btnRD'>Fazer pedido</button></div>
                            </div>
                    </div>
                    <div className='imgEntrega ContainerImgAll'></div>
            </div>

            <hr />

            <div className='Container espaco'>
                    <div className='imgReserva ContainerImgAll'></div>
                        <div className="CotainerListAll">
                                <div className='ContainerListChildrenAll'>
                            <h1>Reserva</h1>
                                    <div className='text'>Faça sua reserva assim garantindo o seu lugar com segurança!</div>
                                    <div><button className='btnRD'>Fazer reserva</button></div>
                                </div>
                        </div>
            </div>

            <hr />

        </div>
    )
}