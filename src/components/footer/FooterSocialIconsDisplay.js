import React from 'react';
import { SOCIAL_LINKS } from '../../hotels-data/social-links';
import SocialIcon from '../pages/SocialIcon';

export default function FooterSocialIconsDisplay(props) {

    const icons = SOCIAL_LINKS.map((socialIcon, i) => {
        return (
            <li className="list-inline-item" key={i}>
                <SocialIcon socialIcon={socialIcon} place={props.place} />
            </li>
        );
    });

    return (
        <ul className="list-unstyled list-inline">
            {icons}
        </ul>
    );

}