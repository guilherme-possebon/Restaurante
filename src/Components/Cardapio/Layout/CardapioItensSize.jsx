

export default function CardapioItensSize({ NomeDoPrato, imgPrato, Desc, PrecoP, PrecoM, PrecoG }) {
    return (
        <li>
            <div className='CDIContainer'>
                <div className="text">
                    <h3>{NomeDoPrato}</h3>
                    <p>{Desc}</p>
                </div>
                <div className="infos">
                    <img src={imgPrato} alt="Imagem do prato" />
                    <p className='preco'>R$ {PrecoP} - P</p>
                    <p className='preco'>R$ {PrecoM} - M</p>
                    <p className='preco'>R$ {PrecoG} - G</p>
                </div>
            </div>
        </li>
    )
}
