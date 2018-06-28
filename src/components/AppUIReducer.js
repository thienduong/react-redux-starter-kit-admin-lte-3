// ------------------------------------
// Constants
// ------------------------------------
export const SHOW_HIDE_MENU = 'SHOW_HIDE_MENU'
export const COLLAPSE_MENU = 'COLLAPSE_MENU'
export const CONTROL_MENU = 'CONTROL_MENU'
export const NAVBAR_VARIANTS = 'NAVBAR_VARIANTS'
export const BG_PRIMARY = 'BG_PRIMARY'
export const BG_INFO = 'BG_INFO'
export const BG_SUCCESS = 'BG_SUCCESS'
export const BG_DANGER = 'BG_DANGER'
export const BG_WARNING = 'BG_WARNING'
export const BG_WHITE = 'BG_WHITE'
export const BG_GREY_LIGHT = 'BG_GREY_LIGHT'
export const CUSTOM_DARK_LIGHT_SIDEBAR_VARIANTS = 'CUSTOM_DARK_LIGHT_SIDEBAR_VARIANTS'
export const CUSTOM_LIGHTSIDEBAR_VARIANTS = 'CUSTOM_LIGHTSIDEBAR_VARIANTS'
export const CUSTOM_DARKSIDEBAR_VARIANTS = 'CUSTOM_DARKSIDEBAR_VARIANTS'
export const CUSTOM_BRANDLOGO_VARIANTS = 'CUSTOM_BRANDLOGO_VARIANTS'
export const CHECK_NAVBAR_BORDER = 'CHECK_NAVBAR_BORDER'
export const DASHBOARD = 'DASHBOARD'
export const CHARTS = 'CHARTS'
export const UI_ELEMENTS = 'UI_ELEMENTS'
export const FORMS = 'FORMS'
export const TABLES = 'TABLES'
export const MAILBOX = 'MAILBOX'
export const PAGES = 'PAGES'
export const EXTRAS = 'EXTRAS'

// ------------------------------------
// Actions
// ------------------------------------

export function showHideMenu (typeLoadMenu) {
  debugger
  return {

    type: SHOW_HIDE_MENU,
    typeLoadMenu

  }
}

export function expandCollapseMenu () {
  return {

    type: COLLAPSE_MENU,

  }
}
export function controlMenu () {
  return {

    type: CONTROL_MENU,

  }
}

export function variantsNavbar (variantNavbar) {
  return {

    type: NAVBAR_VARIANTS,
    variantNavbar

  }
}
export function customColorLogo (brandLogoColorSidebar) {
  return {

    type: CUSTOM_BRANDLOGO_VARIANTS,
    brandLogoColorSidebar

  }
}
export function checkNavbarBorder () {
  debugger
  return {

    type: CHECK_NAVBAR_BORDER,

  }
}
export function customDarkLightColorSidebar (darkLightColorSidebar, typeCustom) {
  return {

    type: CUSTOM_DARK_LIGHT_SIDEBAR_VARIANTS,
    darkLightColorSidebar,
    typeCustom

  }
}

// ------------------------------------
// Actions
// ------------------------------------

export const actions = {
  showHideMenu,
  expandCollapseMenu,
  controlMenu,
  variantsNavbar,
  customDarkLightColorSidebar,
  customColorLogo,
  checkNavbarBorder

}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [COLLAPSE_MENU]: (state, action) => ({ ...state, isCollapseMenu: !state.isCollapseMenu }),
  [CONTROL_MENU]: (state, action) => ({ ...state, isCollapseControlSlidebar: !state.isCollapseControlSlidebar }),
  [NAVBAR_VARIANTS]: (state, action) => ({ ...state, variantNavbar: action.variantNavbar }),
  [CUSTOM_DARK_LIGHT_SIDEBAR_VARIANTS]: (state, action) => ({ ...state, darkLightColorSidebar: action.darkLightColorSidebar, typeCustom: action.typeCustom }),
  [CUSTOM_BRANDLOGO_VARIANTS]: (state, action) => ({ ...state, brandLogoColorSidebar: action.brandLogoColorSidebar }),
  [CHECK_NAVBAR_BORDER]: (state, action) => ({ ...state, checkBorder: !state.checkBorder }),
  [SHOW_HIDE_MENU]: function (state, action) {
    debugger

    if (action.typeLoadMenu === DASHBOARD) {
      state.dasboard = !state.dasboard
      return { ...state }
    } else if (action.typeLoadMenu === CHARTS) {
      state.charts = !state.charts
      return { ...state }
    } else if (action.typeLoadMenu === UI_ELEMENTS) {
      state.uiElements = !state.uiElements
      return { ...state }
    } else if (action.typeLoadMenu === FORMS) {
      state.forms = !state.forms
      return { ...state }
    } else if (action.typeLoadMenu === TABLES) {
      state.tables = !state.tables
      return { ...state }
    } else if (action.typeLoadMenu === MAILBOX) {
      state.mailbox = !state.mailbox
      return { ...state }
    } else if (action.typeLoadMenu === PAGES) {
      state.pages = !state.pages
      return { ...state }
    } else if (action.typeLoadMenu === EXTRAS) {
      state.extras = !state.extras
      return { ...state }
    } else return { ...state }
  }
}
// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  dasboard: false,
  charts:false,
  uiElements:false,
  forms: false,
  tables:false,
  mailbox:false,
  pages:false,
  extras:false,
  isCollapseMenu: false,
  isCollapseControlSlidebar: false,
  variantNavbar: null,
  darkLightColorSidebar: null,
  brandLogoColorSidebar: null,
  checkBorder: false,
  typeCustom : null,
  typeLoadMenu: null

}

export default function appUIReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
