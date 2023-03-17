import { FaPhoneAlt, FaRegEnvelope, FaFacebook, FaInstagram } from "react-icons/fa";
import "../Scss/AboutContact.scss"


export default function Contact({numero, email, emailHref, facebook, facebookHref, instagram, instagramHref}) {
    return (
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
    )
}