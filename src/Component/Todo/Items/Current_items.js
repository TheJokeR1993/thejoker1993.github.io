
import React, { useState,memo } from "react";
import C from "./Items.module.css"
const obj ={
    id:''
}
const Current_items =props=>{
    const [isShowInput,setIsShowInput]=useState(false)
    const [changeName,setChangeName]=useState(props.value )
  
   const changeInput=(e)=>{
       props.changeNameTodo(props.id,changeName)
       setIsShowInput(false)
    }

    // console.log(props);

    return <div className={C.form}>
        <input type={"checkbox"} defaultChecked={props.packed} onClick={()=>props.changeChekedTodo(props.id)}/>
      {isShowInput 
      ? <input onBlur={changeInput} onChange={(e)=> setChangeName(e.target.value)} value={changeName} type="text" />
      :  <p onDoubleClick={()=> setIsShowInput(true)}>{props.value}</p>}
        <button onClick={()=>{
            obj.id= props.id
            props.deletedTodo(props.id)}}>X</button>
      
    </div>
}

const getProps =(prepP,nextP)=>{
 
    // if(obj.id){
    //   console.log(prepP);
    //     return false
    // }else{
        return prepP.packed === nextP.packed && prepP.value === nextP.value && prepP.length === nextP.length 
        return false

    // }

     

  
}
 export default memo(Current_items,getProps)
//export default Current_items
