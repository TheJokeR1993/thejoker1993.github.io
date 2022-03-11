import React, { useEffect, useState } from "react";
import CoinItem from './CoinItem'
import C from './Coin.module.css'
import  {coin}  from "../../apy/api";

 
const Coin =()=>{
    
    const[AllList,setAllList]=useState([])
    const [Spiner,setSpiner]=useState(true)
    const [AllId,setId]=useState([])
    

    useEffect(()=>{

    //     fetch('https://api.coingecko.com/api/v3/coins/list')
    // .then(respon=>respon.ok?respon.json():Promise.reject(respon))
    // .then(setAllList)
    // .finally(()=>setSpiner(false))
  coin.coinsLists()
    .then(data=>{
        data= data.filter(item=>item.id!==''&&item)
    setId([data[0].id])
    setAllList(data)
        
       
    }) 
    .finally(()=>setSpiner(false))
},[])

const Delete=(Tid)=>{
    setId(AllId.filter(id=>id !== Tid))
}

const getId=(e)=>{
       setId([e.target.value,...AllId.filter(id =>id!==e.target.value)]) 
    
}


if(Spiner) return  <div>loading...</div> 



    return <div className={C.header}>
        <div className={C.headerSelect}>
            <select onChange={getId} >
          <option>---</option>
          {
              AllList.map(item=><option value={item.id} key={item.id}>{item.name} </option>)
          }

      </select>
        </div>
      
      <div className={C.rezult}>
          {
             AllId
            //  .filter((item,index)=> AllId.indexOf(item)===index)
             .map(item=>  <CoinItem key={item} Items={item} Delete={Delete} /> )
            
         
          
          }
          
      </div>
    </div>
      
}
export default Coin



// console.log(data);
// const {one,two} = data.name
// console.log(one);
// const {name}=two.ggg
// console.log(name);