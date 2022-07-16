import React, { useRef, useLayoutEffect } from "react";
import C from './Coin.module.css'

import { NavLink } from "react-router-dom";
import { spiner } from "../../helps/spiner";
import { t } from "i18next";


const CoinItem =({
    Items,
    lang,
    Delete
}) =>{

  let info = t('Coin_info')

    const textDescription =useRef(null)
    useLayoutEffect(()=>{
       if(textDescription.current ){
           
        Items.description[lang]
            ?textDescription.current.innerHTML = Items.description[lang]
            :  Items.description['en'] && (textDescription.current.innerHTML = Items.description['en'])
                    
        }
    },[Items,lang])
    if(Items==='') return  spiner('loading')
    //description/image.small/name/id/market_data.high_24h.usd

    return <div className={C.card}>
        <button className={C.cardClose} onClick={()=>Delete(Items.id)}>X</button>
        <div className={C.card_header}>
            <img alt="" src={Items.image.small}></img>
           <NavLink className={C.card_text} to={"Coin/"+Items.id}>{Items.name} </NavLink> 
        </div >
        <div className={C.cardMain}>
        {!Items.description['en']  
        ?<h2>{info}</h2>
        :<p ref={textDescription}></p>
        
          }
         
         {!Items.market_data.current_price.usd ?<h3 className={C.red}>{t(info)}</h3> :<h3 className={C.green}>{t('price')} :{Items.market_data.current_price.usd} $</h3>  }
       
         
         </div>
        </div>
}
export default CoinItem

