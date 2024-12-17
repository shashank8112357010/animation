import React from 'react'
import img1 from "../assets/banner/Event-management.png";
const Career = () => {
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

            {/* Content Section */}
            <div className="container mx-auto text-center px-4 mt-12 wow bounceInUp"
                data-wow-delay="0.3s"
            >
                <h2 className="text-2xl font-bold text-gray-800 md:text-3xl">
                    Careers
                </h2>

            </div>
        </div>
    )
}

export default Career
