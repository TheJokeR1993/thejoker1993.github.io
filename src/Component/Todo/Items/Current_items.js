import React, { useState,memo } from "react";
import C from "../todo.module.css"
import PropsTypes from 'prop-types'


const Current_items =props=>{
    const [isShowInput,setIsShowInput]=useState(false)
    const [changeName,setChangeName]=useState(props.value )
  
   const changeInput=()=>{
       
       props.changeNameTodo(props.id,changeName)
       setIsShowInput(false)
    }
    
    // console.log(props);

    return <div className={C.form}>
        <input type={"checkbox"} defaultChecked={props.packed} onClick={()=>props.changeChekedTodo(props.id)}/>

      {isShowInput 
      ? <input onBlur={changeInput} autoFocus={true} onChange={(e)=> setChangeName(e.target.value)} value={changeName} type="text" />
      :  <p className={C.name} onDoubleClick={()=> setIsShowInput(true)}>{props.value}</p>
      }

        <button onClick={()=>props.deletedTodo(props.id)}>X</button>
      
    </div>
}

const getProps =(prepP,nextP)=>{
 
 return prepP.packed === nextP.packed && prepP.value === nextP.value && prepP.length === nextP.length 

}


Current_items.propTypes = {
  packed : PropsTypes.bool.isRequired,
  value : PropsTypes.any.isRequired

}
  export default memo(Current_items,getProps)



