import "./Scss/Footer.scss"

import { FaInstagram, FaFacebookF } from "react-icons/fa";

import logoFooter from '/Logo4.png'

// TODO Nome da pasta "_footer.tsx"

export default function Footer() {
    return (
        <footer>
                <div className='footerWrapper'>
                    <div className='column'>
                        <div className='logo'><img src={logoFooter} alt="" className="imgLogo" /></div>
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
        </footer>
    )
}