import "./Css/Header.css"
import HamburgerMenu from './HamburgerMenu'
import logoHeader from '/Logo3.png'

export default function Header() {
    return (
        <header className="Header">
            <HamburgerMenu  imglogo={logoHeader} />
        </header>
    )
}