import React, { useState } from "react";
import C from './Creat.module.css'

const Creat =props=>{
    // console.log(props.lists);
    const [value,setValue] = useState('')
   
//     const [list,setLalue] = useState('')
//    console.log(props.lists);
       const click = ()=>{

          
           if(!value.trim()) return
         
           let isPush = props.lists.find(i=>i.value === value)
         
             !isPush && props.addNewTodo(value)
 
            //  
        }

    // const click = ()=>props.setAllList([...props.lists,{ value: value, id:id(), packed: false, filter: false}])
    //  props.setAllList(props.allList[length] = [{ value: value, id:id(), packed: false, filter: false}])
    const change = (e)=>  setValue(e.target.value)
      
    
    return <div className={C.header}>
        <input className={C.header_inp} placeholder={props.first} type="text" onChange={change} value={value}></input>
        <button className={C.header_btn} onClick={click}>Click</button>
    </div>
}
export default Creat

