import authReducer from './authReducer'
import postReducer from './postReducer'
import notificationReducer from './notificationReducer'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    auth: authReducer,
    post: postReducer,
    notification: notificationReducer
})

export default rootReducer