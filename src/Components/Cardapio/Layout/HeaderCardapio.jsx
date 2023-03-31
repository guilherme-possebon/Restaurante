import imgLogo from '/Logo3.png'
import NavBarCardapio from "./NavBarCardapio"

// TODO Nome "_headerCardapio.tsx"

export default function HeaderCardapio() {
    return (
            <>
                <img src={imgLogo} alt="Logo do restaurante" className='imgLogo' />
                <h1>Cardápio</h1>
                <NavBarCardapio  />
            </>
    )
}

