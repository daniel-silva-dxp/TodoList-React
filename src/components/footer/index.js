import React from 'react';
import SocialIcons from '../social-icons';

import './index.css'

const Footer = () => {
    return (
        <footer className="wrap">
            <div className="container">
                <h4>Daniel Silva | Front-end Developer e UI Design</h4>
                <SocialIcons />
            </div>
        </footer>
    );
};

export default Footer;