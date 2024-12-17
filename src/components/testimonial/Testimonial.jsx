import React from "react";
import Slider from "react-slick";
import img1 from "../../assets/clients/clients.png";
import img2 from "../../assets/clients/clients2.jpg";
import img3 from "../../assets/clients/clients3.png";
import img4 from "../../assets/clients/clients4.png";
import img5 from "../../assets/clients/clients5.jpg";
import img6 from "../../assets/clients/clients6.jpg";
import img7 from "../../assets/clients/clients7.jpg";
import img8 from "../../assets/clients/clients8.jpg";
import img9 from "../../assets/clients/clients9.jpg";
import img10 from "../../assets/clients/clients10.jpg";

const Testimonial = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };
    const slides = [
        img1,
        img2,
        img3,
        img4,
        img5,
        img6,
        img7,
        img7,
        img8,
        img9,
        img10,
    ];
    return (
        <div className="bg-white py-10 px-6">
            <div
                className="text-center wow bounceInUp pb-8"
                data-wow-delay="0.1s"
            >
                <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
                    What Our Clients Say
                </h1>
            </div>

            <div className="clintsSlide w-full mx-auto px-4 py-8">
                <Slider {...settings}>
                    {slides.map((slide, index) => (
                        <div key={index} className="px-2">
                            <div className="bg-white border-2 border-gray-300 shadow-md rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                                <img
                                    src={slide}
                                    alt={`Slide ${index + 1}`}
                                    className="w-full h-48 object-cover"
                                />
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};


export default Testimonial;
