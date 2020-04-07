import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function SocialIcon(props) {
    return (
        <a href={props.socialIcon.url} className={props.place + "-icon"} target="_blank" rel="noopener noreferrer" aria-label={"Link to " + props.socialIcon.title}>
            <FontAwesomeIcon icon={props.socialIcon.icon} />
        </a>
    );
}