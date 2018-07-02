import axios from 'axios'
export const GET_USER_LIST_SUCCESS = 'GET_USER_LIST_SUCCESS'

export function getList () {
  return (dispatch, getState) => {
    axios.get('/api/users').then(function (response) {
      dispatch(getListUserSuccess(response.data.UserList))
    }).catch(function (error) {
      console.log(error)
    }
    )
  }
}

export function getListUserSuccess (users) {
  return {
    type: GET_USER_LIST_SUCCESS,
    users
  }
}

export const actions = {
  getList
}
const ACTION_HANDLERS = {
  [GET_USER_LIST_SUCCESS ]    : (state, action) => ({ ...state, users: action.users }),
}
const initialState = {
  users: [],
  state: 0
}
export default function userReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : state
}
