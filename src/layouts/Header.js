import React from 'react';
import AccountCircle from '@material-ui/icons/AccountCircle';
import { Snackbar, Button } from '@material-ui/core';
import { connect } from 'react-redux';

import * as auth from "../store/actions/auth";

import './Header.scss'

class Header extends React.Component {
  state = {
    open: false
  }

  handleClose = () => {
    this.setState({ open: false });
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  render() {
    return (
      <header className="header flexbox justify-between align-center">
        <h1>{this.props.pageName}</h1>

        <div className="flexbox align-center">
          {this.props.email && <span>{this.props.email}</span>}
          <Button onClick={this.handleOpen}>
            <AccountCircle />
          </Button>
          <Snackbar
            anchorOrigin={{ vertical: 'top', horizontal: "right" }}
            open={this.state.open}
            onClose={this.handleClose}
            message={
              <Button
                href='/sign-in'
                onClick={this.props.logoutRequest}
                variant='contained'
                color='secondary'>
                LogOut
              </Button>
            } />
        </div>
      </header>
    );
  }
}

const MapStateToProps = (state) => {
  return {
    email: state.auth.email
  }
}

const MapDispatchToProps = dispatch => {
  return {
    logoutRequest: () => dispatch(auth.logout())
  }
}

export default connect(MapStateToProps, MapDispatchToProps)(Header);