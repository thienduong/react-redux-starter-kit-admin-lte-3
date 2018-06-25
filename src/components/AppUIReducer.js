// ------------------------------------
// Constants
// ------------------------------------
export const SHOW_HIDE_MENU = 'SHOW_HIDE_MENU'

// ------------------------------------
// Actions
// ------------------------------------
export function showHideMenu () {
  return {

    type: SHOW_HIDE_MENU,

  }
}

// ------------------------------------
// Actions
// ------------------------------------

export const actions = {
  showHideMenu

}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [SHOW_HIDE_MENU]: (state, action) => ({ ...state, isLoadMenu: !state.isLoadMenu }),

}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  isLoadMenu: false
}

export default function appUIReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
