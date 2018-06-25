// ------------------------------------
// Constants
// ------------------------------------
export const SHOW_HIDE_MENU = 'SHOW_HIDE_MENU'

// ------------------------------------
// Actions
// ------------------------------------
export function show_hideMenu () {
  return {

    type: SHOW_HIDE_MENU,

  }
}

// ------------------------------------
// Actions
// ------------------------------------

export const actions = {
  show_hideMenu

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

export default function navigationReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
