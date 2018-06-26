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
export const CLEAR_LOGO_COLOR = 'CLEAR_LOGO_COLOR'

// ------------------------------------
// Actions
// ------------------------------------

export function showHideMenu () {
  return {

    type: SHOW_HIDE_MENU,

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
export function customDarkLightSidebar (darkLightSidebar, typeCustom) {
  return {

    type: CUSTOM_DARK_LIGHT_SIDEBAR_VARIANTS,
    darkLightSidebar,
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
  customDarkLightSidebar

}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [SHOW_HIDE_MENU]: (state, action) => ({ ...state, isLoadMenu: !state.isLoadMenu }),
  [COLLAPSE_MENU]: (state, action) => ({ ...state, isCollapseMenu: !state.isCollapseMenu }),
  [CONTROL_MENU]: (state, action) => ({ ...state, isCollapseControlSlidebar: !state.isCollapseControlSlidebar }),
  [NAVBAR_VARIANTS]: (state, action) => ({ ...state, variantNavbar: action.variantNavbar }),
  [CUSTOM_DARK_LIGHT_SIDEBAR_VARIANTS]: (state, action) => ({ ...state, darkLightSidebar: action.darkLightSidebar, typeCustom: action.typeCustom })

}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  isLoadMenu: false,
  isCollapseMenu: false,
  isCollapseControlSlidebar: false,
  variantNavbar: null,
  darkLightSidebar: null,
  brandLogoSidebar: null,
  typeCustom : null

}

export default function appUIReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
