import React from 'react'
import img1 from "../assets/banner/Brand_creative.jpg";
import { CiCirclePlus } from 'react-icons/ci';

const CreativeDesign = () => {

    const services = [
        "Web Design & Development Strategies",
        "Corporate Identity",
        "Copywriting",
        "Logo Design and creative design",
        "Brochures design, business cards & stationary",
        "Outdoor Billboards design",
        "Corporate Calendars & flyers Package Design",
        "E-mail Newsletters",
        "PowerPoint 2000 Presentations",
        "PDF Brochures",
        "Promotional Items",
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
                        Brand Creative & Designing
                    </h2>
                </div>
                <div className=' text-gray-500 wow bounceInUp' data-wow-delay="0.3s">
                    <p>Help consumers remember the company and often what brings them back. Brand design is a creative and pragmatic approach that focuses on the needs of the client in areas such as, marketing communications, environment, product branding, packaging, and website design. Graphic design, color, fonts, and images are your "silent salesperson." People purchase brands, so it is to your advantage to define your business brand e"ectively. We have an expert team of graphic professionals who will work towards giving you the right image. A company's brand identity can be represented in terms of design through a unique logo, or signage. logo is the symbol of the firm’s strategy and vision.
                    </p>
                </div>
                <div className='mt-8 text-gray-500 wow bounceInUp' data-wow-delay="0.5s">
                    <p>The 4 Cs ( Curiosity, Creativity, Commitment & Communication ) depicted in the logo represent the firm’s core philosophy and is then often integrated throughout all the elements of a company's materials such as business cards, stationary, packaging, media advertising, promotions, and more…

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

export default CreativeDesign
