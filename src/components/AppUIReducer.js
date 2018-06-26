// ------------------------------------
// Constants
// ------------------------------------
export const SHOW_HIDE_MENU = 'SHOW_HIDE_MENU'
export const COLLAPSE_MENU = 'COLLAPSE_MENU'
export const CONTROL_MENU = 'CONTROL_MENU'

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

// ------------------------------------
// Actions
// ------------------------------------

export const actions = {
  showHideMenu,
  expandCollapseMenu,
  controlMenu

}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [SHOW_HIDE_MENU]: (state, action) => ({ ...state, isLoadMenu: !state.isLoadMenu }),
  [COLLAPSE_MENU]: (state, action) => ({ ...state, isCollapseMenu: !state.isCollapseMenu }),
  [CONTROL_MENU]: (state, action) => ({ ...state, isCollapseControlSlidebar: !state.isCollapseControlSlidebar })

}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  isLoadMenu: false,
  isCollapseMenu: false,
  isCollapseControlSlidebar: false,

}

export default function appUIReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
