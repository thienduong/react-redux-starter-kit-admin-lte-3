import React from 'react'
import { browserHistory, Router } from 'react-router'
import { connect, Provider } from 'react-redux'
import PropTypes from 'prop-types'
import Loading from '../components/Loading/Loading'

class HelperWrapper extends React.Component {
  render () {
    let { browserHistory, routes, menuState } = this.props;
    return (
      <div style={{ height: '100%' }} className={'sidebar-mini ' +
      (menuState.isCollapse === false ? '' : 'sidebar-collapse') +
      (menuState.isControl === false ? '' : 'control-sidebar-slide-open')}>
        <Router history={browserHistory} children={routes} />
        <Loading />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    menuState : state.menu
  }
}

const ConnectedHelperWrapper = connect(mapStateToProps)(HelperWrapper)

class App extends React.Component {
  static propTypes = {
    store: PropTypes.object.isRequired,
    routes: PropTypes.array.isRequired,
  }

  shouldComponentUpdate () {
    return false
  }

  render () {
    const { routes, store } = this.props
    return (
      <Provider store={this.props.store} >
        <ConnectedHelperWrapper browserHistory={browserHistory} routes={routes} store={store} />
      </Provider>

    )
  }
}

export default App
