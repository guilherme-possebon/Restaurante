import "./Css/Swipper.css"


import ex1 from '/exemplo1.jpg'
import ex2 from '/exemplo2.jpg'
import ex3 from '/exemplo3.jpg'
import ex4 from '/exemplo4.jpg'

export default function Swipper() {
// const swiper = new Swiper('.swiper', {
//     // Optional parameters
//     direction: 'vertical',
//     loop: true,
    
//     // If we need pagination
//     pagination: {
//         el: '.swiper-pagination',
//     },
    
//     // Navigation arrows
//     navigation: {
//         nextEl: '.swiper-button-next',
//         prevEl: '.swiper-button-prev',
//     },
    
//     // And if we need scrollbar
//     scrollbar: {
//         el: '.swiper-scrollbar',
//     },
//     });
    return (
        <div className="Swipper">
            <div className="img"></div>
        </div>
    )
}