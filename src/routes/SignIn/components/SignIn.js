import React from 'react'
import PropTypes from 'prop-types'
import SignInForm from './SignInForm'
import { Link } from 'react-router'

class SignIn extends React.Component {
  constructor (props) {
    super(props)
  }

  handleSubmit = (user) => {
    // Do something with the form values
    this.props.signIn(user)
  };

  render () {
    return (
      <div className='login-box'>
        <div className='login-logo'>
          <Link to='/' className='nav-link'><b>Admin</b>LTE</Link>
        </div>
        <div className='card'>
          <div className='card-body login-card-body'>
            <p className='login-box-msg'>Sign in to start your session</p>
            <SignInForm onSubmit={this.handleSubmit} signIn={this.props.signin} />
            <div className='social-auth-links text-center mb-3'>
              <p>- OR -</p>
              <a href='#' className='btn btn-block btn-primary'>
                <i className='fa fa-facebook mr-2' /> Sign in using Facebook
              </a>
              <a href='#' className='btn btn-block btn-danger'>
                <i className='fa fa-google-plus mr-2' /> Sign in using Google+
              </a>
            </div>

            <p className='mb-1'>
              <a href='#'>I forgot my password</a>
            </p>
            <p className='mb-0'>
              <a href='register.html' className='text-center'>Register a new membership</a>
            </p>
          </div>
        </div>
      </div>
    )
  }
}

SignIn.propTypes = {
  signin: PropTypes.object.isRequired,
  signIn: PropTypes.func.isRequired,
}

export default SignIn
