import React from 'react';
import NavLinkButton from './NavLinkButton';
import { PAGES } from "../pages/pages";


export default function NavLinkButtonsGroup(props) {

    const navLinks = PAGES.map((page, i) => {
        let button;
        if (props.place === "side") {
            button = <NavLinkButton page={page} key={i} place={props.place} class="basic-font-caveat" />
        } else if (props.place === "footer") {
            button = <li className="list-inline-item m-0 p-0" key={i}><NavLinkButton page={page} place={props.place} /></li>
        }
        return button;
    });

    return navLinks;
}