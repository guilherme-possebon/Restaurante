


export default function CardapioItens1OP({ NomeDoPrato, imgPrato, Desc, Preco }) {
    return (
        <div className='CDIContainer'>
            <div className="text">
                <h1>{NomeDoPrato}</h1>
                <p>{Desc}</p>
            </div>
            <div className="img"><img src={imgPrato} alt="Imagem do prato" />
                <p className='preco'>{Preco}</p>
            </div>
        </div>
    )
}