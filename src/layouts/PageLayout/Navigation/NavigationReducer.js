// ------------------------------------
// Constants
// ------------------------------------
export const SHOW_MENU = 'SHOW_MENU'
export const HIDE_MENU = 'HIDE_MENU'

// ------------------------------------
// Actions
// ------------------------------------
export function showMenu () {
  return {

    type: SHOW_MENU,

  }
}

// ------------------------------------
// Actions
// ------------------------------------
export function hideMenu () {
  return {
    type: HIDE_MENU
  }
}

export const actions = {
  showMenu,
  hideMenu
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [SHOW_MENU]: (state, action) => ({ ...state, isloadmenu: !state.isloadmenu }),

}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  isloadmenu: false
}

export default function navigationReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
