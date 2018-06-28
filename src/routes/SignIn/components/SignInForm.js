import React, { Component } from 'react'
import { createStore, combineReducers } from 'redux'
import { Field, reduxForm } from 'redux-form'
import { browserHistory } from 'react-router'

const validate = values => {
  const errors = {}
  let username = values.username
  let password = values.password
  if (!username) {
    errors.username = 'Required'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(username)) {
    errors.username = 'Invalid email address'
  }
  if (!password) {
    errors.password = 'Required'
  }
  return errors
}

const warn = values => {
  const warnings = {}
  if (values.age < 19) {
    warnings.age = 'Hmm, you seem a bit young...'
  }
  return warnings
}
class SignInForm extends Component {
  renderField = ({ input, type, placeholder, icon, meta: { touched, error, warning, pristine } }) => (
    <div className='form-group has-feedback'>
      <input {...input} type={type} placeholder={placeholder}
        className={'form-control form-control-lg' + ((touched && error) || (!pristine && error) ? ' error' : !pristine ? ' valid' : '')} style={{ fontSize:'1rem' }} />
      <span className={'glyphicon form-control-feedback ' + icon} />
      {touched && ((error && <label className='error'>{error}</label>) || (warning &&
      <span className='text-warning'>{warning}</span>))}
    </div>
  );
  render () {
    const { handleSubmit, signIn, pristine, reset, submitting } = this.props
    let signInFailedMessage = !pristine && signIn.signInErrorMessage ? (<label className='error' style={{ textAlign: 'center' }}>{signIn.signInErrorMessage}</label>) : ''
    return (
      <form onSubmit={handleSubmit}>
        <Field name='username' type='email' component={this.renderField}
          placeholder='Username@gmail.com' icon='glyphicon-envelope' />
        <span className='fa fa-envelope form-control-feedback' />
        <Field name='password' type='password' icon='glyphicon-lock' component={this.renderField}
          placeholder='********' />
        <span className='fa fa-lock form-control-feedback' />

        <div className='row'>
          <div className='col-8'>
            <div className='checkbox icheck'>
              <label>
                <input type='checkbox' /> Remember Me
              </label>
            </div>
          </div>
          {/* <!-- /.col --> */}
          <div className='col-xs-4'>
            <button type='submit' className='btn btn-primary btn-block btn-flat' disabled={signIn.isRunning}>Sign In</button>
          </div>
          {/* <!-- /.col --> */}
        </div>
        {signInFailedMessage}
      </form>
    )
  }
}

// Decorate the form component
SignInForm = reduxForm({
  form: 'SignIn', // a unique name for this form
  validate,                // <--- validation function given to redux-form
  warn                     // <--- warning function given to redux-form
})(SignInForm)

export default SignInForm
