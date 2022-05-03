
import React, { useEffect, useState } from "react";
import Todo from "./Todo"
import {
    getTODOLocalForage, 
    R_F_change_packed,
    R_F_change_input,
    R_F_add_new_packed,
    R_F_delete_packed,
    R_F_change_name_packed,
    R_F_clear_err
} from '../../redux/reducerTodo/reducerTodo'
import {R_F_change_text_for_component} from '../../redux/language/language'
import { connect } from "react-redux";
import { t } from "i18next";


const mapStateToProps = (state)=>{
  
       return {
           todo : state.todo.todo,
           input:state.todo.input,
           Error:state.todo.Error,
       }
   }



const TodoContainer = props =>{
 

useEffect(()=>{
 
    props.getTODOLocalForage()
  

},[])
 

return <Todo {...props}/>
}


export default connect(mapStateToProps,{
    getTODOLocalForage,
    R_F_change_name_packed,
    R_F_add_new_packed,
    R_F_change_packed,
    R_F_change_input,
    R_F_delete_packed,
    R_F_clear_err
})(TodoContainer)