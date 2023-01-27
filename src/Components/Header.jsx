import "./Css/Header.css"

export default function Header() {
    return (
        <header className="Header">
            <nav>
                <ul>
                    <li>Logo com nome</li>
                    <li><span className="login">Login</span></li>
                </ul>
            </nav>
        </header>
    )
}