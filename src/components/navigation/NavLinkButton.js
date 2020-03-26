import React from 'react';
import { NavLink } from "react-router-dom";

export default function NavLinkButton(props) {

    return (
        <NavLink className="nav-link dark-color-bg" to={props.page.url} exact={props.page.title === "Home" ? true : false} id={props.page.title.toLowerCase() + "-navlink-" + props.place}>{props.page.title}</NavLink>
    );
}