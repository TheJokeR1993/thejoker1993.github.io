
import React, { useState } from "react"
import { NavLink, Redirect } from "react-router-dom";
import C from './Friend.module.css'
import User from "./User"

const option = [10,20,50,75,100]

const Friend = (props) => {
    const [selected, setSelected] = useState(props.limit)
    const [redirect,setredirect] = useState(false)
    const [inputChange,setInputChange]=useState(null)
    const RedirectNewLimit = e =>{
        setSelected(e.target.value)
        
        setredirect(true)
    }
    if(redirect) return <Redirect to={`/Friend/${selected}/1`} />

    return <div>
        <select onChange={RedirectNewLimit} value ={props.limit} >
            {option.map(item=><option value={item}  key={item}   >{item}</option>
            )}
        </select>
        <div className={C.header}>
            <div>

            </div>
            <div>
                <input type="text" onChange={(e)=>setInputChange(e.target.value)} />
                <button onClick={()=>props.term(inputChange)}>Searc</button>
            </div>

        </div>
        <div className={C.userMain}>
            {props.users.map(item => <User key={item.id} user={item} ></User>
            )}
        </div>

        <div className={C.pagediv}>
            {props.arrCount.map((page, i) => { return page ? <NavLink className={page === +props.page ? C.activepage : C.page} key={'page' + i} to={'/Friend/' + props.limit + '/' + page}>{page}</NavLink> : <p key={'page' + i}>...</p> })}
        </div>

    </div>
}
export default Friend