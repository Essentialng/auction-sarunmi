"use client";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function Sliders({children, slideShow, margin, scroll, play, responsive}){

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: slideShow,
        slideMargin: margin,
        slidesToScroll: scroll,
        autoplay: play,
        autoplaySpeed: 3000,
        responsive: responsive
      };

    return(
        <Slider {...settings}>
          {children}
        </Slider>
    )
}