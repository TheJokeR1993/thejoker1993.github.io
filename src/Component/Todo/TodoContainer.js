
import React, { useEffect } from "react";
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
import { connect } from "react-redux";
import {spiner} from '../../helps/spiner'

const mapStateToProps = (state)=>{
  
       return {
           todo : state.todo.todo,
           input:state.todo.input,
           Error:state.todo.Error,
       }
   }



const TodoContainer = props =>{
  
 const getTODO = ()=> props.getTODOLocalForage()

useEffect(getTODO,[])
console.log( props.isLoadingh);
 
return <div>{
    props.todo.length === 0
     ?spiner('loading')
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
    R_F_clear_err
})(TodoContainer)