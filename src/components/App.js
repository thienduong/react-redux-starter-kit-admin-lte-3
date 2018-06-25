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
    debugger
    return (
      <Provider store={this.props.store}>
        <div style={{ height: '100%' }} className={'sidebar-mini ' +
        (this.props.menuCollapse.isCollapse === false ? '' : 'sidebar-collapse')}>
          <Router history={browserHistory}  children={this.props.routes} />
          <Loading />
        </div>
      </Provider>
    )
  }
}
const mapStateToProps = (state) => ({

  menuCollapse : state.menu
})

export default connect(mapStateToProps)(App)


