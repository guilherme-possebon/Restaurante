import { Link } from 'react-router-dom';


export default function ReservaAndDelivery() {
    return (
        <div>
            
            <section className='Container'  id='pedido' >
                    <div className="CotainerListAll">
                            <div className='ContainerListChildrenAll'>
                        <h1>Pedido</h1>
                                <div className='text'>Faça seu pedido que levaremos até a sua residência</div>
                                <div><Link to="/cardapio"><button  className='btnRD'>Fazer pedido</button></Link></div>
                            </div>
                    </div>
                    <div className='imgEntrega ContainerImgAll'></div>
            </section>

            <hr className="HrRemovivel" />

            <section className='Container espaco'  id="reserva" >
                    <div className='imgReserva ContainerImgAll'></div>
                        <div className="CotainerListAll">
                                <div className='ContainerListChildrenAll' >
                            <h1>Reserva</h1>
                                    <div className='text'>Faça sua reserva assim garantindo o seu lugar com segurança!</div>
                                    <div><button className='btnRD'>Fazer reserva</button></div>
                                </div>
                        </div>
            </section>

            <hr />

        </div>
    )
}