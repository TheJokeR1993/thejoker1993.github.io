import { generate as id } from 'shortid'

const T = {
  CHANGE_PACKED: "CHANGE_PACKED",
  DELETE_PACKED : "DELETE_PACKED",
}

const reducerTodo = (state = list, action) => {
  switch (action.type) {
    case T.DELETE_PACKED : return state.filter(i=>i.id !== action.id)
    case T.CHANGE_PACKED:
      return state.map(i => {
        if (i.id === action.id) { i.packed = !i.packed }
        return i
      })
    default: return state
  }
}
// const dispatch= (action)=>reducerTodo(list,action)
export const R_F_change_packed = (id) =>({id,type : T.CHANGE_PACKED})


export const R_F_delete_packed = (id) => {
  return {
    id,
    type: T.DELETE_PACKED,
  }
}
export default reducerTodo


const list = [
  { value: "Pants", id: id(), packed: false, filter: false },
  { value: "Jacket", id: id(), packed: false, filter: false },
  { value: "iPhone Charger", id: id(), packed: false, filter: false },
  { value: "MacBook", id: id(), packed: false, filter: false },
  { value: "Sleeping Pills", id: id(), packed: true, filter: false },
  { value: "Underwear", id: id(), packed: false, filter: false },
  { value: "Hat", id: id(), packed: false, filter: false },
  { value: "T-Shirts", id: id(), packed: false, filter: false },
  { value: "Belt", id: id(), packed: false, filter: false },
  { value: "Passport", id: id(), packed: true, filter: false },
  { value: "Sandwich", id: id(), packed: true, filter: false }
];