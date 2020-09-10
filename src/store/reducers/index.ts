import { combineReducers } from 'redux'
import todos from './todo.reducers'
import visibilityFilter from './visibility.reducers'

export default combineReducers({
    todos,
    visibilityFilter
})
