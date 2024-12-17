import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoMdArrowDropdown } from "react-icons/io";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../../assets/iplatform_logo.png";


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

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
            path: "/portfolio",
            dropdown: [
                { name: "Branding & Advertisement", path: "/services/branding" },
                { name: "Events", path: "/events" },
            ],
        },
        { name: "EVENTS", path: "/events" },
        { name: "CAREER", path: "/career" },
        { name: "CONTACT", path: "/contact" },
    ];

    return (
        <nav
            id="nav"
            className="bg-white border-b border-gray-200 shadow-sm sticky top-0 z-50"
        >
            <div className="container mx-auto flex justify-between items-center py-3 px-4">
                {/* Logo */}
                <Link to="/">
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
                                    onClick={() => setIsOpen(false)}
                                >
                                    {item.name}
                                </Link>
                            ) : (
                                <div className="group relative">
                                    <Link
                                        to={item.path}
                                        className="text-gray-800 font-semibold flex items-center relative  py-1
                                        before:absolute before:right-0 before:top-0 before:h-0.5 before:w-0 before:bg-[#2C599D] before:transition-all before:duration-300 
                                        after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0 after:bg-[#EEA223] after:transition-all after:duration-300 
                                        hover:before:w-full hover:after:w-full"
                                    >
                                        {item.name}{" "}
                                        <IoMdArrowDropdown className="ml-1 text-gray-500" />
                                    </Link>
                                    {/* Dropdown Menu */}
                                    <ul className="dropdown hidden group-hover:block absolute -left-3 bg-white border border-gray-200 shadow-lg rounded-md space-y-2 py-2 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out w-56">
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
                                                    onClick={() => setIsOpen(false)}
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
