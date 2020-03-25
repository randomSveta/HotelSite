import React from 'react';
import Home from './home/Home';
import Search from './search/Search';
import About from './about/About';
import Contacts from './contacts/Contact';
import Gallery from "./gallery/Gallery";

export const PAGES = [
    {
        id: 0,
        title: "Home",
        url: "/",
        component: <Home />
    },
    {
        id: 1,
        title: "Search",
        url: "/search",
        component: <Search />
    },
    {
        id: 2,
        title: "About",
        url: "/about",
        component: <About />
    },
    {
        id: 3,
        title: "Gallery",
        url: "/gallery",
        component: <Gallery />
    },
    {
        id: 4,
        title: "Contacts",
        url: "/contacts",
        component: <Contacts />
    }
];

