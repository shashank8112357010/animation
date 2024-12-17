import React from 'react';
import img1 from "../assets/clients/clients.png";
import img2 from "../assets/clients/clients2.jpg";
import img3 from "../assets/clients/clients3.png";
import img4 from "../assets/clients/clients4.png";
import img5 from "../assets/clients/clients5.jpg";
import img6 from "../assets/clients/clients6.jpg";
import img7 from "../assets/clients/clients7.jpg";
import img8 from "../assets/clients/clients8.jpg";
import img9 from "../assets/clients/clients9.jpg";
import img10 from "../assets/clients/clients10.jpg";

const ClientsPage = () => {
    const clients = [
        { img: img1, alt: 'Client 1', title: 'Client 1', delay: "0.1s", },
        { img: img2, alt: 'Client 2', title: 'Client 2', delay: "0.3s", },
        { img: img3, alt: 'Client 3', title: 'Client 3', delay: "0.5s", },
        { img: img4, alt: 'Client 4', title: 'Client 4', delay: "0.7s", },
        { img: img5, alt: 'Client 1', title: 'Client 1', delay: "0.9s", },
        { img: img6, alt: 'Client 2', title: 'Client 2', delay: "0.11s", },
        { img: img7, alt: 'Client 3', title: 'Client 3', delay: "0.13s", },
        { img: img8, alt: 'Client 4', title: 'Client 4', delay: "0.12s", },
        { img: img9, alt: 'Client 4', title: 'Client 4', delay: "0.12s", },
        { img: img10, alt: 'Client 4', title: 'Client 4', delay: "0.12s", },
    ];
    return (
        <div className="bg-white">
            <div className="container mx-auto py-10 px-4">
                <div className="text-center wow bounceInUp pb-8" data-wow-delay="0.1s">
                    <h1 className="text-3xl font-bold text-center mb-8">Our Clients</h1>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {clients.map((client, index) => (
                        <div key={index} className="relative group overflow-hidden rounded-lg shadow-lg wow bounceInUp"
                            data-wow-delay={clients.delay}>
                            <div className="w-full h-64 bg-white rounded-lg overflow-hidden">
                                <img
                                    src={client.img}
                                    alt={client.alt}
                                    className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>
                            <div className="absolute bottom-4 left-0 right-0 text-center text-white font-bold bg-black bg-opacity-50 py-2">
                                {client.title}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ClientsPage;
