import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


export function Sliders({slideShow, margin, scroll, play, speed}){
    const settings = {
        dots: true,
        infinite: true,
        speed: {speed},
        slidesToShow: {slideShow},
        slideMargin: {margin},
        slidesToScroll: {scroll},
        autoplay: {play},
        autoplaySpeed: 3000,
        
      };
    return(
        settings
    )
}


export const cars = 
            [
                {
                    "image": "/car-one.png",
                    "status": "Live Auction",
                    "type" : "Toyota Camry",
                    "detail" : "This 2018 Toyota Camry has been a joy to drive, offering exceptional reliability .."
                },
                {
                    "image": "/car-two.png",
                    "status": "Live Auction",
                    "type" : "Toyota Camry",
                    "detail" : "This 2018 Toyota Camry has been a joy to drive, offering exceptional reliability .."
                },
                {
                    "image": "/car-three.png",
                    "status": "Live Auction",
                    "type" : "Toyota Camry",
                    "detail" : "This 2018 Toyota Camry has been a joy to drive, offering exceptional reliability .."
                },
                {
                    "image": "/car-four.png",
                    "status": "Upcoming Auction",
                    "type" : "Toyota Camry",
                    "detail" : "This 2018 Toyota Camry has been a joy to drive, offering exceptional reliability .."
                },

            ]


    export const  properties = [

            {
                "image": "/property-one.png",
                "status": "Live Auction",
                "type" : "Toyota Camry",
                "detail" : "This home boasts a spacious living area, a modern kitchen, and a serene ..."
            },
            {
                "image": "/property-two.png",
                "status": "Live Auction",
                "type" : "Toyota Camry",
                "detail" : "This home boasts a spacious living area, a modern kitchen, and a serene ..."
            },
            {
                "image": "/property-three.png",
                "status": "Upcoming Auction",
                "type" : "Toyota Camry",
                "detail" : "This home boasts a spacious living area, a modern kitchen, and a serene ..."
            },
            {
                "image": "/property-four.png",
                "status": "Live Auction",
                "type" : "Toyota Camry",
                "detail" : "This home boasts a spacious living area, a modern kitchen, and a serene ..."
            },
    ]


    export const electronics = [
            {
                "image": "/electronic-one.png",
                "status": "Live Auction",
                "type" : "Toyota Camry",
                "detail" : "This home boasts a spacious living area, a modern kitchen, and a serene ..."
            },
            {
                "image": "/electronic-two.png",
                "status": "Live Auction",
                "type" : "Toyota Camry",
                "detail" : "This home boasts a spacious living area, a modern kitchen, and a serene ..."
            },
            {
                "image": "/eletronic-three.png",
                "status": "Upcoming Auction",
                "type" : "Toyota Camry",
                "detail" : "This home boasts a spacious living area, a modern kitchen, and a serene ..."
            },
            {
                "image": "/eletronic-four.png",
                "status": "Live Auction",
                "type" : "Toyota Camry",
                "detail" : "This home boasts a spacious living area, a modern kitchen, and a serene ..."
            },
    ]

