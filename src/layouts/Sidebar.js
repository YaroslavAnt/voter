import React from 'react';
import { NavLink } from "react-router-dom";
import DashboardIcon from '@material-ui/icons/Dashboard';

import "./Sidebar.scss";

const Sidebar = () => (
    <div className="sidebar">
        <h1 className="btn">VOTER</h1>
        <nav>
            <ul>
                <li><NavLink exact to="/" className="btn"><DashboardIcon></DashboardIcon>Dashboard</NavLink></li>
                <li><NavLink to="/log-out" className="btn"><DashboardIcon></DashboardIcon>Poll</NavLink></li>
                <li><NavLink to="/log-in" className="btn"><DashboardIcon></DashboardIcon>Create</NavLink></li>
            </ul>
        </nav>

    </div>
);

export default Sidebar;