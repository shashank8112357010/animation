import React from "react";
import Slider from "react-slick";
import img1 from "../../assets/banner/Event-management.png";
import img2 from "../../assets/banner/Branding_Advertisement.png";
import img3 from "../../assets//banner/Brand_creative.jpg";
import img4 from "../../assets/banner/Print_management.png";

const BannerSlider = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    const slides = [img1, img2, img3, img4];

    return (
        <div className="w-full  wow bounceInUp bannerSlider" data-wow-delay="0.1s">
            <Slider {...settings}>
                {slides.map((slide, index) => (
                    <div key={index} className="h-[300px] md:h-[400px] lg:h-[500px] flex justify-center items-center overflow-hidden">
                        <img
                            src={slide}
                            alt={`Slide ${index + 1}`}
                            className="w-full h-full object-cover md:object-contain"
                        />
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default BannerSlider;
