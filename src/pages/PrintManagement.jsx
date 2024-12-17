import React from 'react'
import img1 from "../assets/banner/print_management.png";
import { CiCirclePlus } from 'react-icons/ci';

const PrintManagement = () => {

    const services = [
        "Digital printing",
        "Ofset printing",
        "Web Ofset printing",
        "Flex printing",
        "Magazine printing",
        "Bags, caps, shirts printing.",

    ];

    return (
        <div className="bg-white pb-12">
            {/* Banner Section */}
            <div className="relative wow bounceInUp"
                data-wow-delay="0.1s"
            >
                <img
                    src={img1}
                    alt="Event Banner"
                    className="w-full h-auto object-cover"
                />

            </div>
            <div className="container mx-auto text-center px-4 mt-12">
                <div
                    className="text-center wow bounceInUp pb-8"
                    data-wow-delay="0.1s"
                >
                    <h2 className="text-2xl font-bold text-gray-800 md:text-3xl">
                        Print Management
                    </h2>
                </div>
                <div className=' text-gray-500 wow bounceInUp' data-wow-delay="0.3s">
                    <p>We maximize value for our customers by creating the printed output in the most cost effective manner while ensuring the finest quality of printing for the chosen formats we deliver value by using the most effective printing option such as Digital, Ofset, Web Ofset and Flex. We also help our customers create and manage unique events that help build their brand with a smaller but very focused and discerning buyer community. Based on your unique needs we can work with you in creating the right brand vehicle for you. Our corporate office is based in Bangalore and today we cover all areas of Karnataka, Tamil Nadu, Hyderabad and Kerala. Through our network of trusted partners we also create a pan India reach for us and help you create a uniform brand campaign across the country.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="relative group bg-white border-2 rounded-lg shadow-lg p-6 text-center overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-blue-600 transform scale-x-0 origin-top transition-transform duration-700 group-hover:scale-x-100"></div>

                            <div className="relative z-10 flex flex-col items-center justify-center h-full transition-all duration-500 group-hover:text-white">
                                <CiCirclePlus className="text-red-600 text-4xl mb-4 group-hover:text-white transition duration-500" />
                                <h2 className="text-lg font-semibold text-gray-700 group-hover:text-white">
                                    {service}
                                </h2>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    )
}

export default PrintManagement
