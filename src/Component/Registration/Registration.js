import React, { useContext, useState } from "react";
import ContextUser from "../../ContextUser";
import {User} from '../../Local/Local'
import C from './Registration.module.css'
import * as Validator from 'validatorjs';
import { uid } from 'rand-token';
import {UserEr} from '../../Errors/Errors'

const form = {
    name:'sdfsdf',
    email:'ssdfsdf@ggf.gfg',
    password : 'dfgdfg',
    confirmPassword:'dfgdfg',
}
const rules = {
    name:'required|alpha_num|max:16|min:4',
    email:'required|email',
    password : 'required|alpha_num|max:16|min:4',
    confirmPassword:'required|alpha_num|max:16|min:4',
   
}

const Registration =(props)=>{
    console.log(User);
    const [formT,setFormT]= useState(form)
    const[error,setError]=useState('')
    const[divError,setDivError]=useState({display:'none'})

    const  change = e => setFormT({...formT, [e.target.placeholder]: e.target.value})

    const context = useContext(ContextUser)
    const Error = ()=>{
        UserEr.UserAlrady()

    }
    const newUser=()=>{
  
        const validator = new Validator(formT,rules)
        if(validator.fails()) return setError('Error'),setDivError({})
const newUser = {...formT,token:uid(16)}
context.setHook(newUser)
        User.set(newUser,Error)
      
    props.close()
   
    
    
}

    return  <div className={C.main}>
        <div className={C.mainblock}>
            <button className={C.close} onClick={props.close}>X</button>
            <input type="text" placeholder='name' onChange={change} value={formT.name}/>

            <input type="email" placeholder="email" onChange={change}  value={formT.email}/>
            <input type="password" placeholder="password" onChange={change}  value={formT.password}/>
            <input type="password" placeholder="confirmPassword" onChange={change}  value={formT.confirmPassword} />
            <div style={divError} className={C.error} ><p>{error}</p></div>
            <button className={C.registr} onClick={newUser}>registration</button>
        </div>
      
   
    </div>
}

export default Registration