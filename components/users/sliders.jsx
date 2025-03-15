"use client";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function Sliders({ children, slideShow, scroll, play, responsive, infinite }) {
    const settings = {
        dots: true,
        infinite: infinite,
        speed: 500,
        slidesToShow: slideShow,
        slidesToScroll: scroll,
        autoplay: play,
        autoplaySpeed: 3000,
        responsive: responsive,
    };

    return (
        <Slider {...settings}>
          {children}
        </Slider>
    );
}
