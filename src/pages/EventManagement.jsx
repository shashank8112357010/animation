import React from 'react';
import img1 from "../assets/banner/Event-management.png";
import { CiCirclePlus } from 'react-icons/ci';

const EventManagement = () => {
    const services = [
        "Conference & Seminars Setup",
        "Theme Conference and Meeting",
        "Designer Stage / Backdrop",
        "Road shows",
        "Brand Activations / Product Launch",
        "BTL Activations",
        "Delegate / Client Visit",
        "Customer-Meet / Supplier",
        "Awards Night / Theme Party",
        "Annual Function",
        "Picnic / Project Party",
        "Compere / Anchor",
        "Live Music / Orchestra, DJ",
        "Professional Dancers & Celebrity Shows",
        "Exhibitions",
        "Corporate Gifting",
        "Celebrity management",
        "Logistics and catering",
    ];

    return (
        <div className="bg-white pb-12">
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
                        Event Management
                    </h2>
                </div>
                <div className=' text-gray-500 wow bounceInUp' data-wow-delay="0.3s">
                    <p className="px-4 md:px-16">
                        We believe that the only limitation to what we can achieve for you is your imagination; we study the intricacies of the brand, identifying the target audience, devising the event concept, planning the logistics and coordinating the technical aspects before actually executing the modalities of the proposed event. There is nothing more satisfying than to put a smile on someone's face. When one plays a part in creating joy in someone's day or life, it is immensely gratifying. Each event is a special occasion for someone. This is why every event deserves special care. We organize, plan and execute seminars, conferences and meetings, entertainment for gala dinners, cocktails, reward theme parties, brand activations, product launch, team building and special events at the most suitable venue. We believe we can create memorable occasions.
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
    );
};

export default EventManagement;
