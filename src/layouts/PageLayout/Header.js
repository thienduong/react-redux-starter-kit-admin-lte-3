import React from 'react'
import { Link } from 'react-router'

import {
  expandCollapseMenu,
  controlMenu,
  BG_PRIMARY,
  BG_INFO,
  BG_SUCCESS,
  BG_DANGER, BG_WHITE, BG_GREY_LIGHT, BG_WARNING
} from '../../components/AppUIReducer'
import { connect } from 'react-redux'

class Header extends React.Component {
  constructor (props) {
    super(props)
  };

  render () {
    const { dispatch, appUIState } = this.props
    var classColor = 'main-header navbar navbar-expand '

    if (appUIState.variantNavbar === BG_PRIMARY) {
      classColor += 'navbar-dark bg-primary'
    } else if (appUIState.variantNavbar === BG_INFO) {
      classColor += 'navbar-dark bg-info'
    } else if (appUIState.variantNavbar === BG_SUCCESS) {
      classColor += 'navbar-dark bg-success'
    } else if (appUIState.variantNavbar === BG_DANGER) {
      classColor += 'navbar-dark bg-danger'
    } else if (appUIState.variantNavbar === BG_WHITE) {
      classColor += 'navbar-light bg-white'
    } else if (appUIState.variantNavbar === BG_GREY_LIGHT) {
      classColor += 'navbar-light bg-gray-light'
    } else if (appUIState.variantNavbar === BG_WARNING) {
      classColor += 'navbar-light bg-warning'
    } else { classColor += 'bg-white navbar-light' }

    classColor += (appUIState.checkBorder === true ? '' : ' border-bottom')

    return (

      <nav className={classColor}>
        <ul className='navbar-nav'>
          <li className='nav-item'>
            <a className='nav-link' onClick={() => dispatch(expandCollapseMenu())}>
              <i className='fa fa-bars' />
            </a>
          </li>
          <li className='nav-item d-none d-sm-inline-block'>
            <a href='index3.html' className='nav-link'>Home</a>
          </li>
          <li className='nav-item d-none d-sm-inline-block'>
            <a href='#' className='nav-link'>Contact</a>
          </li>
          <Link to='/signin' className='nav-link'>SignIn</Link>
          <Link to='/users' className='nav-link'>User</Link>
          <Link to='/products' className='nav-link'>Product</Link>
        </ul>


        {/* // <!-- SEARCH FORM --> */}
        <form className='form-inline ml-3'>
          <div className='input-group input-group-sm'>
            <input className='form-control form-control-navbar' type='search' placeholder='Search'
              aria-label='Search' />
            <div className='input-group-append'>
              <button className='btn btn-navbar' type='submit'>
                <i className='fa fa-search' />
              </button>
            </div>
          </div>
        </form>

        {/* // <!-- Right navbar links --> */}
        <ul className='navbar-nav ml-auto'>
          {/* // <!-- Messages Dropdown Menu --> */}
          <li className='nav-item dropdown'>
            <a className='nav-link' data-toggle='dropdown' href='#'>
              <i className='fa fa-comments-o' />
              <span className='badge badge-danger navbar-badge'>3</span>
            </a>
            <div className='dropdown-menu dropdown-menu-lg dropdown-menu-right'>
              <a href='#' className='dropdown-item'>
                {/* // <!-- Message Start --> */}
                <div className='media'>
                  <img src='dist/img/user1-128x128.jpg' alt='User Avatar' className='img-size-50 mr-3 img-circle' />
                  <div className='media-body'>
                    <h3 className='dropdown-item-title'>
                        Brad Diesel
                      <span className='float-right text-sm text-danger'><i className='fa fa-star' /></span>
                    </h3>
                    <p className='text-sm'>Call me whenever you can...</p>
                    <p className='text-sm text-muted'><i className='fa fa-clock-o mr-1' /> 4 Hours Ago</p>
                  </div>
                </div>
                {/* // <!-- Message End --> */}
              </a>
              <div className='dropdown-divider' />
              <a href='#' className='dropdown-item'>
                {/* // <!-- Message Start --> */}
                <div className='media'>
                  <img src='dist/img/user8-128x128.jpg' alt='User Avatar' className='img-size-50 img-circle mr-3' />
                  <div className='media-body'>
                    <h3 className='dropdown-item-title'>
                        John Pierce
                      <span className='float-right text-sm text-muted'><i className='fa fa-star' /></span>
                    </h3>
                    <p className='text-sm'>I got your message bro</p>
                    <p className='text-sm text-muted'><i className='fa fa-clock-o mr-1' /> 4 Hours Ago</p>
                  </div>
                </div>
                {/* // <!-- Message End --> */}
              </a>
              <div className='dropdown-divider' />
              <a href='#' className='dropdown-item'>
                {/* // <!-- Message Start --> */}
                <div className='media'>
                  <img src='dist/img/user3-128x128.jpg' alt='User Avatar' className='img-size-50 img-circle mr-3' />
                  <div className='media-body'>
                    <h3 className='dropdown-item-title'>
                        Nora Silvester
                      <span className='float-right text-sm text-warning'><i className='fa fa-star' /></span>
                    </h3>
                    <p className='text-sm'>The subject goes here</p>
                    <p className='text-sm text-muted'><i className='fa fa-clock-o mr-1' /> 4 Hours Ago</p>
                  </div>
                </div>
                {/* // <!-- Message End --> */}
              </a>
              <div className='dropdown-divider' />
              <a href='#' className='dropdown-item dropdown-footer'>See All Messages</a>
            </div>
          </li>
          {/* // <!-- Notifications Dropdown Menu --> */}
          <li className='nav-item dropdown'>
            <a className='nav-link' data-toggle='dropdown' href='#'>
              <i className='fa fa-bell-o' />
              <span className='badge badge-warning navbar-badge'>15</span>
            </a>
            <div className='dropdown-menu dropdown-menu-lg dropdown-menu-right'>
              <span className='dropdown-item dropdown-header'>15 Notifications</span>
              <div className='dropdown-divider' />
              <a href='#' className='dropdown-item'>
                <i className='fa fa-envelope mr-2' /> 4 new messages
                <span className='float-right text-muted text-sm'>3 mins</span>
              </a>
              <div className='dropdown-divider' />
              <a href='#' className='dropdown-item'>
                <i className='fa fa-users mr-2' /> 8 friend requests
                <span className='float-right text-muted text-sm'>12 hours</span>
              </a>
              <div className='dropdown-divider' />
              <a href='#' className='dropdown-item'>
                <i className='fa fa-file mr-2' /> 3 new reports
                <span className='float-right text-muted text-sm'>2 days</span>
              </a>
              <div className='dropdown-divider' />
              <a href='#' className='dropdown-item dropdown-footer'>See All Notifications</a>
            </div>
          </li>
          <li className='nav-item'>
            <a className='nav-link' onClick={() => dispatch(controlMenu())}><i
              className='fa fa-th-large' /></a>
          </li>
        </ul>
      </nav>

    )
  }
  }

const mapStateToProps = (state) => ({

  appUIState : state.appUIState
})
export default connect(mapStateToProps)(Header)
