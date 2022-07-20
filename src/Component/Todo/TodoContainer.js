
import React, { useEffect } from "react";
import Todo from "./Todo"
import {
    getTODOLocalForage, 
    R_F_change_packed,
    R_F_change_input,
    R_F_add_new_packed,
    R_F_delete_packed,
    R_F_change_name_packed,
    R_F_clear_err,
    R_F_loading
} from '../../redux/reducerTodo/reducerTodo'
import { connect } from "react-redux";
import {spiner} from '../../helps/spiner'

const mapStateToProps = (state)=>{
  
       return {
           todo : state.todo.todo,
           input:state.todo.input,
           Error:state.todo.Error,
           isLoading:state.todo.isLoading
       }
   }



const TodoContainer = props =>{

useEffect(()=>{
    props.getTODOLocalForage()
   
},[props.isLoading])
 
return <div>{
    props.isLoading
     ?spiner('first')
     : <Todo {...props}/>
    
    }</div>
}



export default connect(mapStateToProps,{
    getTODOLocalForage,
    R_F_change_name_packed,
    R_F_add_new_packed,
    R_F_change_packed,
    R_F_change_input,
    R_F_delete_packed,
    R_F_clear_err,
    R_F_loading
})(TodoContainer)