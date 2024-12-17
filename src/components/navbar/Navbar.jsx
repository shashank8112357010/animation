import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoMdArrowDropdown } from "react-icons/io";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../../assets/iplatform_logo.png";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);

    const navItems = [
        { name: "HOME", path: "/" },
        { name: "ABOUT US", path: "/about" },
        {
            name: "SERVICES",
            dropdown: [
                { name: "Events Management", path: "/services/eventmanagement" },
                { name: "Branding & Advertisement", path: "/services/branding" },
                { name: "Creative & Design", path: "/services/creativeDesign" },
                { name: "Print Management", path: "/services/printmanagement" },
            ],
        },
        { name: "CLIENTS", path: "/clients" },
        {
            name: "PORTFOLIO",
            dropdown: [
                { name: "Branding & Advertisement", path: "/services/branding" },
                { name: "Events", path: "/events" },
            ],
        },
        { name: "EVENTS", path: "/events" },
        { name: "CAREER", path: "/career" },
        { name: "CONTACT", path: "/contact" },
    ];

    const handleLinkClick = () => {
        setIsOpen(false);
        setActiveDropdown(null);
    };

    const handleDropdownToggle = (index) => {
        setActiveDropdown((prev) => (prev === index ? null : index));
    };

    return (
        <nav className="bg-white border-b border-gray-200 shadow-sm sticky top-0 z-50">
            <div className="container mx-auto flex justify-between items-center py-3 px-4">
                {/* Logo */}
                <Link to="/" onClick={handleLinkClick}>
                    <div className="flex items-center">
                        <img src={logo} alt="Logo" className="h-16" />
                    </div>
                </Link>

                {/* Hamburger Menu */}
                <div className="lg:hidden">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="text-gray-800 text-2xl focus:outline-none"
                    >
                        {isOpen ? <FaTimes /> : <FaBars />}
                    </button>
                </div>

                {/* Navigation Links */}
                <ul
                    className={`fixed inset-0 z-40 bg-white transform ${isOpen ? "translate-x-0" : "translate-x-full"
                        } transition-transform duration-300 lg:static lg:flex lg:items-center lg:space-x-6 lg:bg-transparent lg:translate-x-0 lg:shadow-none lg:py-0`}
                >
                    {/* Close button for mobile */}
                    <li className="absolute top-4 right-6 lg:hidden">
                        <button
                            onClick={() => setIsOpen(false)}
                            className="text-gray-800 text-2xl focus:outline-none"
                        >
                            <FaTimes />
                        </button>
                    </li>

                    {navItems.map((item, index) => (
                        <li key={index} className="relative group px-4 py-2 lg:p-0">
                            {!item.dropdown ? (
                                <Link
                                    to={item.path}
                                    className="text-gray-800 font-semibold relative block py-1 px-3
                  before:absolute before:right-0 before:top-0 before:h-0.5 before:w-0 before:bg-[#2C599D] before:transition-all before:duration-300 
                  after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0 after:bg-[#EEA223] after:transition-all after:duration-300 
                  hover:before:w-full hover:after:w-full"
                                    onClick={handleLinkClick}
                                >
                                    {item.name}
                                </Link>
                            ) : (
                                <div>
                                    {/* Parent Item */}
                                    <button
                                        onClick={() => handleDropdownToggle(index)}
                                        className="text-gray-800 font-semibold flex items-center relative py-1 lg:hover:before:w-full lg:hover:after:w-full
                                        before:absolute before:right-0 before:top-0 before:h-0.5 before:w-0 before:bg-[#2C599D] before:transition-all before:duration-300 
                                        after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0 after:bg-[#EEA223] after:transition-all after:duration-300"
                                    >
                                        {item.name}
                                        <IoMdArrowDropdown
                                            className={`ml-1 transition-transform ${activeDropdown === index ? "rotate-180" : ""
                                                }`}
                                        />
                                    </button>

                                    {/* Dropdown Menu */}
                                    <ul
                                        className={`pl-6 lg:pl-0 ${activeDropdown === index ? "block" : "hidden"
                                            } lg:absolute lg:left-0 lg:bg-white lg:border lg:border-gray-200 lg:shadow-lg lg:rounded-md lg:space-y-2 lg:py-2 w-full lg:w-56 lg:group-hover:block`}
                                    >
                                        {item.dropdown.map((dropdownItem, dropdownIndex) => (
                                            <li
                                                key={dropdownIndex}
                                                className="transition-all duration-300 transform hover:bg-gray-100 rounded-md relative 
                                                before:absolute before:right-0 before:top-0 before:h-0.5 before:w-0 before:bg-[#2C599D] before:transition-all before:duration-300 
                                                after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0 after:bg-[#EEA223] after:transition-all after:duration-300 
                                                hover:before:w-full hover:after:w-full"
                                            >
                                                <Link
                                                    to={dropdownItem.path}
                                                    className="block px-4 py-2 text-gray-700"
                                                    onClick={handleLinkClick}
                                                >
                                                    {dropdownItem.name}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
