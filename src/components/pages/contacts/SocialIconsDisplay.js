import React from 'react';
import { Col } from 'reactstrap';
import { SOCIAL_LINKS } from '../../../hotels-data/social-links';
import SocialIcon from '../SocialIcon';

export default function SocialIconsDisplay(props) {

    const icons = SOCIAL_LINKS.map((socialIcon, i) => {
        return (
            <Col xs="6" md="3" className="m-0 p-0" key={i}>
                <SocialIcon socialIcon={socialIcon} place={props.place} />
            </Col>
        );
    });

    return icons;
}