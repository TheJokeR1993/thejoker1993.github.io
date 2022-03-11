import React from "react";
import CurrentItems from "./Current_items";
import C from "./Items.module.css"


const Items =props=>{
 
    return <div className={C.div}>
        <div className={C.div_right}>
            <h2>task</h2>
              {props.lists.map(elem=>elem.packed ?null: <CurrentItems  deletedTodo={props.deletedTodo} changeNameTodo={props.changeNameTodo} changeChekedTodo={props.changeChekedTodo} key={elem.id} {...elem} length={props.lists.length}/>  )}
            </div>
        <div className={C.div_left}>
            <h2>completed</h2>
              {props.lists.map(elem=>
       elem.packed
       && <CurrentItems key={elem.id} changeNameTodo={props.changeNameTodo} changeChekedTodo={props.changeChekedTodo}  deletedTodo={props.deletedTodo}  {...elem} length={props.lists.length}/>
 
      
       
       )}
            </div>
     
    </div>
}
export default Items