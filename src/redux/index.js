import { applyMiddleware, combineReducers, createStore } from "redux";
import reducerTodo from "./reducerTodo/reducerTodo";
import thunkMiddleware from 'redux-thunk'
import { lfCoin, lfCurrent, lfTodo } from "../localData/LocalData";
import language from "./language/language";
import coin from "./coin/coin"
import current from "./coin/reducerCurrent";

const allReducers = combineReducers({
    todo : reducerTodo,
    lang: language,
    coin : coin,
    current: current
})
// localStorage.getItem('i18nextLng')
const store = createStore(allReducers,applyMiddleware(thunkMiddleware))

// setTimeout(()=>{
    
//     console.log(store.getState());
    
   store.subscribe(() => lfTodo.setItem(store.getState().todo))
   store.subscribe(() => lfCoin.setItem(store.getState().coin))
   store.subscribe(() => lfCurrent.setItem(store.getState().current))
  

// },3000)
export default store