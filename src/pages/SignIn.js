import React from 'react';
import { Link, Redirect } from "react-router-dom";
import { connect } from 'react-redux';

import Page from '../layouts/Page';
import PollsShape from '../components/PollsShape';
import PollsHeading from '../components/PollsHeading';
import MyForm from '../layouts/MyForm';
import * as auth from "../store/actions/auth";


class SignIn extends React.Component {

  render() {
    const { email } = this.props;
    if (email) {
      return (
        <Redirect to='/' />
      )
    }
    return (
      <Page pageName="Sign In">
        <PollsShape>

          <PollsHeading heading="Sign into Voter app" bgColor="#ae00ae">
            Please enter your email and password
          </PollsHeading>

          <MyForm formType="SignIn" {...this.props} userAuthRequest={this.props.signInRequest} />

          <p style={{ color: "#ae00ae" }}>First time app user? <Link to="/sign-up">sign-up</Link></p>

        </PollsShape>
      </Page >
    );
  }
}

const MapStateToProps = state => {
  return {
    email: state.auth.email
  }
}

const MapDispatchToProps = dispatch => {
  return {
    signInRequest: (user) => dispatch(auth.signinAction(user))
  }
}

export default connect(MapStateToProps, MapDispatchToProps)(SignIn);