


export default function CardapioItens1OP({ NomeDoPrato, imgPrato, Desc, Preco }) {
    return (
        <li>
            <div className='CDIContainer'>
                <div className="text">
                    <h3>{NomeDoPrato}</h3>
                    <p>{Desc}</p>
                </div>
                <div className="img"><img src={imgPrato} alt="Imagem do prato" />
                    <p className='preco'>{Preco}</p>
                </div>
            </div>
        </li>
    )
}