import "./Css/Home.css"

import ex1 from '/exemplo1.jpg'
import ex2 from '/exemplo2.jpg'
import ex3 from '/exemplo3.jpg'
import ex4 from '/exemplo4.jpg'

export default function Home() {
    return (
        <div className="Home">
            <h1><span>Nome do restaurante</span></h1>
            <Slide img={ex1} />
        </div>
    )
}

function Slide({img}) {
    return (
        <div className="divImg"><img src={img} alt="slide" className="img" /></div>
    )
}
