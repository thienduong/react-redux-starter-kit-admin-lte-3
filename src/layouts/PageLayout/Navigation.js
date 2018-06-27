import React from 'react'
import { connect } from 'react-redux'
import {
  BG_DANGER,
  BG_GREY_LIGHT,
  BG_INFO,
  BG_PRIMARY,
  BG_SUCCESS,
  BG_WARNING,
  BG_WHITE, CHARTS,
  CLEAR_LOGO_COLOR,
  CUSTOM_BRANDLOGO_VARIANTS,
  CUSTOM_DARKSIDEBAR_VARIANTS,
  CUSTOM_LIGHTSIDEBAR_VARIANTS,
  DASHBOARD, EXTRAS, MAILBOX, PAGES, FORMS,
  showHideMenu, TABLES, UI_ELEMENTS
} from '../../components/AppUIReducer'
import ControlSidebar from './ControlSidebar'

class Navigation extends React.Component {
  constructor (props) {
    super(props)
  }

;

  // componentDidMount () {
  //   let _this = this
  //   $(document).on('click', '.sidebar li a', function (e) {
  //     // Get the clicked link and the next element
  //     var $this = $(this)
  //     var checkElement = $this.next()
  //
  //     // Check if the next element is a menu and is visible
  //     if ((checkElement.is('.treeview-menu')) && (checkElement.is(':visible'))) {
  //       // Close the menu
  //       checkElement.slideUp(500, function () {
  //         checkElement.removeClass('menu-open')
  //         // Fix the layout in case the sidebar stretches over the height of the window
  //         // _this.layout.fix();
  //       })
  //       checkElement.parent('li').removeClass('active')
  //     }
  //     // If the menu is not visible
  //     else if ((checkElement.is('.treeview-menu')) && (!checkElement.is(':visible'))) {
  //       // Get the parent menu
  //       var parent = $this.parents('ul').first()
  //       // Close all open menus within the parent
  //       var ul = parent.find('ul:visible').slideUp(500)
  //       // Remove the menu-open class from the parent
  //       ul.removeClass('menu-open')
  //       // Get the parent li
  //       var parent_li = $this.parent('li')
  //
  //       // Open the target menu and add the menu-open class
  //       checkElement.slideDown(500, function () {
  //         // Add the class active to the parent li
  //         checkElement.addClass('menu-open')
  //         parent.find('li.active').removeClass('active')
  //         parent_li.addClass('active')
  //         // Fix the layout in case the sidebar stretches over the height of the window
  //         _this.fix()
  //       })
  //     }
  //     // if this isn't a link, prevent the page from being redirected
  //     if (checkElement.is('.treeview-menu')) {
  //       e.preventDefault()
  //     }
  //   })
  // }
  //
  // fix () {
  //   // Get window height and the wrapper height
  //   var neg = $('.main-header').outerHeight() + $('.main-footer').outerHeight()
  //   var window_height = $(window).height()
  //   var sidebar_height = $('.sidebar').height()
  //   // Set the min-height of the content and sidebar based on the
  //   // the height of the document.
  //   if ($('body').hasClass('fixed')) {
  //     $('.content-wrapper, .right-side').css('min-height', window_height - $('.main-footer').outerHeight())
  //   } else {
  //     var postSetWidth
  //     if (window_height >= sidebar_height) {
  //       $('.content-wrapper, .right-side').css('min-height', window_height - neg)
  //       postSetWidth = window_height - neg
  //     } else {
  //       $('.content-wrapper, .right-side').css('min-height', sidebar_height)
  //       postSetWidth = sidebar_height
  //     }
  //
  //     // Fix for the control sidebar height
  //     var controlSidebar = $('.control-sidebar')
  //     if (typeof controlSidebar !== 'undefined') {
  //       if (controlSidebar.height() > postSetWidth) { $('.content-wrapper, .right-side').css('min-height', controlSidebar.height()) }
  //     }
  //   }
  // };

