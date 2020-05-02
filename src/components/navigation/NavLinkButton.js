import React from 'react';
import { NavLink } from "react-router-dom";

export default function NavLinkButton(props) {

    return (
        <NavLink className={"basic-dark-bg " + props.place + "-nav-link " + props.class} to={props.page.url} exact={props.page.title === "Home" ? true : false} id={props.page.title.toLowerCase() + "-navlink-" + props.place}>{props.page.title}</NavLink>
    );
}