import React from 'react';
import { NavLink } from "react-router-dom";
import DashboardIcon from '@material-ui/icons/Dashboard';
import Poll from '@material-ui/icons/Poll';
import Create from '@material-ui/icons/Create';
import AccountCircle from '@material-ui/icons/AccountCircle';
import { connect } from 'react-redux';


import "./Sidebar.scss";

class Sidebar extends React.Component {
    render() {
        let links = (
            <ul>
                <li><NavLink to="/sign-in" className="btn"><AccountCircle />Sign In</NavLink></li>
                <li><NavLink to="/sign-up" className="btn"><AccountCircle />Sign Up</NavLink></li>
            </ul>
        );
        if (this.props.email) {
            links = (
                <ul>
                    <li><NavLink exact to="/" className="btn"><DashboardIcon />Dashboard</NavLink></li>
                    <li><NavLink to="/poll" className="btn"><Poll />Poll</NavLink></li>
                    <li><NavLink to="/create" className="btn"><Create />Create</NavLink></li>
                </ul>
            )
        }
        return (
            <div className="sidebar">
                <h1 className="btn">VOTER</h1>
                <nav>
                    {links}
                </nav>
            </div>
        );
    }
}

const MapStateToProps = state => {
    return {
        email: state.auth.email
    }
}

export default connect(MapStateToProps)(Sidebar);