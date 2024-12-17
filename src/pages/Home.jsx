import React from 'react'
import BannerSlider from '../components/banner/Banner'
import Landing from '../components/landing/Landing'
import Services from '../components/services/Services'
import Events from '../components/events/Events'
import Testimonial from '../components/testimonial/Testimonial'
import UpcomingEvents from '../components/upcomingevents/UpcomingEvents'

const Home = () => {
    return (
        <div>
            <BannerSlider />
            <Landing />
            <Services />
            <Events />
            <UpcomingEvents />
            <Testimonial />
        </div>
    )
}

export default Home
