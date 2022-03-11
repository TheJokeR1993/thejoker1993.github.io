import React, {  useEffect, useState } from "react"

import {api} from '../../App'
import Friend from "./Friend";

const totalRezult=(allpage,limitUsers,thisPage,limit)=>{
    let pages = Math.ceil(allpage/limitUsers) 
   const arrPages = [1]

    if(thisPage <= limit+1){
        thisPage === limit+1
        ? arrPages.push(2,3,4,5,6,null) 
        :arrPages.push(2,3,4,5,null)  

    } else if(thisPage >= pages-limit){
        arrPages.push(null,thisPage-2,thisPage-1)
        if(thisPage === pages-limit)  arrPages.push(thisPage+1,thisPage+2)
        if(thisPage === pages-limit+1)  arrPages.push(thisPage+1)
        if(thisPage === pages-limit+2)  arrPages.push(thisPage)

    }else{
        arrPages.push(null,thisPage-2,thisPage-1,thisPage,thisPage+1,thisPage+2,null) 
    }
    arrPages.push(pages)
   return arrPages
    
}



const FriendContainer =(props)=>{
   
    // const [allpage,setAllpage]=useState(0)
    const [Spiner,setSpiner]=useState(true)
    const [arrCount , setArrCount] =useState([])
    const [arrUseres, setArrUsers] = useState([])
    const [term,setTerm]= useState('')
  const params = props.match.params
console.log(term);   

    useEffect(function(){
        setSpiner(true)
        api.users.get(params.limit,params.page,term)
       .then(item=>{
       
        setArrCount( totalRezult(item.totalCount,+params.limit,+params.page,3))
    
        setArrUsers(item.items)
       })
       .finally(()=>setSpiner(false))
    },[params,term]) 

    if(Spiner) return  <div>loading...</div> 

   
 return <Friend  arrCount={arrCount} page={params.page} limit={params.limit} users={arrUseres} term={setTerm}/>
    
   
}
export default FriendContainer