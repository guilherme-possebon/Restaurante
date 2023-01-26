import "./Css/Home.css"


import ex1 from '/exemplo1.jpg'
import ex2 from '/exemplo2.jpg'
import ex3 from '/exemplo3.jpg'
import ex4 from '/exemplo4.jpg'


export default function Home() {
    return (
        <div className="Home">
            <h1><span>Nome do restaurante</span></h1>
            <div className="img"></div>
        </div>
    )
}