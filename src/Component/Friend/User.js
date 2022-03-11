import React, { useContext, useState } from "react"
import { NavLink } from "react-router-dom"
import C from './Friend.module.css'
import {api} from '../../App'
const User=({user})=>{
    const [followed,setFoloowed] =useState(false)
   const subscribe=(e)=>{
       console.log(user.id);
      api.follow.post(user.id)
      .then(item=>{
          console.log(item);
          if(item.resultCode === 1) return setFoloowed(true)
      })
   }
   const unsubscribe=(e)=>{
    api.follow.delete(user.id)
    .then(item=>{
        console.log(item);
        if(item.resultCode === 1) return setFoloowed(false)
    })
}

    return <div className={C.userCard}>
        
        <img className={C.imag} alt ='' src={user.photos.small ?user.photos.small:'https://elitas.ru/images/no-image-large.jpg'} />
        <div className={C.userCardinfo}>
        <NavLink className={C.navname}  to={'/Home/'+user.id}>{user.name}</NavLink>
            {followed
            ?<button   onClick={unsubscribe}>
            unsubscribe</button>
            :<button  onClick={subscribe} >subscribe</button>
            }
            
            </div>
    </div>
  
}

export default User