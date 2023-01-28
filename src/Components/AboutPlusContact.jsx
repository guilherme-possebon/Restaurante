import "./Css/AboutPlusContact.css"

import { FaPhoneAlt, FaRegEnvelope, FaFacebook, FaInstagram } from "react-icons/fa";

export default function AboutPlusContact({numenro, email, emailHref, facebook, facebookHref, instagram, instagramHref}) {
    return (
        <div>
            <div className="about">
                <div className="containerList">
                    <div className="listAbout">
                        <h2>Sobre</h2>
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

<hr />
                
            <div className="contact">
                <div className="imgContact"></div>
                    <div className="containerList">
                        <div className="listContact">
                            <h2>Contato</h2>
                            <ul>
                                <li><FaPhoneAlt /><span>{numenro}</span></li>
                                <li><FaRegEnvelope /><span><a href={emailHref}>{email}</a></span></li>
                                <li><FaFacebook /><span><a href={facebookHref}>{facebook}</a></span></li>
                                <li><FaInstagram /><span><a href={instagramHref}>{instagram}</a></span></li>
                            </ul>
                        </div>
                    </div>
            </div>
        </div>
    )
}