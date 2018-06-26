import { combineReducers } from 'redux'
import locationReducer from './location'
import loadingReducer from '../components/Loading/LoadingReducer'
import appReducer from '../components/AppReducer'
import { reducer as formReducer } from 'redux-form'
import signinInReducer from '../routes/SignIn/modules/SignInReducer'
import appUIReducer from '../components/AppUIReducer'

export const makeRootReducer = (asyncReducers) => {
  return combineReducers({
    location: locationReducer,
    loading: loadingReducer,
    appUIState: appUIReducer,
    app: appReducer,
    form: formReducer,
    signin: signinInReducer,
    ...asyncReducers
  })
}

export const injectReducer = (store, { key, reducer }) => {
  if (Object.hasOwnProperty.call(store.asyncReducers, key)) return

  store.asyncReducers[key] = reducer
  store.replaceReducer(makeRootReducer(store.asyncReducers))
}

export default makeRootReducer
