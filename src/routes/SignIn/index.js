import { injectReducer } from '../../store/reducers'



export default (store) => {
  const onEnter = (nextState, transition) => {
    // if router not home "/" check authenticate
    if (nextState.location.pathname !== '/signin') {
      var element = document.getElementsByClassName('hold-transition');
      element.classList.add('login-page')
      }
    }
  }
export default (store) => {
  const onLeave = (nextState, transition) => {
    // if router not home "/" check authenticate
    if (nextState.location.pathname !== '/') {
      var element = document.getElementsByClassName('hold-transition');
      element.classList.remove('login-page')
    }
  }
}
export default (store) => ({
  /*  Async getComponent is only invoked when route matches   */
  getComponent (nextState, cb) {
    /*  Webpack - use 'require.ensure' to create a split point
        and embed an async module loader (jsonp) when bundling   */
    require.ensure([], (require) => {
      /*  Webpack - use require callback to define
          dependencies for bundling   */
      const SignIn = require('./containers/SignInContainer').default
      const reducer = require('./modules/SignInReducer').default

      /*  Add the reducer to the store on key 'counter'  */
      injectReducer(store, { key: 'signin', reducer })

      /*  Return getComponent   */
      cb(null, SignIn)

    /* Webpack named bundle   */
    }, 'SignIn')
  }
})
