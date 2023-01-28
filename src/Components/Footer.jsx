import './Css/Footer.css'

import { FaInstagram, FaFacebookF } from "react-icons/fa";

export default function Footer({imglogo}) {
    return (
        <footer>
            <div className='containerFooter'>
                <div className='footerWrapper'>
                    <div className='column'>
                        <div className='logo'><img src={imglogo} alt="" className="imgLogo" /></div>
                        <div className='socialMedia'><FaInstagram/> <FaFacebookF /></div>
                    </div>
                    <div>
                        <ul className='footerList'>
                            <li>Exemplo 1</li>
                            <li>Exemplo 2</li>
                            <li>Exemplo 3</li>
                            <li>Exemplo 4</li>
                            <li>Exemplo 5</li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}