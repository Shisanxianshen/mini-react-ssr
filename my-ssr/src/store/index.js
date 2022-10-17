import { createStore, applyMiddleware, combineReducers } from'redux'
import NewPageReducer from './reducer'; 
import thunk from 'redux-thunk'

const publicReducer = (state = { name:'yimingfeng123123' }, action) => {
    return state
}

const reducer = combineReducers({
    NewPageReducer,
    publicReducer,
})

const getStore = () => {
    return createStore(reducer, applyMiddleware(thunk))
}

export default getStore