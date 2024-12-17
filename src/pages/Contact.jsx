import React from "react";

const Contact = () => {
    return (
        <div className="py-12 bg-gray-50">
            <div className="container mx-auto px-4">
                {/* Page Title */}
                <div className="text-center wow bounceInUp pb-8"
                    data-wow-delay="0.1s"
                >
                    <h1 className="text-3xl md:text-4xl font-extrabold text-gray-800">
                        Contact Us For Any Queries!
                    </h1>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                    {/* Left Side: Contact Form */}
                    <div className="bg-white p-6 sm:p-8 border rounded-lg shadow-md wow bounceInUp pb-8"
                        data-wow-delay="0.1s"
                    >
                        <h2 className="text-2xl font-bold mb-6 text-gray-700">Send Message</h2>
                        <form className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {/* Name */}
                            <div className="sm:col-span-1">
                                <label
                                    htmlFor="name"
                                    className="text-sm font-semibold text-gray-600 mb-1 block"
                                >
                                    Name <span className="italic text-gray-400">required</span>
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    className="w-full p-3 border rounded focus:outline-none focus:ring focus:ring-blue-300"
                                    placeholder="Enter your name"
                                    required
                                />
                            </div>

                            {/* Email */}
                            <div className="sm:col-span-1">
                                <label
                                    htmlFor="email"
                                    className="text-sm font-semibold text-gray-600 mb-1 block"
                                >
                                    Email <span className="italic text-gray-400">required</span>
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    className="w-full p-3 border rounded focus:outline-none focus:ring focus:ring-blue-300"
                                    placeholder="Enter your email"
                                    required
                                />
                            </div>

                            {/* Phone */}
                            <div className="sm:col-span-1">
                                <label
                                    htmlFor="phone"
                                    className="text-sm font-semibold text-gray-600 mb-1 block"
                                >
                                    Phone <span className="italic text-gray-400">required</span>
                                </label>
                                <input
                                    type="text"
                                    id="phone"
                                    className="w-full p-3 border rounded focus:outline-none focus:ring focus:ring-blue-300"
                                    placeholder="Enter your phone number"
                                    required
                                />
                            </div>

                            {/* Subject */}
                            <div className="sm:col-span-1">
                                <label
                                    htmlFor="subject"
                                    className="text-sm font-semibold text-gray-600 mb-1 block"
                                >
                                    Subject <span className="italic text-gray-400">required</span>
                                </label>
                                <input
                                    type="text"
                                    id="subject"
                                    className="w-full p-3 border rounded focus:outline-none focus:ring focus:ring-blue-300"
                                    placeholder="Enter subject"
                                    required
                                />
                            </div>

                            {/* Message */}
                            <div className="col-span-1 sm:col-span-2">
                                <label
                                    htmlFor="message"
                                    className="text-sm font-semibold text-gray-600 mb-1 block"
                                >
                                    Message <span className="italic text-gray-400">required</span>
                                </label>
                                <textarea
                                    id="message"
                                    rows="4"
                                    className="w-full p-3 border rounded focus:outline-none focus:ring focus:ring-blue-300"
                                    placeholder="Enter your message"
                                    required
                                ></textarea>
                            </div>

                            {/* Submit Button */}
                            <div className="col-span-1 sm:col-span-2 flex justify-end">
                                <button
                                    type="submit"
                                    className="bg-blue-500 text-white font-semibold py-3 px-6 rounded hover:bg-blue-600 transition duration-300"
                                >
                                    SEND MESSAGE
                                </button>
                            </div>
                        </form>
                    </div>

                    {/* Right Side: Company Address */}
                    <div className="bg-white p-6 sm:p-8 border rounded-lg shadow-md flex flex-col justify-center wow bounceInUp pb-8"
                        data-wow-delay="0.3s"
                    >
                        <h2 className="text-2xl font-bold mb-4 text-gray-700">Address</h2>
                        <p className="text-gray-600 leading-relaxed mb-4">
                            <strong>iPlatform Media Technologies Pvt. Ltd.</strong>
                            <br />
                            #75, 3rd floor, BTM Layout Ring Road,
                            <br />
                            Bangalore – 560076, Karnataka, (IND)
                            <br />
                            <strong>Tele:</strong> +91 80 43944755, +91 9845088755
                            <br />
                            <strong>UAE:</strong> +971 555608760
                            <br />
                            <strong>Email:</strong>{" "}
                            <a
                                href="mailto:mks@iplatformmedia.com"
                                className="text-blue-500 underline"
                            >
                                mks@iplatformmedia.com
                            </a>
                        </p>
                        <p className="text-gray-600 mt-5">
                            <strong>Branch Offices:</strong> Bangalore, Chennai, Hyderabad & Thrissur.
                            <br />
                            We have Pan India Operations.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
