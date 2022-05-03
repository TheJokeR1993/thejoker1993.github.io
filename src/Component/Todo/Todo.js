
import React, { useEffect } from "react";

import Creat from './Creat/Creat'
import Items from './Items/Items'




const Todo =(props)=>{

return <div > 
        <Creat  addNewTodo={props.R_F_add_new_packed} clear_err={props.R_F_clear_err} error={props.Error} input={props.input} lists={props.todo} change_input={props.R_F_change_input} />
        <Items lists={props.todo} changeNameTodo={
props.getTODOLocalForage,props.R_F_change_name_packed} changeChekedTodo={props.R_F_change_packed} deletedTodo={props.R_F_delete_packed}
lang={props.lang}
/>
    </div>
}






// const mapDispatchToProps =(dispatch)=>{
//     return {
//         R_F_change_name_packed : (id,arg) =>{
//             dispatch(R_F_change_name_packed(id,arg))
//         },
//         // delete_packed : (id)=>{
//         //     dispatch(R_F_delete_packed(id))
//         // },
//     }
// }

export default Todo



