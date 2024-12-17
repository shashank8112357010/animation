import About from "../pages/About";
import Branding from "../pages/Branding";
import Career from "../pages/Career";
import ClientsPage from "../pages/ClientsPage";
import Contact from "../pages/Contact";
import CreativeDesign from "../pages/CreativeDesign";
import EventManagement from "../pages/EventManagement";
import EventsPage from "../pages/EventsPage";
import Home from "../pages/Home";
import PrintManagement from "../pages/PrintManagement";

export const route = [
    {

        path: "/",
        component: <Home />,
        id: 0
    },
    {

        path: "/about",
        component: <About />,
        id: 1
    },
    {

        path: "/clients",
        component: <ClientsPage />,
        id: 2
    },
    {

        path: "/events",
        component: <EventsPage />,
        id: 3
    },
    {

        path: "/career",
        component: <Career />,
        id: 4
    },
    {

        path: "/contact",
        component: <Contact />,
        id: 5
    },
    // for drop down 
    {

        path: "/services/eventmanagement",
        component: <EventManagement />,
        id: 6

    },
    {

        path: "/services/branding",
        component: <Branding />,
        id: 7
    },

    {

        path: "/services/creativeDesign",
        component: <CreativeDesign />,
        id: 8
    },
    {

        path: "/services/printmanagement",
        component: <PrintManagement />,
        id: 9
    },

]