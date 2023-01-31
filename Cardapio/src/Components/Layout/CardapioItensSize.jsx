import '../Css/CardapioOpcoes.css'


export default function CardapioItensSize({ NomeDoPrato, imgPrato, Desc, PrecoP, PrecoM, PrecoG }) {
    return (
        <div>
            <div className='CDIContainer'>
                <div className="text">
                    <h1>{NomeDoPrato}</h1>
                    <p>{Desc}</p>
                </div>
                <div className="img"><img src={imgPrato} alt="Imagem do prato" />
                    <p className='preco'>{PrecoP} - P</p>
                    <p className='preco'>{PrecoM} - M</p>
                    <p className='preco'>{PrecoG} - G</p>
                </div>
            </div>
        </div>
    )
}