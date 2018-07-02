// We only need to import the modules necessary for initial render
import PageLayout from '../layouts/PageLayout/PageLayout'
import CommonLayout from '../layouts/CommonLayout/CommonLayout'
import Home from './Home'
import CounterRoute from './Counter'
import ProductRoute from './Product'
import SignInRoute from './SignIn'
import UserRoute from './User'

/*  Note: Instead of using JSX, we recommend using react-router
    PlainRoute objects to build route definitions.   */

export const createRoutes = (store) => {
  const authenticate = (nextState, transition) => {
    // if router not home "/" check authenticate
    document.getElementById('_body').classList.add('sidebar-mini')
    if (nextState.location.pathname !== '/') {
      let { app } = store.getState()
      if (!app || !app.acceptToken) {
        transition('/signin')
      }
    }
  }

  const onLeave = (nextState, transition) => {
    document.getElementById('_body').classList.remove('sidebar-mini')
  }

  return [
    {
      path: '/',
      onEnter: authenticate,
      onLeave: onLeave,
      component: PageLayout,
      indexRoute: Home,
      childRoutes: [
        CounterRoute(store),
        ProductRoute(store),
        UserRoute(store),
      ]
    },
    {

      path: '/signin',
      component: CommonLayout,
      indexRoute: SignInRoute(store)
    }
  ]
}

/*  Note: childRoutes can be chunked or otherwise loaded programmatically
    using getChildRoutes with the following signature:

    getChildRoutes (location, cb) {
      require.ensure([], (require) => {
        cb(null, [
          // Remove imports!
          require('./Counter').default(store)
        ])
      })
    }

    However, this is not necessary for code-splitting! It simply provides
    an API for async route definitions. Your code splitting should occur
    inside the route `getComponent` function, since it is only invoked
    when the route exists and matches.
*/

export default createRoutes
