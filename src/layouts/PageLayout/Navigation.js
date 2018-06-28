import React from 'react'
import { connect } from 'react-redux'
import {
  BG_DANGER,
  BG_GREY_LIGHT,
  BG_INFO,
  BG_PRIMARY,
  BG_SUCCESS,
  BG_WARNING,
  BG_WHITE,
  CUSTOM_DARKSIDEBAR_VARIANTS,
  CUSTOM_LIGHTSIDEBAR_VARIANTS,
} from '../../components/AppUIReducer'

class Navigation extends React.Component {
  constructor (props) {
    super(props)
  }

;

  componentDidMount () {
    (function (global, factory) {
      typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports)
        : typeof define === 'function' && define.amd ? define(['exports'], factory)
        : (factory((global.adminlte = {})))
    }(this, function (exports) {
      var classCallCheck = function (instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError('Cannot call a class as a function')
        }
      }
      var Treeview = (function ($) {
        /**
         * Constants
         * ====================================================
         */
        var NAME = 'Treeview'
        var DATA_KEY = 'lte.treeview'
        var EVENT_KEY = '.' + DATA_KEY
        var JQUERY_NO_CONFLICT = $.fn[NAME]
        var Event = {
          SELECTED: 'selected' + EVENT_KEY,
          EXPANDED: 'expanded' + EVENT_KEY,
          COLLAPSED: 'collapsed' + EVENT_KEY,
          LOAD_DATA_API: 'load' + EVENT_KEY
        }
        var Selector = {
          LI: '.nav-item',
          LINK: '.nav-link',
          TREEVIEW_MENU: '.nav-treeview',
          OPEN: '.menu-open',
          DATA_WIDGET: '[data-widget="treeview"]'
        }

        var ClassName = {
          LI: 'nav-item',
          LINK: 'nav-link',
          TREEVIEW_MENU: 'nav-treeview',
          OPEN: 'menu-open'
        }

        var Default = {
          trigger: Selector.DATA_WIDGET + ' ' + Selector.LINK,
          animationSpeed: 300,
          accordion: true
          /**
           * Class Definition
           * ====================================================
           */
        }
        var Treeview = (function () {
          function Treeview (element, config) {
            classCallCheck(this, Treeview)

            this._config = config
            this._element = element
          }
          // Public
          Treeview.prototype.init = function init () {
            this._setupListeners()
          }
          Treeview.prototype.expand = function expand (treeviewMenu, parentLi) {
            var _this = this
            var expandedEvent = $.Event(Event.EXPANDED)
            if (this._config.accordion) {
              var openMenuLi = parentLi.siblings(Selector.OPEN).first()
              var openTreeview = openMenuLi.find(Selector.TREEVIEW_MENU).first()
              this.collapse(openTreeview, openMenuLi)
            }
            treeviewMenu.slideDown(this._config.animationSpeed, function () {
              parentLi.addClass(ClassName.OPEN)
              $(_this._element).trigger(expandedEvent)
            })
          }
          Treeview.prototype.collapse = function collapse (treeviewMenu, parentLi) {
            var _this2 = this
            var collapsedEvent = $.Event(Event.COLLAPSED)
            treeviewMenu.slideUp(this._config.animationSpeed, function () {
              parentLi.removeClass(ClassName.OPEN)
              $(_this2._element).trigger(collapsedEvent)
              treeviewMenu.find(Selector.OPEN + ' > ' + Selector.TREEVIEW_MENU).slideUp()
              treeviewMenu.find(Selector.OPEN).removeClass(ClassName.OPEN)
            })
          }
          Treeview.prototype.toggle = function toggle (event) {
            var $relativeTarget = $(event.currentTarget)
            var treeviewMenu = $relativeTarget.next()
            if (!treeviewMenu.is(Selector.TREEVIEW_MENU)) {
              return
            }
            event.preventDefault()
            var parentLi = $relativeTarget.parents(Selector.LI).first()
            var isOpen = parentLi.hasClass(ClassName.OPEN)
            if (isOpen) {
              this.collapse($(treeviewMenu), parentLi)
            } else {
              this.expand($(treeviewMenu), parentLi)
            }
          }
          // Private
          Treeview.prototype._setupListeners = function _setupListeners () {
            var _this3 = this
            $(document).on('click', this._config.trigger, function (event) {
              _this3.toggle(event)
            })
          }
          // Static
          Treeview._jQueryInterface = function _jQueryInterface (config) {
            return this.each(function () {
              var data = $(this).data(DATA_KEY)
              var _config = $.extend({}, Default, $(this).data())
              if (!data) {
                data = new Treeview($(this), _config)
                $(this).data(DATA_KEY, data)
              }
              if (config === 'init') {
                data[config]()
              }
            })
          }
          return Treeview
        }())

        /**
         * Data API
         * ====================================================
         */
        $(window).on(Event.LOAD_DATA_API, function () {
          $(Selector.DATA_WIDGET).each(function () {
            Treeview._jQueryInterface.call($(this), 'init')
          })
        })
        /**
         * jQuery API
         * ====================================================
         */
        $.fn[NAME] = Treeview._jQueryInterface
        $.fn[NAME].Constructor = Treeview
        $.fn[NAME].noConflict = function () {
          $.fn[NAME] = JQUERY_NO_CONFLICT
          return Treeview._jQueryInterface
        }
        return Treeview
      }(jQuery))
    }))
  }

  render () {
    const { appUIState } = this.props
    var classColor = 'main-sidebar elevation-4 '
    var classLogoColor = 'brand-link '

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

        <a href='index3.html' className={classLogoColor}>
          <img src='dist/img/AdminLTELogo.png' alt='AdminLTE Logo' className='brand-image img-circle elevation-3'
            style={{ opacity: 0.8 }} />
          <span className='brand-text font-weight-light'>AdminLTE 3</span>
        </a>

        <div className='sidebar'>

          <div className='user-panel mt-3 pb-3 mb-3 d-flex'>
            <div className='image'>
              <img src='dist/img/user2-160x160.jpg' className='img-circle elevation-2' alt='User Image' />
            </div>
            <div className='info'>
              <a href='#' className='d-block'>Alexander Pierce</a>
            </div>
          </div>

          <nav className='mt-2'>
            <ul className='nav nav-pills nav-sidebar flex-column' data-widget='treeview' role='menu'
              data-accordion='false'>

              <li className='nav-item has-treeview menu-open'>
                <a href='#' className='nav-link active'>
                  <i className='nav-icon fa fa-dashboard' />
                  <p>
                    Dashboard
                    <i className='right fa fa-angle-left' />
                  </p>
                </a>
                <ul className='nav nav-treeview'>
                  <li className='nav-item'>
                    <a href='./index.html' className='nav-link'>
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
                    <a href='./index3.html' className='nav-link active'>
                      <i className='fa fa-circle-o nav-icon' />
                      <p>Dashboard v3</p>
                    </a>
                  </li>
                </ul>
              </li>
              <li className='nav-item'>
                <a href='pages/widgets.html' className='nav-link'>
                  <i className='nav-icon fa fa-th' />
                  <p>
                    Widgets
                    <span className='right badge badge-danger'>New</span>
                  </p>
                </a>
              </li>
              <li className='nav-item has-treeview'>
                <a href='#' className='nav-link'>
                  <i className='nav-icon fa fa-pie-chart' />
                  <p>
                    Charts
                    <i className='right fa fa-angle-left' />
                  </p>
                </a>
                <ul className='nav nav-treeview'>
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
              <li className='nav-item has-treeview'>
                <a href='#' className='nav-link'>
                  <i className='nav-icon fa fa-tree' />
                  <p>
                    UI Elements
                    <i className='fa fa-angle-left right' />
                  </p>
                </a>
                <ul className='nav nav-treeview'>
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
              <li className='nav-item has-treeview'>
                <a href='#' className='nav-link'>
                  <i className='nav-icon fa fa-edit' />
                  <p>
                    Forms
                    <i className='fa fa-angle-left right' />
                  </p>
                </a>
                <ul className='nav nav-treeview'>
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
              <li className='nav-item has-treeview'>
                <a href='#' className='nav-link'>
                  <i className='nav-icon fa fa-table' />
                  <p>
                    Tables
                    <i className='fa fa-angle-left right' />
                  </p>
                </a>
                <ul className='nav nav-treeview'>
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
              <li className='nav-item has-treeview'>
                <a href='#' className='nav-link'>
                  <i className='nav-icon fa fa-envelope-o' />
                  <p>
                    Mailbox
                    <i className='fa fa-angle-left right' />
                  </p>
                </a>
                <ul className='nav nav-treeview'>
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
              <li className='nav-item has-treeview'>
                <a href='#' className='nav-link'>
                  <i className='nav-icon fa fa-book' />
                  <p>
                    Pages
                    <i className='fa fa-angle-left right' />
                  </p>
                </a>
                <ul className='nav nav-treeview'>
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
              <li className='nav-item has-treeview'>
                <a href='#' className='nav-link'>
                  <i className='nav-icon fa fa-plus-square-o' />
                  <p>
                    Extras
                    <i className='fa fa-angle-left right' />
                  </p>
                </a>
                <ul className='nav nav-treeview'>
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

        </div>

      </aside>

    )
  };
}

const mapStateToProps = (state) => ({

  appUIState : state.appUIState
})

export default connect(mapStateToProps)(Navigation)
