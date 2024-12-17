import React from 'react';
import img from '../../assets/banner/Brand_creative.jpg';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';




const Landing = () => {
    return (
        <section className="bg-white py-12">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-12 gap-8">
                    {/* Image Section (5 columns) */}
                    <div
                        className="col-span-12 md:col-span-5 wow bounceInUp"
                        data-wow-delay="0.1s"
                    >
                        <img
                            src={img}
                            className="w-full h-full rounded-lg shadow-md"
                            alt="About Us"
                        />
                    </div>

                    {/* Content Section (7 columns) */}
                    <div className="col-span-12 md:col-span-7 wow bounceInUp"
                        data-wow-delay="0.3s" >
                        <small className="inline-block font-bold text-gray-800 uppercase bg-white border border-blue-500 rounded-full px-4 py-1 mb-4">
                            About Us
                        </small>
                        <h1 className="text-4xl font-extrabold mb-6 text-gray-900">
                            iPlatform Media Technologies Pvt Ltd.
                        </h1>
                        <p className="text-gray-700 mb-6">
                            Platform Media Technologies Pvt Ltd. (iPlatform) is an ISO 9001:2008 certified company, diversified group specializing in Event & Exhibition Management, Branding, Advertising media, Brand creative & design, and Print management as our core domains. A professional board-managed company founded by experts from the Advertisement, Entertainment and Printing industries. We offer a wonderful and unique range of services, personally managed by our in-house team to complete any special occasion. We see opportunity where others might see problem, we take great efforts to understand the uniqueness of our clients.
                        </p>

                        {/* Button */}
                        <Link to='/about'>
                            <button
                                onClick={() => window.location.href = "#"}
                                className="inline-flex items-center bg-blue-500 text-white font-bold py-3 px-6 rounded-full hover:bg-blue-600 transition duration-300"
                            >
                                About Us <FaArrowRight className='ml-3' />
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Landing;
