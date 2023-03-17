import "../Scss/AboutContact.scss"

export default function About() {
    return (
        <div className="Container">
                    <div className="ContainerListChildrenAll">
                        <h2>Sobre</h2>
                        <ul>
                            <li><h3>Horarios de atendimento para almoço:</h3></li>
                            <li><p>De segunda a sábado das 11:00 ás 13:00</p></li>
                        </ul>
                        <ul>
                            <li><h3>Horarios de atendimento para janta:</h3></li>
                            <li><p>De segunda a sexta das 18:00 ás 21:00</p></li>
                            <li><p>E aos sábados das 19:00 ás 00:00</p></li>
                        </ul>
                    </div>
                <div className="ContainerImgAll ImgAboutContact"></div>
        </div>
    )
}