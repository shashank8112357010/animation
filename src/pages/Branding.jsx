import React from 'react'
import img1 from "../assets/banner/Branding_Advertisement.png";
import { CiCirclePlus } from 'react-icons/ci';

const Branding = () => {

    const services = [
        "Print advertising",
        "Electronic media advertising",
        "Outdoor advertising",
        "Public relations a range of specialized services",
        "Newspaper Insertion",
        "Outdoor banners",
        "Flyer Distribution",
        "Mail Box delivery",
        "Notice Board Display",
        "Direct to Home Distribution",
        "Banner Promotion",
        "Stall Promotion",
        "Canopy Style of promotion",
        "Multiplexes branding and Mall branding",
        "Display Advertising through Vehicles, Volvo Buses, Taxis",
        "Exclusive Tailor made advertisements through dedicated Vehicles",
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
                        Branding & Advertisement
                    </h2>
                </div>
                <div className=' text-gray-500 wow bounceInUp' data-wow-delay="0.3s">
                    <p className="px-4 md:px-16">There is no denying that every successful business is grounded on a recognizable, appealing and unique brand. Successful branding and advertising creates a consciousness that many people can easily associate a product or service with. Having a unique and recognizable brand, therefore, is the key to the success of any business endeavor. Not only is branding the company’s symbol, it is also the company’s face to the world. We work with the customers in understanding the brand values and help arrive at the right communication format for our clients ranging from print advertising, electronic media advertising, outdoor advertising and public relations with a range of specialized services, newspaper Insertion, outdoor banners, Flyer Distribution, Mail Box delivery, Notice Board Display, Direct to Home Distribution, Banner Promotion, Stall Promotion, Canopy Style of promotion, multiplexes branding and Mall branding
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
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

export default Branding
