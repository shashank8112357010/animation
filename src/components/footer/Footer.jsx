import React from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaFacebook, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-gray-300">
            <div className="container mx-auto px-4 py-10">
                <div className="border-t border-gray-600 mb-8"></div>

                <div className="text-center mb-8">
                    <h2 className="text-xl md:text-2xl font-semibold text-white mb-2">
                        What people say about us?
                    </h2>
                </div>

                <nav className="text-center mb-8">
                    <ul className="flex flex-wrap justify-center space-x-4 md:space-x-6 text-sm font-medium">
                        <li><Link to="/" className="hover:text-white">HOME</Link></li>
                        <li><Link to="/about" className="hover:text-white">ABOUT US</Link></li>
                        <li><Link to="/services/eventmanagement" className="hover:text-white">SERVICES</Link></li>
                        <li><Link to="/events" className="hover:text-white">EVENTS</Link></li>
                        <li><Link to="/clients" className="hover:text-white">CLIENTS</Link></li>
                        <li><Link to="/career" className="hover:text-white">CAREER</Link></li>
                        <li><Link to="/contact" className="hover:text-white">CONTACT</Link></li>
                    </ul>
                </nav>

                <div className="flex flex-col md:flex-row md:justify-center md:space-x-8 text-sm text-gray-400 mb-8">
                    <div className="flex items-center space-x-2 mb-4 md:mb-0">
                        <FaMapMarkerAlt />
                        <span className="text-center md:text-left">
                            75, 3rd Floor, BTM Layout Ring Road, Bengaluru, Karnataka 560076
                        </span>
                    </div>
                    <div className="flex items-center space-x-2 mb-4 md:mb-0">
                        <FaPhoneAlt />
                        <span>+91 9845088755, 080 43944755</span>
                    </div>
                    <div className="flex items-center space-x-2">
                        <FaEnvelope />
                        <span>mks@iplatformmedia.com</span>
                    </div>
                </div>

                <div className="flex justify-center space-x-6 mb-4">
                    <Link to="https://www.facebook.com" className="text-gray-400 hover:text-white">
                        <FaFacebook size={20} />
                    </Link>
                    <Link to="https://www.twitter.com" className="text-gray-400 hover:text-white">

                        <FaTwitter size={20} />
                    </Link>
                </div>
            </div>

            <div className="bg-gray-900 text-center py-4">
                <p className="text-sm">iplatformmedia © 2024</p>
            </div>
        </footer>
    );
};

export default Footer;
