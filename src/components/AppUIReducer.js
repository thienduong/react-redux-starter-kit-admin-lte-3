// ------------------------------------
// Constants
// ------------------------------------
export const SHOW_HIDE_MENU = 'SHOW_HIDE_MENU'
export const MENU_COLLAPSE = 'MENU_COLLAPSE'

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

// ------------------------------------
// Actions
// ------------------------------------

export const actions = {
  showHideMenu,
  menuCollapse

}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [SHOW_HIDE_MENU]: (state, action) => ({ ...state, isLoadMenu: !state.isLoadMenu }),
  [MENU_COLLAPSE]: (state, action) => ({ ...state, isCollapse: !state.isCollapse })

}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  isLoadMenu: false,
  isCollapse: false,

}

export default function appUIReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
