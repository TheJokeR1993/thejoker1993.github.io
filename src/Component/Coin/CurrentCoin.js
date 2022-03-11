import { func } from "prop-types";
import React, { useEffect, useRef, useState } from "react";
import {coin} from '../../apy/api'
import {getDateFromTo,getDateUNIX} from '../../helps/date'
import ChartCf from "./ChartCf";
import C from './Coin.module.css'
const language = 'en'



const d =getDateFromTo()
const dateInput = {
    to: d.to,
    from : d.from
}



const CurrentCoin =(props)=>{
    const [spiner,setSpiner]=useState(true)
    const [spiner2,setSpiner2]=useState(true)
    const [info,setInfo]= useState({})
    const [value,setValue]=useState(dateInput)
    const [prices,setPrices]=useState({})
    
    const textDescription = useRef(null)

    useEffect(()=>{
       setSpiner(true)
        coin.currentCoin(props.match.params.id)
       .then(item=>setInfo(item))
     .finally(()=>setSpiner(false))
    },[])
    // const dateUNIX = new Date().getTime()
console.log(textDescription);
// console.log(textDescription);
useEffect(()=>{
    if(textDescription.current){

        textDescription.current.innerHTML = info.description[language]

    }
},[textDescription.current])
    // window.time = new Date(value.from)
    const unix =getDateUNIX(value)
const data = {
    id : props.match.params.id,
    vs_currency : 'usd',
    from: unix.from,
    to :  unix.to,
}

const change = e =>
 e.target.name==='to'
    ?setValue({...value, to: e.target.value})
    :setValue({...value, from: e.target.value})
  
    useEffect(()=>{
        setSpiner2(true)
        console.log(data);
        coin.getPriceHistore(data)
        .then( setPrices)

        .finally(()=>setSpiner2(false))
    },[value])
  
  
//   {info.description[language]}
  //{funDescription()}  
if(spiner) return  <div>loading...</div> 
// if(spiner2) return  <div>loading2...</div> 
function criticalPrice(arg){
   return arg? <em className={arg>=0?C.green:C.red}>{arg}</em> : 'no information'
}
    return <div>
        <div className={C.itemDiv}>
            <h2>{info.name}</h2>
            <h3>Price: <b className={C.blue}>${info.market_data.current_price.usd}</b>({criticalPrice(info.market_data.price_change_24h_in_currency.usd)})</h3>
            <img src={info.image.large}/>
            <p  ref={textDescription}></p>
        </div>
        <div className={C.itemDate}>
            <input type="date" name="from" value={value.from} onChange={change} />
           <input type="date" name="to" value={value.to} onChange={change}  />
        </div>
    
<ChartCf prices={prices.prices} spiner={spiner2}/>

    </div>
}

export default CurrentCoin


