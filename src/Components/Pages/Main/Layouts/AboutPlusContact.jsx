import { FaPhoneAlt, FaRegEnvelope, FaFacebook, FaInstagram } from "react-icons/fa";

export default function AboutPlusContact({numero, email, emailHref, facebook, facebookHref, instagram, instagramHref}) {
    return (
        <div>
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

<hr className="HrRemovivel" />
                
            <div className="Container">
                <div className="ContainerImgAll ImgAboutContact"></div>
                    <div>
                        <div className="ContainerListChildrenAll">
                            <h2>Contato</h2>
                            <div className="divListParent">

                                <div>
                                    <span>
                                        <FaPhoneAlt />
                                    </span>
                                    <p>
                                        {numero}
                                    </p>
                                </div>

                                <div>
                                    <a href={emailHref}>
                                        <span>
                                            <FaRegEnvelope />
                                        </span>
                                        <p>
                                            {email}
                                        </p>
                                    </a>
                                </div>

                                <div>
                                    <a href={facebookHref}>
                                        <span>
                                            <FaFacebook />
                                        </span>
                                        <p>
                                            {facebook}
                                        </p>
                                    </a>
                                </div>

                                <div>
                                    <a href={instagramHref}>
                                        <span>
                                            <FaInstagram />
                                        </span>
                                        <p>
                                            {instagram}
                                        </p>
                                    </a>
                                </div>
                                
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    )
}