import React from "react";
import img1 from '../../assets/events/events1.jfif'
import img2 from '../../assets/events/events2.jfif'
import img3 from '../../assets/events/events3.jfif'
const UpcomingEvents = () => {
    const upcomingEvents = [
        {
            id: 1,
            date: "20",
            month: "December",
            image: img1,
            title: "Dhandiya Event",
            delay: "0.1s",
        },
        {
            id: 2,
            date: "24",
            month: "December",
            image: img2,
            title: "Kite Flying",
            delay: "0.3s",
        },
        {
            id: 3,
            date: "26",
            month: "December",
            image: img3,
            title: "Food Festival",
            delay: "0.5s",
        },
    ];

    return (
        <div className="bg-white py-12 service">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div
                    className="text-center wow bounceInUp pb-8"
                    data-wow-delay="0.1s"
                >
                    <small className="inline-block font-bold text-gray-800 uppercase bg-gray-200 border border-blue-500 rounded-full px-4 py-1 mb-3">
                        Upcoming Events
                    </small>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
                    {upcomingEvents.map((events) => (
                        <div
                            key={events.id}
                            className="upevents-item wow bounceInUp bg-white shadow-md rounded-lg"
                            // data-wow-delay="0.1s"
                            data-wow-delay={events.delay}
                        >
                            <div className="overflow-hidden rounded-t-lg">
                                <img
                                    src={events.image}
                                    className="w-full h-60 object-cover"
                                    alt="events"
                                />
                            </div>
                            <div className="upevents-content flex mx-4 rounded bg-gray-50 shadow-md -mt-5">
                                <div className="bg-blue-500 text-white rounded-l-md flex flex-col items-center justify-center p-3">
                                    <p className="font-bold text-lg mb-0">{events.date}</p>
                                    <p className="font-bold text-lg mb-0">{events.month}</p>
                                </div>
                                <a
                                    href="#"
                                    className="flex-1 text-lg font-medium p-4 hover:text-blue-600"
                                >
                                    {events.title}
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};


export default UpcomingEvents
