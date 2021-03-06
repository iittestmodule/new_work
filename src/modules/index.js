import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import reducers from './reducers'

export default combineReducers({
  routing: routerReducer,
  reducers
})