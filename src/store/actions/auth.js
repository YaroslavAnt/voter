import axios from "axios";
import * as actionTypes from './actionTypes'

export const signupAction = ({ email, password }) => {
  return dispatch => {
    const authData = {
      email,
      password,
    }
    axios
      .post('/api/sign-up', authData)
      .then(response => {
        localStorage.setItem("code", response.data.user.code);
        localStorage.setItem("email", response.data.user.email);
      });
  }
}

export const verifyAction = (code) => {
  return () => {
    axios
      .post('/api/verification', { code })
      .then(response => {
        const { token } = response.data
        localStorage.setItem("token", token);
      })
  }
}

export const signinAction = ({ email, password }) => {
  return dispatch => {
    const authData = {
      email,
      password,
    }
    axios
      .post('/api/sign-in', authData)
      .then(response => {
        console.log(response.data);

        const { email, message } = response.data;
        if (email) {
          dispatch(signinSuccess(email))
        }
        if (message) {
          dispatch(signinFail(message))
        }
      })
  }
}

export const signinSuccess = (email) => {
  return {
    type: actionTypes.SIGN_IN_SUCCESS,
    email
  };
};

export const signinFail = (errMessage) => {
  return {
    type: actionTypes.SIGN_IN_FAIL,
    errMessage
  };
};

export const logout = () => {
  localStorage.clear();
  return {
    type: actionTypes.AUTH_LOGOUT
  };
};