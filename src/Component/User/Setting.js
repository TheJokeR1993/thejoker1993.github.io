import React, { useContext, useState } from "react"
import ContextUser from "../../contextUser"
import C from './Setting.module.css'
import * as Validator from 'validatorjs';
import { NavLink, Route, Switch } from "react-router-dom"
import token from "../../localData/LocalData"


const rules = {
    name:'required|alpha_num|max:16|min:4',
    email:'required|email',
    password : 'required|alpha_num|max:16|min:4',
    confirmPassword:'required|alpha_num|max:16|min:4',
   
}
const Setting =(props)=>{
   
    
    const context = useContext(ContextUser)
    const [errorDiv,serErrorDiv]=useState(false)
    const [input,setInput]= useState('')
    const [inputConfirm,setInputConfirm]= useState('')

    if(!context.hook) return false
 
    const saveRezult =(key,key2)=>{
        console.log(key);
        console.log(key2);
        const validator = new Validator({key:input},{key:rules[key]})
        
        if(!key.length) return serErrorDiv(<div className={C.error}>Error</div>)

       if(key==='password'){
           console.log(input);
           console.log(inputConfirm);
         return  input!==inputConfirm &&serErrorDiv(<div className={C.error}>Error</div>)
       }

       if(validator.fails()) return serErrorDiv(<div className={C.error}>Error</div>)
 
       serErrorDiv(false)
        if(key==='password'){
           if(input!==inputConfirm )  return
            
        }
        
        context.setHook({...context.hook,[key]: input})
      
        setInput('')
        setInputConfirm('')
    }   

   
    
return <div className={C.header}>
    <h1 className={C.nameUser}>My profile</h1>
    <div className={C.settingHeader}>
        <div >
            <img alt="" src="https://i1.sndcdn.com/avatars-000495007683-zg65ko-t500x500.jpg"/>
        </div> 
        <div className={C.userinfo}>
             <h2>Name : {context.hook.name}</h2>
             <h2> Email : {context.hook.email}</h2>
        </div>
    </div>


    <div className={C.change} onClick={()=>{
        setInput('');setInputConfirm('')
    } }>
        <NavLink  to='/Setting/name'>
        <div >change name</div>
            
        </NavLink>
        <NavLink to='/Setting/foto'>
            
        <div>change foto</div>
        </NavLink>
        <NavLink to='/Setting/email'>
        <div  >change email</div>
            
        </NavLink>
        <NavLink to='/Setting/password'>
            
        <div  >change password</div>
        </NavLink>
    </div>


    <Switch>
<Route path="/Setting/name">
<div className={C.changeInp} >
              <p>Change name: </p> 
                <input type='text'  onChange={(e)=>setInput(e.target.value)}  value={input}  />
              
                   {errorDiv}
                
                <button onClick={()=>saveRezult('name')}>Изменить</button>

</div> 
</Route>
<Route path='/Setting/password'>
<div className={C.changeInp}>
                <p>Change password: </p> 
                {errorDiv}
                  <input type='password' onChange={(e)=>setInput(e.target.value)}  value={input}/>
                  <input  type='password'onChange={(e)=>setInputConfirm(e.target.value)}  value={inputConfirm} />
                  <button onClick={()=>saveRezult('password','password2')} >Изменить</button>
                 </div>
</Route>
<Route path='/Setting/email'>
<div className={C.changeInp}>
              <p>Change email: </p> 
              {errorDiv}
                <input type='text'  onChange={(e)=>setInput(e.target.value)}  value={input}  />
                <button onClick={()=>saveRezult('email')}>Изменить</button>
</div> 
</Route>
<Route path='/Setting/foto'>
<div className={C.changeInp}>
              <p>Change foto: </p> 
                <input type='text' onChange={(e)=>setInput(e.target.value)}  value={input}  />
                {/* <input type="file" onChange={console.log}/> */}
                <button>Изменить</button>
</div> 
</Route>

    </Switch>
    
   
        <button onClick={()=>{
            context.setHook(null)
            token.remove()
            props.history.goBack()
        }} className={C.exitProfile}>Exit profile</button>
        <button className={C.btn_back} onClick={()=>props.history.goBack()} >Back</button>
    </div>

}
// props.history.goBack()
export default Setting