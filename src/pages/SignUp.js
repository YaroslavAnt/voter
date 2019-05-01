import React from 'react';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';

import Page from '../layouts/Page';
import PollsShape from '../components/PollsShape';
import PollsHeading from '../components/PollsHeading';
import MyForm from '../layouts/MyForm';
import * as auth from "../store/actions/auth";


class SignUp extends React.Component {
  render() {
    return (
      <Page pageName="Sign Up">
        <PollsShape>

          <PollsHeading heading="Register with Voter app" bgColor="#ae00ae">
            Please enter your email and password
          </PollsHeading>

          <MyForm formType="SignUp" {...this.props} userAuthRequest={this.props.signUpRequest} />

          <p style={{ color: "#ae00ae" }}>Already have an account? <Link to="/sign-in">sign-in</Link></p>

        </PollsShape>
      </Page >
    );
  }
}

const MapDispatchToProps = dispatch => {
  return {
    signUpRequest: (state) => dispatch(auth.signupAction(state))
  }
}

export default connect(null, MapDispatchToProps)(SignUp);