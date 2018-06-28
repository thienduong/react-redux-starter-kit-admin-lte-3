// ------------------------------------
// Constants
// ------------------------------------
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

// ------------------------------------
// Actions
// ------------------------------------
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
}
// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  isCollapseMenu: false,
  isCollapseControlSlidebar: false,
  variantNavbar: null,
  darkLightColorSidebar: null,
  brandLogoColorSidebar: null,
  checkBorder: false,
  typeCustom : null,
}

export default function appUIReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
