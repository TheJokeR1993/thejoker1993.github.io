import React, { useContext, useState } from 'react'
import C from '../Header/Header.module.css'
import contextUser from '../../ContextUser'
import token from '../../localData/LocalData'
import {api} from '../../App'
const user = {
        email: 'thejokermafiaclub@gmail.com',
        password:'thejokermafiaclub@gmail.com'
    }



const LoGin = (props)=>{
    console.log(api);
    const context = useContext(contextUser)
    const [Input,setInput]=useState(user)
    const  change = e => setInput({...Input, [e.target.placeholder]: e.target.value})

    const LoginUser =()=>{
       
        api.auth.post(Input.email,Input.password)
        .then(item=>{
            console.log(item)
            api.profile.get(item.data.userId)
        
            .then(item=>{
                console.log(item);
                item.email = Input.email
                context.setHook(item)
                console.log(item.token);
                token.setToken(item.token)
                props.close()

               
         }) })
        }
      
    

    const contextProfile =(User)=>{
       context.setHook(User)
       props.close()
    }
    


    return ( <div className={C.loginUser}>
        <input type="email" onChange={change}  placeholder="email" value={Input.email}/>
        <input type="password" onChange={change}  placeholder="password" value={Input.password}/>
        <div className={C.loginBtn}>
            <button onClick={LoginUser}>Log in</button>
            <button onClick={props.submit}>Registration</button>
        </div>
    </div>)
}
export default LoGin