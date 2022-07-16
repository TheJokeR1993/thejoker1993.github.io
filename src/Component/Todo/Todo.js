
import React from "react";
import C from './todo.module.css'
import Creat from './Creat/Creat'
import Items from './Items/Items'




const Todo =(props)=>{

return <div className={C.container}> 
        <Creat  addNewTodo={props.R_F_add_new_packed} clear_err={props.R_F_clear_err} error={props.Error} input={props.input} lists={props.todo} change_input={props.R_F_change_input} />
        <Items lists={props.todo} changeNameTodo={
props.R_F_change_name_packed} changeChekedTodo={props.R_F_change_packed} deletedTodo={props.R_F_delete_packed}
lang={props.lang}
/>
    </div>
}



export default Todo



