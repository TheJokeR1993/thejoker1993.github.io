
import React, { useState } from "react";
import { connect } from "react-redux";
import {generate as id} from 'shortid'
import Creat from './Creat/Creat'
import Items from './Items/Items'
import {R_F_change_packed} from '../../redux/reducerTodo/reducerTodo'
import {R_F_delete_packed} from '../../redux/reducerTodo/reducerTodo'



const Todo =(props)=>{
    console.log(props);
const firstInput = 'First'
const [allList,setAllList]=useState(props.todo)
const addNewTodo =value=>setAllList([...allList,{ value, id:id(), packed: false, filter: false}])

// const changeChekedTodo= id=>{
// props.change_packed(id)
// //  setAllList(
// //      allList.map(i=>{
// //      if(i.id===id) {i.packed = !i.packed} 
// //      return i
// //  }))
// } 

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
 

// const deletedTodo = id =>setAllList(allList.filter(i=>i.id !== id))
    return <div>
        <Creat first={firstInput} addNewTodo={addNewTodo} lists={allList} setAllList={setAllList} />
        <Items lists={props.todo} changeNameTodo={changeNameTodo} changeChekedTodo={props.R_F_change_packed} deletedTodo={props.R_F_delete_packed}/>
    </div>
}




const mapStateToProps = (state)=>{
    return {
        todo : state.todo,
    }
}
// const mapDispatchToProps =(dispatch)=>{
//     return {
//         change_packed : (id) =>{
//             dispatch(R_F_change_packed(id))
//         },
//         delete_packed : (id)=>{
//             dispatch(R_F_delete_packed(id))
//         },
//     }
// }

// export default Todo
export default connect(mapStateToProps,{R_F_delete_packed,R_F_change_packed})(Todo)


