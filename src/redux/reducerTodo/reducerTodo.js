import { generate as id } from 'shortid'
import { lfTodo } from '../../localData/LocalData'
import {what_error} from './ErrorTodo'

const list = [
  { value: "Pants", id: id(), packed: false, filter: false },
  { value: "Jacket", id: id(), packed: false, filter: false },
  { value: "iPhone Charger", id: id(), packed: false, filter: false },
  { value: "Mac_Book", id: id(), packed: false, filter: false },
  { value: "Sleeping Pills", id: id(), packed: true, filter: false },
  { value: "Underwear", id: id(), packed: false, filter: false },
  { value: "Hat", id: id(), packed: false, filter: false },
  { value: "T-Shirts", id: id(), packed: false, filter: false },
  { value: "Belt", id: id(), packed: false, filter: false },
  { value: "Passport?", id: id(), packed: true, filter: false },
  { value: "Sandwich!", id: id(), packed: true, filter: false }
];

const T = {
  CHANGE_PACKED: "CHANGE_PACKED",
  DELETE_PACKED: "DELETE_PACKED",
  CHANGE_NAME_PACKED: 'CHANGE_NAME_PACKED',
  ADD_NEW_PACKED: "ADD_NEW_PACKED",
  CHANGE_STATE: 'CHANGE_STATE',
  CHANGE_INPUT: "CHANGE_INPUT",
  CLEAR_ERR:'CLEAR_ERR',
  LOADING:'LOADING'
}


// const item =()=>{
//   const all_packed = []
//  todo.getItem().then(item=> item===null?all_packed.push(...list) :all_packed.push(...item.todo))
//  return all_packed
// }







const reducerTodo = (state = { todo: list, input: '', Error: '',isLoading :  true }, action) => {
  switch (action.type) {
    case T.LOADING : return{...state,isLoading:false}
    case T.ADD_NEW_PACKED:
      return (!what_error(state.input, state.todo))
        ? { todo: [...state.todo, { value: state.input, id: id(), packed: false, filter: false }], input: '', Error: '' }
        : { ...state, Error: what_error(state.input, state.todo) }
    case T.DELETE_PACKED: 
    //?
    return { ...state, todo: state.todo.filter(i => i.id !== action.id) }
    case T.CHANGE_STATE:  return action.state 
    case T.CHANGE_NAME_PACKED:
      return (!what_error(action.value, state.todo))
        ? {
          ...state, todo: state.todo.map(i => {
            if (i.id === action.id) {
              i.value = action.value
            }
            return i
          }), Error: ''
        }
        : { ...state, Error: what_error(action.value, state.todo) }
    case T.CHANGE_INPUT: return { ...state, input: action.value }
    case T.CLEAR_ERR :
      return{...state,Error:''}
  
    case T.CHANGE_PACKED: return {
      ...state, todo: state.todo.map(i => {
        if (i.id === action.id) {
          i.packed = !i.packed
        }
        return i
      })
    }
    default: return state
  }
}
export const R_F_change_packed = (id) => ({ id, type: T.CHANGE_PACKED })
export const R_F_change_name_packed = (id, value) => ({ id, value, type: T.CHANGE_NAME_PACKED })
export const R_F_click_packed = () => ({ type: T.CHANGE_NAME_PACKED })
export const R_F_change_input = (value) => ({ type: T.CHANGE_INPUT, value })
export const R_F_clear_err=(str)=>({str,type:T.CLEAR_ERR})
export const R_F_add_new_packed = () => ({ type: T.ADD_NEW_PACKED })
export const R_F_loading =()=>({type:T.LOADING})
export const R_F_delete_packed = (id) => ({ id, type: T.DELETE_PACKED })
const R_F_change_state = (state) => ({ state, type: T.CHANGE_STATE })

export const getTODOLocalForage = () => (dispatch) => {
  lfTodo.getItem().then(item => {
    console.log(item);
 if(item!==null) dispatch(R_F_change_state(item))
     dispatch(R_F_loading())
  }
  )
}
// } item !== null && dispatch(R_F_change_state(item.todo)))
// dispatch({type:T.CHANGE_STATE,state:[]})



export default reducerTodo



