import React from 'react';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';


import './Footer.scss'
import Wrapper from '../hoc/Wrapper';

const Footer = (props) => {
    const { email } = props;
    let links = (
        <Wrapper>
            <Link to="/sign-in" className="mr-40">SIGN IN</Link>
            <Link to="/sign-up" className="mr-40">SIGN UP</Link>
        </Wrapper>
    )
    if (email) {
        links = (
            <Wrapper>
                <Link to="/" className="mr-40">Dashboard</Link>
                <Link to="/poll" className="mr-40">Poll</Link>
                <Link to="/create" className="mr-40">Create</Link>
            </Wrapper>
        )
    }
    return (
        <footer className="footer">
            {links}
        </footer>
    );
}

const MapStateToProps = state => {
    return {
        email: state.auth.email
    }
}

export default connect(MapStateToProps)(Footer);