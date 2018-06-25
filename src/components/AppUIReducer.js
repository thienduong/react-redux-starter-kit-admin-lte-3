// ------------------------------------
// Constants
// ------------------------------------
export const SHOW_HIDE_MENU = 'SHOW_HIDE_MENU'
export const MENU_COLLAPSE = 'MENU_COLLAPSE'
export const MENU_CONTROL = 'MENU_CONTROL'

// ------------------------------------
// Actions
// ------------------------------------

export function showHideMenu () {
  return {

    type: SHOW_HIDE_MENU,

  }
}

export function menuCollapse () {
  return {

    type: MENU_COLLAPSE,

  }
}
export function menuControl () {
  return {

    type: MENU_CONTROL,

  }
}

// ------------------------------------
// Actions
// ------------------------------------

export const actions = {
  showHideMenu,
  menuCollapse,
  menuControl

}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [SHOW_HIDE_MENU]: (state, action) => ({ ...state, isLoadMenu: !state.isLoadMenu }),
  [MENU_COLLAPSE]: (state, action) => ({ ...state, isCollapse: !state.isCollapse }),
  [MENU_CONTROL]: (state, action) => ({ ...state, isControl: !state.isControl })

}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  isLoadMenu: false,
  isCollapse: false,
  isControl: false,

}

export default function appUIReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
