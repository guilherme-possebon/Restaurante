import "./Scss/Footer.scss"

import { FaInstagram, FaFacebookF } from "react-icons/fa";

export default function Footer({imglogo}) {
    return (
        <footer>
            <div className='containerFooter'>
                <div className='footerWrapper'>
                    <div className='column'>
                        <div className='logo'><img src={imglogo} alt="" className="imgLogo" /></div>
                        <div className='socialMedia'>
                            <a href="#" target={"_blank"}><FaInstagram/></a> 
                            <a href="#" target={"_blank"}><FaFacebookF /></a>
                        </div>
                    </div>
                    <div>
                        <ul className='footerList'>
                            <li>Exemplo 1</li>
                            <li>Exemplo 2</li>
                            <li>Exemplo 3</li>
                            <li>Exemplo 4</li>
                            <li>Exemplo 5</li>
                            <li>Exemplo 6</li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}