  render () {
    const { dispatch, appUIState } = this.props
    var classColor = 'main-sidebar elevation-4 '
    var classLogoColor = 'brand-link '
    var classNameTreeViewDasboard = 'nav-item has-treeview ' + (appUIState.dasboard === false ? '' : 'menu-open')
    var classNameDisplayDasboard = 'nav nav-treeview d' + (appUIState.dasboard === false ? '-none' : '-block')
    var classNameTreeViewCharts = 'nav-item has-treeview ' + (appUIState.charts === false ? '' : 'menu-open')
    var classNameDisplayCharts = 'nav nav-treeview d' + (appUIState.charts === false ? '-none' : '-block')
    var classNameTreeViewUIElements = 'nav-item has-treeview ' + (appUIState.uiElements === false ? '' : 'menu-open')
    var classNameDisplayUIElements = 'nav nav-treeview d' + (appUIState.uiElements === false ? '-none' : '-block')
    var classNameTreeViewForms = 'nav-item has-treeview ' + (appUIState.forms === false ? '' : 'menu-open')
    var classNameDisplayForms = 'nav nav-treeview d' + (appUIState.forms === false ? '-none' : '-block')
    var classNameTreeViewTables = 'nav-item has-treeview ' + (appUIState.tables === false ? '' : 'menu-open')
    var classNameDisplayTables = 'nav nav-treeview d' + (appUIState.tables === false ? '-none' : '-block')
    var classNameTreeViewMailBox = 'nav-item has-treeview ' + (appUIState.mailbox === false ? '' : 'menu-open')
    var classNameDisplayMailBox = 'nav nav-treeview d' + (appUIState.mailbox === false ? '-none' : '-block')
    var classNameTreeViewPages = 'nav-item has-treeview ' + (appUIState.pages === false ? '' : 'menu-open')
    var classNameDisplayPages = 'nav nav-treeview d' + (appUIState.pages === false ? '-none' : '-block')
    var classNameTreeViewExtras = 'nav-item has-treeview ' + (appUIState.extras === false ? '' : 'menu-open')
    var classNameDisplayExtras = 'nav nav-treeview d' + (appUIState.extras === false ? '-none' : '-block')

    if (appUIState.darkLightColorSidebar === BG_PRIMARY && appUIState.typeCustom === CUSTOM_DARKSIDEBAR_VARIANTS) {
      classColor += 'sidebar-dark-primary'
    } else if (appUIState.darkLightColorSidebar === BG_INFO && appUIState.typeCustom === CUSTOM_DARKSIDEBAR_VARIANTS) {
      classColor += 'sidebar-dark-info'
    } else if (appUIState.darkLightColorSidebar === BG_SUCCESS && appUIState.typeCustom === CUSTOM_DARKSIDEBAR_VARIANTS) {
      classColor += 'sidebar-dark-success'
    } else if (appUIState.darkLightColorSidebar === BG_DANGER && appUIState.typeCustom === CUSTOM_DARKSIDEBAR_VARIANTS) {
      classColor += 'sidebar-dark-danger'
    } else if (appUIState.darkLightColorSidebar === BG_WARNING && appUIState.typeCustom === CUSTOM_DARKSIDEBAR_VARIANTS) {
      classColor += 'sidebar-dark-warning'
    } else if (appUIState.darkLightColorSidebar === BG_PRIMARY && appUIState.typeCustom === CUSTOM_LIGHTSIDEBAR_VARIANTS) {
      classColor += 'sidebar-light-primary'
    } else if (appUIState.darkLightColorSidebar === BG_INFO && appUIState.typeCustom === CUSTOM_LIGHTSIDEBAR_VARIANTS) {
      classColor += 'sidebar-light-info'
    } else if (appUIState.darkLightColorSidebar === BG_SUCCESS && appUIState.typeCustom === CUSTOM_LIGHTSIDEBAR_VARIANTS) {
      classColor += 'sidebar-light-success'
    } else if (appUIState.darkLightColorSidebar === BG_DANGER && appUIState.typeCustom === CUSTOM_LIGHTSIDEBAR_VARIANTS) {
      classColor += 'sidebar-light-danger'
    } else if (appUIState.darkLightColorSidebar === BG_WARNING && appUIState.typeCustom === CUSTOM_LIGHTSIDEBAR_VARIANTS) {
      classColor += 'sidebar-light-warning'
    } else { classColor += 'sidebar-dark-primary' }

    if (appUIState.brandLogoColorSidebar === BG_PRIMARY) {
      classLogoColor += 'bg-primary'
    } else if (appUIState.brandLogoColorSidebar === BG_INFO) {
      classLogoColor += 'bg-info'
    } else if (appUIState.brandLogoColorSidebar === BG_SUCCESS) {
      classLogoColor += 'bg-success'
    } else if (appUIState.brandLogoColorSidebar === BG_DANGER) {
      classLogoColor += 'bg-danger'
    } else if (appUIState.brandLogoColorSidebar === BG_WARNING) {
      classLogoColor += 'bg-warning'
    } else if (appUIState.brandLogoColorSidebar === BG_WHITE) {
      classLogoColor += 'bg-white'
    } else if (appUIState.brandLogoColorSidebar === BG_GREY_LIGHT) {
      classLogoColor += 'bg-gray-light'
    } else { classLogoColor }
    return (
      // <!-- Main Sidebar Container -->
      <aside className={classColor}>
        {/* // <!-- Brand Logo --> */}
        <a href='index3.html' className={classLogoColor}>
          <img src='dist/img/AdminLTELogo.png' alt='AdminLTE Logo' className='brand-image img-circle elevation-3'
            style={{ 'opacity': '.8' }} />
          <span className='brand-text font-weight-light'>AdminLTE 3</span>
        </a>

        {/* // <!-- Sidebar --> */}
        <div className='sidebar'>
          {/* // <!-- Sidebar user panel (optional) --> */}
          <div className='user-panel mt-3 pb-3 mb-3 d-flex'>
            <div className='image'>
              <img src='dist/img/user2-160x160.jpg' className='img-circle elevation-2' alt='User Image' />
            </div>
            <div className='info'>
              <a href='#' className='d-block'>Alexander Pierce</a>
            </div>
          </div>

          {/* // <!-- Sidebar Menu --> */}
          <nav className='mt-2'>
            <ul className='nav nav-pills nav-sidebar flex-column' data-widget='treeview' role='menu' data-accordion='false'>
              {/* // <!-- Add icons to the links using the .nav-icon class with font-awesome or any other icon font library --> */}
              <li className={classNameTreeViewDasboard}>
                <a className='nav-link active' onClick={() => dispatch(showHideMenu(DASHBOARD))}>
                  <i className='nav-icon fa fa-dashboard' />
                  <p>
                    Dashboard
                    <i className='right fa fa-angle-left' />
                  </p>
                </a>
                <ul className={classNameDisplayDasboard}>
                  <li className='nav-item'>
                    <a href='./index.html' className='nav-link active'>
                      <i className='fa fa-circle-o nav-icon' />
                      <p>Dashboard v1</p>
                    </a>
                  </li>
                  <li className='nav-item'>
                    <a href='./index2.html' className='nav-link'>
                      <i className='fa fa-circle-o nav-icon' />
                      <p>Dashboard v2</p>
                    </a>
                  </li>
                  <li className='nav-item'>
                    <a href='./index3.html' className='nav-link'>
                      <i className='fa fa-circle-o nav-icon' />
                      <p>Dashboard v3</p>
                    </a>
                  </li>
                </ul>
              </li>
              <li className='nav-item'>
                <a href='pages/widgets.html' className='nav-link' >
                  <i className='nav-icon fa fa-th' />
                  <p>
                    Widgets
                    <span className='right badge badge-danger'>New</span>
                  </p>
                </a>
              </li>
              <li className={classNameTreeViewCharts}>
                <a href='#' className='nav-link' onClick={() => dispatch(showHideMenu(CHARTS))}>
                  <i className='nav-icon fa fa-pie-chart' />
                  <p>
                    Charts
                    <i className='right fa fa-angle-left' />
                  </p>
                </a>
                <ul className={classNameDisplayCharts}>
                  <li className='nav-item'>
                    <a href='pages/charts/chartjs.html' className='nav-link'>
                      <i className='fa fa-circle-o nav-icon' />
                      <p>ChartJS</p>
                    </a>
                  </li>
                  <li className='nav-item'>
                    <a href='pages/charts/flot.html' className='nav-link'>
                      <i className='fa fa-circle-o nav-icon' />
                      <p>Flot</p>
                    </a>
                  </li>
                  <li className='nav-item'>
                    <a href='pages/charts/inline.html' className='nav-link'>
                      <i className='fa fa-circle-o nav-icon' />
                      <p>Inline</p>
                    </a>
                  </li>
                </ul>
              </li>
              <li className={classNameTreeViewUIElements}>
                <a href='#' className='nav-link' onClick={() => dispatch(showHideMenu(UI_ELEMENTS))}>
                  <i className='nav-icon fa fa-tree' />
                  <p>
                    UI Elements
                    <i className='fa fa-angle-left right' />
                  </p>
                </a>
                <ul className={classNameDisplayUIElements}>
                  <li className='nav-item'>
                    <a href='pages/UI/general.html' className='nav-link'>
                      <i className='fa fa-circle-o nav-icon' />
                      <p>General</p>
                    </a>
                  </li>
                  <li className='nav-item'>
                    <a href='pages/UI/icons.html' className='nav-link'>
                      <i className='fa fa-circle-o nav-icon' />
                      <p>Icons</p>
                    </a>
                  </li>
                  <li className='nav-item'>
                    <a href='pages/UI/buttons.html' className='nav-link'>
                      <i className='fa fa-circle-o nav-icon' />
                      <p>Buttons</p>
                    </a>
                  </li>
                  <li className='nav-item'>
                    <a href='pages/UI/sliders.html' className='nav-link'>
                      <i className='fa fa-circle-o nav-icon' />
                      <p>Sliders</p>
                    </a>
                  </li>
                </ul>
              </li>
              <li className={classNameTreeViewForms}>
                <a href='#' className='nav-link' onClick={() => dispatch(showHideMenu(FORMS))}>
                  <i className='nav-icon fa fa-edit' />
                  <p>
                    Forms
                    <i className='fa fa-angle-left right' />
                  </p>
                </a>
                <ul className={classNameDisplayForms}>
                  <li className='nav-item'>
                    <a href='pages/forms/general.html' className='nav-link'>
                      <i className='fa fa-circle-o nav-icon' />
                      <p>General Elements</p>
                    </a>
                  </li>
                  <li className='nav-item'>
                    <a href='pages/forms/advanced.html' className='nav-link'>
                      <i className='fa fa-circle-o nav-icon' />
                      <p>Advanced Elements</p>
                    </a>
                  </li>
                  <li className='nav-item'>
                    <a href='pages/forms/editors.html' className='nav-link'>
                      <i className='fa fa-circle-o nav-icon' />
                      <p>Editors</p>
                    </a>
                  </li>
                </ul>
              </li>
              <li className={classNameTreeViewTables}>
                <a href='#' className='nav-link' onClick={() => dispatch(showHideMenu(TABLES))}>
                  <i className='nav-icon fa fa-table' />
                  <p>
                    Tables
                    <i className='fa fa-angle-left right' />
                  </p>
                </a>
                <ul className={classNameDisplayTables}>
                  <li className='nav-item'>
                    <a href='pages/tables/simple.html' className='nav-link'>
                      <i className='fa fa-circle-o nav-icon' />
                      <p>Simple Tables</p>
                    </a>
                  </li>
                  <li className='nav-item'>
                    <a href='pages/tables/data.html' className='nav-link'>
                      <i className='fa fa-circle-o nav-icon' />
                      <p>Data Tables</p>
                    </a>
                  </li>
                </ul>
              </li>
              <li className='nav-header'>EXAMPLES</li>
              <li className='nav-item'>
                <a href='pages/calendar.html' className='nav-link'>
                  <i className='nav-icon fa fa-calendar' />
                  <p>
                    Calendar
                    <span className='badge badge-info right'>2</span>
                  </p>
                </a>
              </li>
              <li className={classNameTreeViewMailBox}>
                <a href='#' className='nav-link' onClick={() => dispatch(showHideMenu(MAILBOX))}>
                  <i className='nav-icon fa fa-envelope-o' />
                  <p>
                    Mailbox
                    <i className='fa fa-angle-left right' />
                  </p>
                </a>
                <ul className={classNameDisplayMailBox}>
                  <li className='nav-item'>
                    <a href='pages/mailbox/mailbox.html' className='nav-link'>
                      <i className='fa fa-circle-o nav-icon' />
                      <p>Inbox</p>
                    </a>
                  </li>
                  <li className='nav-item'>
                    <a href='pages/mailbox/compose.html' className='nav-link'>
                      <i className='fa fa-circle-o nav-icon' />
                      <p>Compose</p>
                    </a>
                  </li>
                  <li className='nav-item'>
                    <a href='pages/mailbox/read-mail.html' className='nav-link'>
                      <i className='fa fa-circle-o nav-icon' />
                      <p>Read</p>
                    </a>
                  </li>
                </ul>
              </li>
              <li className={classNameTreeViewPages}>
                <a href='#' className='nav-link' onClick={() => dispatch(showHideMenu(PAGES))}>
                  <i className='nav-icon fa fa-book' />
                  <p>
                    Pages
                    <i className='fa fa-angle-left right' />
                  </p>
                </a>
                <ul className={classNameDisplayPages}>
                  <li className='nav-item'>
                    <a href='pages/examples/invoice.html' className='nav-link'>
                      <i className='fa fa-circle-o nav-icon' />
                      <p>Invoice</p>
                    </a>
                  </li>
                  <li className='nav-item'>
                    <a href='pages/examples/profile.html' className='nav-link'>
                      <i className='fa fa-circle-o nav-icon' />
                      <p>Profile</p>
                    </a>
                  </li>
                  <li className='nav-item'>
                    <a href='pages/examples/login.html' className='nav-link'>
                      <i className='fa fa-circle-o nav-icon' />
                      <p>Login</p>
                    </a>
                  </li>
                  <li className='nav-item'>
                    <a href='pages/examples/register.html' className='nav-link'>
                      <i className='fa fa-circle-o nav-icon' />
                      <p>Register</p>
                    </a>
                  </li>
                  <li className='nav-item'>
                    <a href='pages/examples/lockscreen.html' className='nav-link'>
                      <i className='fa fa-circle-o nav-icon' />
                      <p>Lockscreen</p>
                    </a>
                  </li>
                </ul>
              </li>
              <li className={classNameTreeViewExtras}>
                <a href='#' className='nav-link' onClick={() => dispatch(showHideMenu(EXTRAS))}>
                  <i className='nav-icon fa fa-plus-square-o' />
                  <p>
                    Extras
                    <i className='fa fa-angle-left right' />
                  </p>
                </a>
                <ul className={classNameDisplayExtras}>
                  <li className='nav-item'>
                    <a href='pages/examples/404.html' className='nav-link'>
                      <i className='fa fa-circle-o nav-icon' />
                      <p>Error 404</p>
                    </a>
                  </li>
                  <li className='nav-item'>
                    <a href='pages/examples/500.html' className='nav-link'>
                      <i className='fa fa-circle-o nav-icon' />
                      <p>Error 500</p>
                    </a>
                  </li>
                  <li className='nav-item'>
                    <a href='pages/examples/blank.html' className='nav-link'>
                      <i className='fa fa-circle-o nav-icon' />
                      <p>Blank Page</p>
                    </a>
                  </li>
                  <li className='nav-item'>
                    <a href='starter.html' className='nav-link'>
                      <i className='fa fa-circle-o nav-icon' />
                      <p>Starter Page</p>
                    </a>
                  </li>
                </ul>
              </li>
              <li className='nav-header'>MISCELLANEOUS</li>
              <li className='nav-item'>
                <a href='https://adminlte.io/docs' className='nav-link'>
                  <i className='nav-icon fa fa-file' />
                  <p>Documentation</p>
                </a>
              </li>
              <li className='nav-header'>LABELS</li>
              <li className='nav-item'>
                <a href='#' className='nav-link'>
                  <i className='nav-icon fa fa-circle-o text-danger' />
                  <p className='text'>Important</p>
                </a>
              </li>
              <li className='nav-item'>
                <a href='#' className='nav-link'>
                  <i className='nav-icon fa fa-circle-o text-warning' />
                  <p>Warning</p>
                </a>
              </li>
              <li className='nav-item'>
                <a href='#' className='nav-link'>
                  <i className='nav-icon fa fa-circle-o text-info' />
                  <p>Informational</p>
                </a>
              </li>
            </ul>
          </nav>
          {/* // <!-- /.sidebar-menu --> */}
        </div>

        {/* // <!-- /.sidebar --> */}

      </aside>

    )
  };

