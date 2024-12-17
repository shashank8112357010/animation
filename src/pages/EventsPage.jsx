import React from 'react';
import img1 from '../assets/events/events1.jfif';
import img2 from '../assets/events/events2.jfif';
import img3 from '../assets/events/events3.jfif';
import img4 from '../assets/events/events4.jfif';
import img5 from '../assets/events/events5.jfif';
import img6 from '../assets/events/events6.jfif';
import img7 from '../assets/events/events7.jfif';
import img8 from '../assets/events/events8.jpg';
import bannerImg from '../assets/banner/Event-management.png';


const EventsPage = () => {
    const events = [
        { img: img1, title: 'Dhandiya Event' },
        { img: img2, title: 'Food Festival' },
        { img: img3, title: 'BCL' },
        { img: img4, title: 'Kite Flying' },
        { img: img5, title: 'Food Festival' },
        { img: img6, title: 'Dhandiya Event' },
        { img: img7, title: 'Kite Flying' },
        { img: img8, title: 'BCL' },
    ];

    return (
        <div>
            {/* Banner Section */}
            <div className="relative w-full h-[40vh] md:h-[50vh] lg:h-[60vh] wow bounceInUp"
                data-wow-delay="0.1s"
            >
                <img
                    src={bannerImg}
                    alt="Events Banner"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center">
                        Explore Our Events
                    </h1>
                </div>
            </div>

            {/* Events Section */}
            <div className="container mx-auto py-10 px-4">
                {/* <h1 className="text-3xl font-bold text-center mb-8">Events</h1> */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 wow bounceInUp"
                    data-wow-delay="0.3s"
                >
                    {events.map((event, index) => (
                        <div
                            key={index}
                            className="relative group overflow-hidden rounded-lg shadow-lg"
                        >
                            <img
                                src={event.img}
                                alt={event.title}
                                className="w-full h-64 object-cover transform transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                <h2 className="text-white text-xl font-semibold">{event.title}</h2>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default EventsPage;
