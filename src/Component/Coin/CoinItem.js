import React, { useEffect, useState } from "react";
import CurrentCoin from './CurrentCoin'
import C from './Coin.module.css'
import {coin} from '../../apy/api'
import { NavLink } from "react-router-dom";
const {currentCoin}=coin
//17^10
const CoinItem = props =>{
    const [AllElement,setAllElement]=useState({})
    const [Spiner,setSpiner]=useState(true)
    useEffect(()=>{
        currentCoin(props.Items)
        // axios.get(`https://api.coingecko.com/api/v3/coins/`+props.Items)
        //    .then(respon=>respon.status===200?respon.data:Promise.reject(respon))
           .then(setAllElement)
           .finally(()=>setSpiner(false))
           
          
    },[])
    const lang = 'en'

    if(Spiner) return  <div>loading...</div> 
 
    return <div className={C.card}>
        <button className={C.cardClose} onClick={()=>props.Delete(props.Items)}>X</button>
        <div className={C.card_header}>
           <NavLink to={"Coin/"+AllElement.id}><h2>{AllElement.name}</h2> </NavLink> 
        <img alt="" src={AllElement.image.small}></img>
        </div >
        <div className={C.cardMain}>
        <p>{AllElement.description[lang]}</p>
         <h3>Price : {AllElement.market_data.high_24h.usd} $
         </h3>
         </div>
        </div>
}
export default CoinItem

// market_data.high_24h.usd
// market_data.high_24h.last_updated
