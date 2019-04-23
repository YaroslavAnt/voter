import React from 'react';
import { Link } from "react-router-dom";

import './Footer.scss'

const Footer = () => (
    <footer className="footer">
        <Link to="/" className="mr-40">Dashboard</Link>
        <Link to="/" className="mr-40">Pool</Link>
        <Link to="/" className="mr-40">Create</Link>
    </footer>
);

export default Footer;