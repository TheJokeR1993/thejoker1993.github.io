import localforage from "localforage"


// const data = {
//     time : new Date().getTime(),
//     hour72 :  259200000,
//     minut1 : 60000
// }


const coin = localforage.createInstance({ name: 'coin' })

export const lfCoin ={
    getItem:()=> coin.getItem('coin'),
    setItem:(elem)=>coin.setItem('coin',elem),
}
const current = localforage.createInstance({ name: 'current' })

export const lfCurrent ={
    getItem:()=> current.getItem('current'),
    setItem:(elem)=>current.setItem('current',elem),
}
const todo = localforage.createInstance({ name: 'todo' })

export const lfTodo ={
    getItem:()=> todo.getItem('todo'),
    setItem:(elem)=>todo.setItem('todo',elem),
}


