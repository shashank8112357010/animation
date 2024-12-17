import React from "react";
import {
    FaCalendar,
    FaWater,
    FaPrint,
} from "react-icons/fa";
import { SiBrandfolder } from "react-icons/si";
import { Link } from "react-router-dom";

const services = [
    {
        icon: <FaCalendar className="text-red-500 text-center text-6xl mb-4" />,
        title: "Event Management",
        description: "We believe that the only limitation to what we can achieve for you is your imagination.",
        delay: "0.1s",
        link: "/services/printmanagement"
    },
    {
        icon: <SiBrandfolder className="text-red-500 text-6xl mb-4" />,
        title: "Branding & Advertisement",
        description: "There is no denying that every successful business is grounded on a recognizable, appealing and unique brand.",
        delay: "0.3s",
        link: "/services/branding"
    },
    {
        icon: <FaWater className="text-red-500 text-6xl mb-4" />,
        title: "Creative & Design",
        description: "Help consumers remember the company and often what brings them back.",
        delay: "0.5s",
        link: "/services/creativeDesign"
    },
    {
        icon: <FaPrint className="text-red-500 text-6xl mb-4" />,
        title: "Print Management",
        description: "We maximize value for our customers by creating the printed output in the most cost effective manner.",
        delay: "0.7s",
        link: "/services/printmanagement"
    },
];

const Services = () => {
    return (
        <div className="bg-white py-12 service">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div
                    className="text-center wow bounceInUp pb-8"
                    data-wow-delay="0.1s"
                >
                    <small className="inline-block font-bold text-gray-800 uppercase bg-white border border-blue-500 rounded-full px-4 py-1 mb-4">
                        Our Services
                    </small>
                    <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
                        We believe that the only limitation to what we can achieve for you is your imagination
                    </h1>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="service-item bg-white rounded-lg shadow-lg p-6 text-center wow bounceInUp animated"
                            style={{ animationDelay: service.delay }}
                            data-wow-delay={service.delay}
                        >
                            <div className="service-content">
                                <div className="service-content-icon">
                                    <span className="text-center">{service.icon}</span>
                                    <h4 className="text-lg font-semibold mb-3">{service.title}</h4>
                                    <p className="text-gray-700 mb-6">{service.description}</p>

                                    <Link
                                        to={service.link}
                                        className="inline-block bg-blue-500 text-white font-bold py-2 px-6 rounded-full hover:bg-blue-600 transition duration-300"
                                    >
                                        Read More
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Services;
