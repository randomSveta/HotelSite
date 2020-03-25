
import React from 'react';
import { NavLink } from "react-router-dom";
import { PAGES } from "../pages/pages";

export const navLinks = PAGES.map((page, i) => {
    return (
        <NavLink to={page.url} exact={page.title === "Home" ? true : false} key={i} id={page.title.toLowerCase()}>{page.title}</NavLink>
    );
});