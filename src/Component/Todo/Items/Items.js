import { t } from "i18next";
import React from "react";
import CurrentItems from "./Current_items";
import C from "../todo.module.css"


const Items =props=>{
 


    return <div className={C.div_rezult}>
        <div className={C.rezult_block}>
            <h2>{t('task')}</h2>
              {props.lists.map(elem=>elem.packed ?null: <CurrentItems  deletedTodo={props.deletedTodo} changeNameTodo={props.changeNameTodo} changeChekedTodo={props.changeChekedTodo} key={elem.id} {...elem} length={props.lists.length}/>  )}
            </div>
        <div className={C.rezult_block }>
            <h2>{t('completed')}</h2>
              {props.lists.map(elem=>
       elem.packed
       && <CurrentItems key={elem.id} changeNameTodo={props.changeNameTodo} changeChekedTodo={props.changeChekedTodo}  deletedTodo={props.deletedTodo}  {...elem} length={props.lists.length}/>
 
      
       
       )}
            </div>
     
    </div>
}
export default Items