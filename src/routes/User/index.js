import { injectReducer } from '../../store/reducers'

export default (store) => {
  const authenticate = (nextState, transition) => {
    // if router not home "/" check authenticate
    if (nextState.location.pathname !== '/') {
      let { app } = store.getState()
      if (!app || !app.acceptToken) {
        transition('/signin')
      }
    }
  }
  return {
    onEnter: authenticate,
    path : 'users',
    /*  Async getComponent is only invoked when route matches   */
    getComponent (nextState, cb) {
      /*  Webpack - use 'require.ensure' to create a split point
       and embed an async module loader (jsonp) when bundling   */
      require.ensure([], (require) => {
        /*  Webpack - use require callback to define
         dependencies for bundling   */
        const User = require('./containers/UserContainer').default
        const reducer = require('./modules/user').default/*  Add the reducer to the store on key 'vendor'  */
        injectReducer(store, { key: 'user', reducer })

        /*  Return getComponent   */
        cb(null, User)
        /* Webpack named bundle   */
      }, 'user')
    }
  }
}
