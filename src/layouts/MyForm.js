import React, { Component } from 'react';
import { TextField, withStyles, Button } from '@material-ui/core';

const styles = () => ({
  margin: {
    margin: '20px'
  },
  button: {
    backgroundColor: '#ae00ae',
    color: '#fff'
  }
})

class MyForm extends Component {
  state = {
    email: '',
    password: '',
    passwordconfirm: ''
  }

  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.userAuthRequest(this.state);
    this.setState({
      email: '',
      password: '',
      passwordconfirm: ''
    });
  }

  render() {
    const { classes, match } = this.props;

    return (
      <form onSubmit={this.handleSubmit}>
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

        {match.path === "/sign-up" && (
          <TextField
            className={classes.margin}
            name='passwordconfirm'
            type='password'
            placeholder='Password Confirm'
            onChange={this.handleChange('passwordconfirm')} />
        )}
        <br />

        <Button
          variant='contained'
          type='submit'
          className={classes.button}
        >
          {this.props.formType}
        </Button>
      </form>
    );
  }
}


export default withStyles(styles)(MyForm);