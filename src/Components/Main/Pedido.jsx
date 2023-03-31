import { Link } from 'react-router-dom';
import "./Scss/ReservaPedido.scss"

// TODO Nome da pasta "_pedido.tsx"
// TODO por em uma mesma pasta o reserva e o pedido só que em function diferentes


export default function Pedido() {
    return (
        <section className='Container' id='pedido' >
                    <div>
                            <div className='ContainerListChildrenAll'>
                        <h1>Pedido</h1>
                                <div className='text'>
                                    Faça seu pedido que levaremos até a sua residência
                                </div>
                                <div>
                                    <Link to="/Cardapio">
                                        <button  className='btnRD'>Fazer pedido</button>
                                    </Link>
                                </div>
                            </div>
                    </div>
                    <div className='imgEntrega ContainerImgAll'></div>
        </section>
    )
}