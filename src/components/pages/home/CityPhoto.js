import React from 'react';
import { Link } from "react-router-dom";

export default function CityPhoto(props) {
    return (

        <Link className="position-relative w-100" to={"/search?city=" + props.hotel.city.toLowerCase().replace(" ", "-")} >
            {/* <img src={props.hotel.photos.photo} className="basic-image-size img-fluid overflow-hidden m-0 p-0 position-relative" alt={props.hotel.city + " photo"} /> */}
            <div className="basic-row-height w-100 d-block"></div>
            <p className="home-city-name text-white">{props.hotel.city}</p>
        </Link>

    )

};
