import React from 'react';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';

import { TextField, withStyles, Button } from '@material-ui/core';


import Page from '../layouts/Page';
import PollsShape from '../components/PollsShape';
import PollsHeading from '../components/PollsHeading';
import * as auth from "../store/actions/auth";

const styles = () => ({
  margin: {
    margin: '20px'
  },
  button: {
    backgroundColor: '#ae00ae',
    color: '#fff'
  }
})

class SignUp extends React.Component {
  state = {}

  handleSubmit = event => {
    event.preventDefault();
    console.log(localStorage.getItem("code"));

    this.props.verifyRequest(localStorage.getItem("code"));
    window.close();
  }

  render() {
    const { classes } = this.props;

    return (
      <Page pageName="Email verification">
        <PollsShape>

          <PollsHeading heading="Email verifiaction to finish registration with Voter App" bgColor="#ae00ae">
            Please enter your email and password
          </PollsHeading>

          <form onSubmit={this.handleSubmit}>
            <TextField
              className={classes.margin}
              label="Email Address"
              value={localStorage.getItem("email")}
              margin="normal"
              InputProps={{
                readOnly: true,
              }} />
            <br />

            <TextField
              className={classes.margin}
              label="VerificationCode"
              value={localStorage.getItem("code")}
              margin="normal"
              InputProps={{
                readOnly: true,
              }} />
            <br />

            <Button
              variant='contained'
              type='submit'
              className={classes.button}
            >
              verify email
            </Button>
          </form>

          <p style={{ color: "#ae00ae" }}>Already have an account? <Link to="/sign-in">sign-in</Link></p>

        </PollsShape>
      </Page >
    );
  }
}

const MapDispatchToProps = dispatch => {
  return {
    verifyRequest: (code) => dispatch(auth.verifyAction(code))
  }
}

export default connect(null, MapDispatchToProps)(withStyles(styles)(SignUp));