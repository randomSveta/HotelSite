import React from 'react';
import { Link } from "react-router-dom";

export default function AboutCityPhoto(props) {
    return (

        <Link to={"/search?city=" + props.hotel.city.toLowerCase().replace(" ", "-")} >
            <img src={props.hotel.photos.aboutPhoto} className="image-size img-fluid overflow-hidden m-0 p-0" alt={props.hotel.city + " about photo"} />
        </Link>

    )

};