  // render() {
  //   return (
  //     <aside className='main-sidebar'>
  //       {/* <!-- sidebar: style can be found in sidebar.less --> */}
  //       <section className='sidebar'>
  //         {/* <!-- Sidebar user panel --> */}
  //         <div className='user-panel'>
  //           <div className='pull-left image'>
  //             <img src='dist/img/user2-160x160.jpg' className='img-circle' alt='User Image'/>
  //           </div>
  //
  //           <div className='pull-left info'>
  //             <p>Alexander Pierce</p>
  //             <a href='#'><i className='fa fa-circle text-success'></i> Online</a>
  //           </div>
  //         </div>
  //         {/* <!-- search form --> */}
  //         <form action='#' method='get' className='sidebar-form'>
  //           <div className='input-group'>
  //             <input type='text' name='q' className='form-control' placeholder='Search...'/>
  //             <span className='input-group-btn'>
  //               <button type='submit' name='search' id='search-btn' className='btn btn-flat'><i
  //                 className='fa fa-search'></i></button>
  //             </span>
  //           </div>
  //         </form>
  //         {/* <!-- /.search form --> */}
  //         {/* <!-- sidebar menu: : style can be found in sidebar.less --> */}
  //         <ul className='sidebar-menu'>
  //           <li className='header'>MAIN NAVIGATION</li>
  //           <li className='active treeview'>
  //             <a href='#'>
  //               <i className='fa fa-dashboard'></i> <span>Dashboard</span> <i
  //               className='fa fa-angle-left pull-right'></i>
  //             </a>
  //             <ul className='treeview-menu'>
  //               <li className='active'><a href='index.html'><i className='fa fa-circle-o'></i> Dashboard v1</a></li>
  //               <li><a href='index2.html'><i className='fa fa-circle-o'></i> Dashboard v2</a></li>
  //             </ul>
  //           </li>
  //           <li className='treeview'>
  //             <a href='#'>
  //               <i className='fa fa-files-o'></i>
  //               <span>Layout Options</span>
  //               <span className='label label-primary pull-right'>4</span>
  //             </a>
  //             <ul className='treeview-menu'>
  //               <li><a href='pages/layout/top-nav.html'><i className='fa fa-circle-o'></i> Top Navigation</a></li>
  //               <li><a href='pages/layout/boxed.html'><i className='fa fa-circle-o'></i> Boxed</a></li>
  //               <li><a href='pages/layout/fixed.html'><i className='fa fa-circle-o'></i> Fixed</a></li>
  //               <li><a href='pages/layout/collapsed-sidebar.html'><i className='fa fa-circle-o'></i> Collapsed
  //                 Sidebar</a></li>
  //             </ul>
  //           </li>
  //           <li>
  //             <a href='pages/widgets.html'>
  //               <i className='fa fa-th'></i> <span>Widgets</span>
  //               <small className='label pull-right bg-green'>new</small>
  //             </a>
  //           </li>
  //           <li className='treeview'>
  //             <a href='#'>
  //               <i className='fa fa-pie-chart'></i>
  //               <span>Charts</span>
  //               <i className='fa fa-angle-left pull-right'></i>
  //             </a>
  //             <ul className='treeview-menu'>
  //               <li><a href='pages/charts/chartjs.html'><i className='fa fa-circle-o'></i> ChartJS</a></li>
  //               <li><a href='pages/charts/morris.html'><i className='fa fa-circle-o'></i> Morris</a></li>
  //               <li><a href='pages/charts/flot.html'><i className='fa fa-circle-o'></i> Flot</a></li>
  //               <li><a href='pages/charts/inline.html'><i className='fa fa-circle-o'></i> Inline charts</a></li>
  //             </ul>
  //           </li>
  //           <li className='treeview'>
  //             <a href='#'>
  //               <i className='fa fa-laptop'></i>
  //               <span>UI Elements</span>
  //               <i className='fa fa-angle-left pull-right'></i>
  //             </a>
  //             <ul className='treeview-menu'>
  //               <li><a href='pages/UI/general.html'><i className='fa fa-circle-o'></i> General</a></li>
  //               <li><a href='pages/UI/icons.html'><i className='fa fa-circle-o'></i> Icons</a></li>
  //               <li><a href='pages/UI/buttons.html'><i className='fa fa-circle-o'></i> Buttons</a></li>
  //               <li><a href='pages/UI/sliders.html'><i className='fa fa-circle-o'></i> Sliders</a></li>
  //               <li><a href='pages/UI/timeline.html'><i className='fa fa-circle-o'></i> Timeline</a></li>
  //               <li><a href='pages/UI/modals.html'><i className='fa fa-circle-o'></i> Modals</a></li>
  //             </ul>
  //           </li>
  //           <li className='treeview'>
  //             <a href='#'>
  //               <i className='fa fa-edit'></i> <span>Forms</span>
  //               <i className='fa fa-angle-left pull-right'></i>
  //             </a>
  //             <ul className='treeview-menu'>
  //               <li><a href='pages/forms/general.html'><i className='fa fa-circle-o'></i> General Elements</a></li>
  //               <li><a href='pages/forms/advanced.html'><i className='fa fa-circle-o'></i> Advanced Elements</a></li>
  //               <li><a href='pages/forms/editors.html'><i className='fa fa-circle-o'></i> Editors</a></li>
  //             </ul>
  //           </li>
  //           <li className='treeview'>
  //             <a href='#'>
  //               <i className='fa fa-table'></i> <span>Tables</span>
  //               <i className='fa fa-angle-left pull-right'></i>
  //             </a>
  //             <ul className='treeview-menu'>
  //               <li><a href='pages/tables/simple.html'><i className='fa fa-circle-o'></i> Simple tables</a></li>
  //               <li><a href='pages/tables/data.html'><i className='fa fa-circle-o'></i> Data tables</a></li>
  //             </ul>
  //           </li>
  //           <li>
  //             <a href='pages/calendar.html'>
  //               <i className='fa fa-calendar'></i> <span>Calendar</span>
  //               <small className='label pull-right bg-red'>3</small>
  //             </a>
  //           </li>
  //           <li>
  //             <a href='pages/mailbox/mailbox.html'>
  //               <i className='fa fa-envelope'></i> <span>Mailbox</span>
  //               <small className='label pull-right bg-yellow'>12</small>
  //             </a>
  //           </li>
  //           <li className='treeview'>
  //             <a href='#'>
  //               <i className='fa fa-folder'></i> <span>Examples</span>
  //               <i className='fa fa-angle-left pull-right'></i>
  //             </a>
  //             <ul className='treeview-menu'>
  //               <li><a href='pages/examples/invoice.html'><i className='fa fa-circle-o'></i> Invoice</a></li>
  //               <li><a href='pages/examples/profile.html'><i className='fa fa-circle-o'></i> Profile</a></li>
  //               <li><a href='pages/examples/login.html'><i className='fa fa-circle-o'></i> Login</a></li>
  //               <li><a href='pages/examples/register.html'><i className='fa fa-circle-o'></i> Register</a></li>
  //               <li><a href='pages/examples/lockscreen.html'><i className='fa fa-circle-o'></i> Lockscreen</a></li>
  //               <li><a href='pages/examples/404.html'><i className='fa fa-circle-o'></i> 404 Error</a></li>
  //               <li><a href='pages/examples/500.html'><i className='fa fa-circle-o'></i> 500 Error</a></li>
  //               <li><a href='pages/examples/blank.html'><i className='fa fa-circle-o'></i> Blank Page</a></li>
  //             </ul>
  //           </li>
  //           <li className='treeview'>
  //             <a href='#'>
  //               <i className='fa fa-share'></i> <span>Multilevel</span>
  //               <i className='fa fa-angle-left pull-right'></i>
  //             </a>
  //             <ul className='treeview-menu'>
  //               <li><a href='#'><i className='fa fa-circle-o'></i> Level One</a></li>
  //               <li>
  //                 <a href='#'><i className='fa fa-circle-o'></i> Level One <i
  //                   className='fa fa-angle-left pull-right'></i></a>
  //                 <ul className='treeview-menu'>
  //                   <li><a href='#'><i className='fa fa-circle-o'></i> Level Two</a></li>
  //                   <li>
  //                     <a href='#'><i className='fa fa-circle-o'></i> Level Two <i
  //                       className='fa fa-angle-left pull-right'></i></a>
  //                     <ul className='treeview-menu'>
  //                       <li><a href='#'><i className='fa fa-circle-o'></i> Level Three</a></li>
  //                       <li><a href='#'><i className='fa fa-circle-o'></i> Level Three</a></li>
  //                     </ul>
  //                   </li>
  //                 </ul>
  //               </li>
  //               <li><a href='#'><i className='fa fa-circle-o'></i> Level One</a></li>
  //             </ul>
  //           </li>
  //           <li><a href='documentation/index.html'><i className='fa fa-book'></i> <span>Documentation</span></a></li>
  //           <li className='header'>LABELS</li>
  //           <li><a href='#'><i className='fa fa-circle-o text-red'></i> <span>Important</span></a></li>
  //           <li><a href='#'><i className='fa fa-circle-o text-yellow'></i> <span>Warning</span></a></li>
  //           <li><a href='#'><i className='fa fa-circle-o text-aqua'></i> <span>Information</span></a></li>
  //         </ul>
  //       </section>
  //       {/* <!-- /.sidebar --> */}
  //     </aside>
  //   );
  // }
}

const mapStateToProps = (state) => ({

  appUIState : state.appUIState
})

export default connect(mapStateToProps)(Navigation)
