import React from 'react';
import AccountCircle from '@material-ui/icons/AccountCircle';

import './Header.scss'

const Header = (props) => (
    <header className="header flexbox justify-between align-center">
        <h1>{props.pageName}</h1>
        <AccountCircle />
    </header>
);

export default Header;