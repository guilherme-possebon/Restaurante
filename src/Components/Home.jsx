import "./Css/Home.css"
// // core version + navigation, pagination modules:
// import Swiper, { Navigation, Pagination } from 'swiper';
// // import Swiper and modules styles
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';

// // init Swiper:
// const swiper = new Swiper('.swiper', {
//   // configure Swiper to use modules
//   modules: [Navigation, Pagination],
// });


import ex1 from '/exemplo1.jpg'
import ex2 from '/exemplo2.jpg'
import ex3 from '/exemplo3.jpg'
import ex4 from '/exemplo4.jpg'


export default function Home() {
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
        <div className="Home">
            <h1><span>Nome do restaurante</span></h1>
           {/* {/* <!-- Slider main container -->
            <div class="swiper">
            {/* <!-- Additional required wrapper --> 
            <div class="swiper-wrapper">
                {/* <!-- Slides -->
                <div class="swiper-slide">Slide 1</div>
                <div class="swiper-slide">Slide 2</div>
                <div class="swiper-slide">Slide 3</div>
            </div>
            {/* <!-- If we need pagination -->
            <div class="swiper-pagination"></div>

            {/* <!-- If we need navigation buttons -->
            <div class="swiper-button-prev"></div>
            <div class="swiper-button-next"></div>

            {/* <!-- If we need scrollbar --> 
             <div class="swiper-scrollbar"></div> 
            </div>*/}
        </div>
    )
}
