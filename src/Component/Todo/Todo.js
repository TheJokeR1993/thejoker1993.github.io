
import React, { useState } from "react";
import {generate as id} from 'shortid'
import Creat from './Creat/Creat'
import Items from './Items/Items'
const list = [
    { value: "Pants", id: id(), packed: false, filter: false},
    { value: "Jacket", id: id(), packed: false, filter: false},
    { value: "iPhone Charger", id:id(), packed: false, filter: false},
    { value: "MacBook", id:id(), packed: false, filter: false},
    { value: "Sleeping Pills", id:id(), packed: true, filter: false},
    { value: "Underwear", id:id(), packed: false, filter: false},
    { value: "Hat", id:id(), packed: false, filter: false},
    { value: "T-Shirts", id:id(), packed: false, filter: false},
    { value: "Belt", id:id(), packed: false, filter: false},
    { value: "Passport", id:id(), packed: true, filter: false},
    { value: "Sandwich", id:id(), packed: true, filter: false}
  ];



const Todo =()=>{
const firstInput = 'First'
const [allList,setAllList]=useState(list)
const addNewTodo =value=>setAllList([...allList,{ value, id:id(), packed: false, filter: false}])
const changeChekedTodo= id=>{
 setAllList(
     allList.map(i=>{
     if(i.id===id) {i.packed = !i.packed} 
     return i
 }))
} 

 function changeNameTodo (id,arg){
    setAllList(
        allList.map(i=>{
            if(i.id===id){
               i.value = arg
            }
            return i
        })
    )
 }
 

const deletedTodo = id =>setAllList(allList.filter(i=>i.id !== id))
    return <div>
        <Creat first={firstInput} addNewTodo={addNewTodo} lists={allList} setAllList={setAllList} />
        <Items lists={allList} changeNameTodo={changeNameTodo} changeChekedTodo={changeChekedTodo} deletedTodo={deletedTodo}/>
    </div>
}
export default Todo
