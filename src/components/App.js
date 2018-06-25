import React from 'react'
import { browserHistory, Router } from 'react-router'
import {connect, Provider} from 'react-redux'
import PropTypes from 'prop-types'
import Loading from '../components/Loading/Loading'

class App extends React.Component {
  static propTypes = {
    store: PropTypes.object.isRequired,
    routes: PropTypes.array.isRequired,
  }

  shouldComponentUpdate () {
    return false
  }

  render () {
    return (
      <Provider store={this.props.store}>
        <div style={{ height: '100%' }} className={'sidebar-mini ' +
        (this.props.menuState.isCollapse === false ? '' : 'sidebar-collapse') +
        (this.props.menuState.isControl === false ? '' : 'control-sidebar-slide-open')}>
          <Router history={browserHistory}  children={this.props.routes} />
          <Loading />
        </div>
      </Provider>
    )
  }
}
const mapStateToProps = (state) => ({

  menuState : state.menu
})

export default connect(mapStateToProps)(App)

