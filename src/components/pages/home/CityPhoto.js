import React from 'react';
import { Link } from "react-router-dom";

export default function CityPhoto(props) {
    return (

        <Link className="relative" to={"/search?city=" + props.hotel.city.toLowerCase().replace(" ", "-")} >
            <img src={props.hotel.photo} className="image-size img-fluid overflow-hidden m-0 p-0 relative" alt={props.hotel.city + " photo"} />
            <p className="city-name-text gold-bg">{props.hotel.city}</p>
        </Link>

    )

};
