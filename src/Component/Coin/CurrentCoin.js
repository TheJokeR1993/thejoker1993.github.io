import { t } from "i18next";
import React, { useEffect, useRef } from "react";
import { connect } from "react-redux";
import { spiner } from "../../helps/spiner";
import  { R_F_current_first,
    R_F_chart,
    R_F_change_date
} from "../../redux/coin/reducerCurrent";

import ChartCf from "./ChartCf";
import C from './Coin.module.css'



const mapStateToProps =(state)=>{
    return {
        current: state.current,
        lang: state.lang.lang
    }
    
}


const CurrentCoin = (props) => {
    // console.log(props.current);
    let widthChart = (window.innerWidth) * 0.8 - 50 + ''
    const textDescription = useRef(null)

    useEffect(() => {
        props.R_F_chart(props.match.params.id,props.current.data)
    //  console.log(11);
       
     }, [props.current.data])

    useEffect(() => {
       props.R_F_current_first(props.match.params.id)
       props.R_F_chart(props.match.params.id,props.current.data)
       if (textDescription.current) {
          
                if(props.current.item.description['en']!==''){
                    textDescription.current.innerHTML = props.current.item.description['en']
            }else{
                textDescription.current.innerHTML = t('NoPrice')
            }
            }
    }, [textDescription.current])

   
    
    if (!props.current.item.id) return <div>loading...</div>

   let info =props.current.item
    function criticalPrice(allPr,arg) {
        if(!allPr){
            return <h3><b className={C.red}>{t('NoPrice')}</b> </h3>
        }else{
          return  arg
            ? <h3><b className={C.blue}>{t('price')} : $ {info.market_data.current_price.usd}</b> (<em className={arg >= 0 ? C.green : C.red}>{arg}</em> )</h3> 
            : <h3><b className={C.blue}>{t('price')} : $ {info.market_data.current_price.usd}</b> </h3>
        }
    }

    return <div className={C.currentItem}>
        <div className={C.itemDiv}>
            <h2>{info.name}</h2>
            {criticalPrice(info.market_data.current_price.usd,info.market_data.price_change_24h_in_currency.usd)}
            <img alt='' src={info.image.small.slice(0,4)==='http'?info.image.large:'https://filmnavi.ru/images/movie_no_image.jpg'} />
            <p ref={textDescription}> </p>
        </div>
        {!info.market_data.current_price.usd
        ?''
        :<div>

        <div className={C.itemDate}>
            <input type="date" name="from" value={props.current.data.from} onChange={e=>props.R_F_change_date(e.target.value,e.target.name)} />
            <input type="date" name="to" value={props.current.data.to} onChange={e=>props.R_F_change_date(e.target.value,e.target.name)} />
        </div>

         <div className={C.charts} style={{ height: widthChart }}>
            {!props.current.chart.prices
                ?spiner('loadingd',widthChart)
                :<ChartCf prices={props.current.chart.prices}   />
            }
            
        </div> 
        </div> }

    </div>
}

export default connect(mapStateToProps,{
   R_F_current_first,
   R_F_chart,
   R_F_change_date
})(CurrentCoin)

