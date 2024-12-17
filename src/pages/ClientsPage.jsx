import React from 'react';

const ClientsPage = () => {
    const clients = [
        { img: 'https://www.iplatformmedia.com/img/clients/embassy.png', alt: 'Client 1', title: 'Client 1', delay: "0.1s", },
        { img: 'https://www.iplatformmedia.com/img/clients/allen.png', alt: 'Client 2', title: 'Client 2', delay: "0.3s", },
        { img: 'https://www.iplatformmedia.com/img/clientlogos/2.jpg', alt: 'Client 3', title: 'Client 3', delay: "0.5s", },
        { img: 'https://www.iplatformmedia.com/img/clients/pnrao.png', alt: 'Client 4', title: 'Client 4', delay: "0.7s", },
        { img: 'https://www.iplatformmedia.com/img/clients/embassy.png', alt: 'Client 1', title: 'Client 1', delay: "0.9s", },
        { img: 'https://www.iplatformmedia.com/img/clients/allen.png', alt: 'Client 2', title: 'Client 2', delay: "0.11s", },
        { img: 'https://www.iplatformmedia.com/img/clientlogos/2.jpg', alt: 'Client 3', title: 'Client 3', delay: "0.13s", },
        { img: 'https://www.iplatformmedia.com/img/clients/pnrao.png', alt: 'Client 4', title: 'Client 4', delay: "0.12s", },
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
