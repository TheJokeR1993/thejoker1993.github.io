import { t } from "i18next";
import React from "react";
import C from './Creat.module.css'

const Creat =({
    addNewTodo,
    input,
    change_input,
    error,
    clear_err
})=>{
    error &&  setTimeout(()=>{
       clear_err(error)
      },5000)
    
    // console.log(props.lists);
    // const [value,setValue] = useState('')

//     const [list,setLalue] = useState('')
//    console.log(props.lists);
    //    const click = (e)=>{
    //     //    if(!input.trim()) return
         
    //     //    let isPush = lists.find(i=>i.value === input)
    //     //      !isPush && 
    //          addNewTodo()
           
    //         //  
    //     }

    // const click = ()=>props.setAllList([...props.lists,{ value: value, id:id(), packed: false, filter: false}])
    //  props.setAllList(props.allList[length] = [{ value: value, id:id(), packed: false, filter: false}])
    // const change = (e)=>  setValue(e.target.value)
      
    
    return <div className={C.head}>
        <div className={C.header}>
        <input className={C.header_inp} placeholder={t('addTask')} type="text" onChange={(e)=>change_input(e.target.value)} value={input}></input>
        <button className={C.header_btn} onClick={addNewTodo}>{t('add')}</button>
    </div>
    {error&& <div className={C.error_div}>{t(error)}</div>}
        </div>
}

export default Creat

