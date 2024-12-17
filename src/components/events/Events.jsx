import React, { useState } from "react";
import img1 from '../../assets/events/events1.jfif'
import img2 from '../../assets/events/events2.jfif'
import img3 from '../../assets/events/events3.jfif'
import img4 from '../../assets/events/events4.jfif'
import img5 from '../../assets/events/events5.jfif'
import img6 from '../../assets/events/events6.jfif'
import img7 from '../../assets/events/events7.jfif'
import img8 from '../../assets/events/events8.jpg'

const eventsData = [
    { id: 1, category: "Dhandiya Event", imgae: img1 },
    { id: 2, category: "BCL", imgae: img2 },
    { id: 3, category: "Dhandiya Event", imgae: img3 },
    { id: 4, category: "Food Festival", imgae: img4 },
    { id: 5, category: "Kite Flying", imgae: img5 },
    { id: 6, category: "Dhandiya Event", imgae: img6 },
    { id: 7, category: "Food Festival", imgae: img7 },
    { id: 8, category: "BCL", imgae: img8 },
];

const categories = [
    { name: "All Events", key: "all" },
    { name: "Dhandiya Event", key: "Dhandiya Event" },
    { name: "BCL", key: "BCL" },
    { name: "Kite Flying", key: "Kite Flying" },
    { name: "Food Festival", key: "Food Festival" },
];

const EventCard = ({ category, imgae }) => (
    <div className="col-span-1 md:col-span-2 lg:col-span-1 wow bounceInUp" data-wow-delay="0.1s">
        <div className="relative group">
            <img src={imgae} alt={category} className="rounded-lg w-full h-auto" />
            <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition">
                <h4 className="text-white text-lg font-bold mb-2">{category}</h4>
                <a href={imgae} className="text-white text-2xl">
                    <i className="fas fa-search-plus"></i>
                </a>
            </div>
        </div>
    </div>
);

const Events = () => {
    const [activeCategory, setActiveCategory] = useState("all");

    const filteredEvents =
        activeCategory === "all"
            ? eventsData
            : eventsData.filter((event) => event.category === activeCategory);

    return (
        <div className="container mx-auto py-16 px-4">
            <div className="text-center wow bounceInUp pb-8" data-wow-delay="0.1s">
                <small className="inline-block font-bold text-gray-700 uppercase bg-gray-200 border border-blue-500 rounded-full px-4 py-1 mb-3">
                    Latest Events
                </small>
                <h1 className="text-4xl font-extrabold mb-8">
                    Our Social & Professional Events Gallery
                </h1>
            </div>

            <div className="flex justify-center space-x-4 mb-8">
                {categories.map((cat) => (
                    <button
                        key={cat.key}
                        className={`py-2 px-6 rounded-full border-2 transition ${activeCategory === cat.key
                            ? "bg-blue-500 text-white border-blue-500"
                            : "bg-white text-gray-800 border-gray-300"
                            }`}
                        onClick={() => setActiveCategory(cat.key)}
                    >
                        {cat.name}
                    </button>
                ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {filteredEvents.map((event) => (
                    <EventCard key={event.id} category={event.category} imgae={event.imgae} />
                ))}
            </div>
        </div>
    );
};

export default Events;
