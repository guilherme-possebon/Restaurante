import "./Css/Header.css"

export default function Header({imglogo}) {
    return (
        <header className="Header">
            <nav>
                <ul>
                    <li><img src={imglogo} alt="" className="imgLogo" /></li>
                    <li><span className="login">Login</span></li>
                </ul>
            </nav>
        </header>
    )
}