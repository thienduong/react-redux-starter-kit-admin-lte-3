import React from 'react'
import { browserHistory, Router } from 'react-router'
import { connect, Provider } from 'react-redux'
import PropTypes from 'prop-types'
import Loading from '../components/Loading/Loading'
import ControlSidebar from '../layouts/PageLayout/ControlSidebar'

class HelperWrapper extends React.Component {
  render () {
    let { browserHistory, routes, appUIState } = this.props
    let classControl = 'sidebar-mini ' + (appUIState.isCollapseMenu === false ? '' : 'sidebar-collapse ') +
        (appUIState.isCollapseControlSlidebar === false ? '' : 'control-sidebar-slide-open')
    return (
      <div style={{ height: '100%' }} className={classControl}>
        <Router history={browserHistory} children={routes} />
        <Loading />
        <ControlSidebar />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    appUIState : state.appUIState
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
