import React from 'react';
import { FaFacebookSquare, FaInstagram, FaLinkedin, FaGithubSquare } from 'react-icons/fa';

import './index.css'

const SocialIcons = () => {
    return (
        <div className="social-links">
            <a href="http://www.google.com.br" target="_blank" rel="noopener noreferrer">
                <FaFacebookSquare />
            </a>
            <a href="http://www.google.com.br" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
            </a> 
            <a href="http://www.google.com.br" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
            </a>
            <a href="http://www.google.com.br" target="_blank" rel="noopener noreferrer">
                <FaGithubSquare />
            </a>
        </div>
    );
};

export default SocialIcons;