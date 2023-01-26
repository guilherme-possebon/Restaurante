import "./Css/AboutPlusContact.css"

export default function AboutPlusContact() {
    return (
        <div className="containerAboutPlusContact">
            <div className="about">
                <div className="text">
                    <h2>Sobre</h2>
                        <div className="listAbout">
                            <ul className="almoco">
                                <li><h3>Horarios de atendimento para almoço:</h3></li>
                                <li><p>De segunda a sábado das 11:00 ás 13:00</p></li>
                            </ul>
                            <ul className="janta">
                                <li><h3>Horarios de atendimento para janta:</h3></li>
                                <li><p>De segunda a sexta das 18:00 ás 21:00</p></li>
                                <li><p>E aos sábados das 19:00 ás 00:00</p></li>
                            </ul>
                        </div>
                </div>
                <div className="imgAbout"></div>
            </div>
            <div className="contact">
                <div className="imgContact"></div>
                    <div className="text">
                        <h2>Contato</h2>
                            <div className="listContact">
                                <ul>
                                    <li><span>+55 (51) 12345-6789</span></li>
                                    <li><span><a href="mailto:emaildecontatodorestaurante@gmail.com">emailcontato@gmail.com</a></span></li>
                                    <li><span><a href="facebook.gg/facedorestaurante">Facebook do restaurante</a></span></li>
                                    <li><span><a href="instagram.com.br/instadorestaurante">@restaurante</a></span></li>
                                </ul>
                            </div>
                    </div>
            </div>
        </div>
    )
}