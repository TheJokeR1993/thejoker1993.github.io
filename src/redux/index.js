import { applyMiddleware, combineReducers, createStore } from "redux";
import reducerTodo from "./reducerTodo/reducerTodo";
import thunkMiddleware from 'redux-thunk'


const allReducers = combineReducers({
    todo : reducerTodo,
  
})

const store = createStore(allReducers,applyMiddleware(thunkMiddleware))

window.store = store

export default store