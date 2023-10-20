import {createStore, combineReducers} from 'redux'
import cashReducer from './cashReducer'
import usersReducer from './usersReducer'
import { composeWithDevTools } from 'redux-devtools-extension'

const reducers = combineReducers({
    cash: cashReducer,
    users: usersReducer
})

const store = createStore(reducers, composeWithDevTools())

export default store