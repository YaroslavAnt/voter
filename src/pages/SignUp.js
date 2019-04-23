import React from 'react';
import { Link } from "react-router-dom";
import { TextField, withStyles } from '@material-ui/core';

import Page from '../layouts/Page';
import PollsShape from '../components/PollsShape';
import PollsHeading from '../components/PollsHeading';
import MyButton from '../layouts/MyButton';

const styles = () => ({
  margin: {
    margin: '20px'
  }
})

class SignUp extends React.Component {
  state = {
    email: '',
    password: ''
  }

  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };

  handleSubmit = () => {

  }

  render() {
    const { classes } = this.props;

    return (
      <Page pageName="Sign Up">
        <PollsShape>
          <PollsHeading heading="Register with Voter app" bgColor="#ae00ae">
            Please enter your email and password
          </PollsHeading>

          <form >
            <TextField
              className={classes.margin}
              name='email'
              placeholder='Email'
              onChange={this.handleChange('email')} />
            <br />

            <TextField
              className={classes.margin}
              name='password'
              type='password'
              placeholder='Password'
              onChange={this.handleChange('password')} />
            <br />

            <TextField
              className={classes.margin}
              name='password'
              type='password'
              placeholder='Password'
              onChange={this.handleChange('password')} />
            <br />

            <MyButton bgColor="#ae00ae" onClick={this.handleSubmit}> Sign Up</MyButton>
          </form>

          <p style={{ color: "#ae00ae" }}>Already have an account? <Link to="/sign-in">sign-in</Link></p>

        </PollsShape>
      </Page >
    );
  }

}

export default withStyles(styles)(SignUp);