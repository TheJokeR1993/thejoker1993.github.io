import React,{ useEffect, useState } from "react"
import { connect } from "react-redux"
import { getAllCoin,
    addIdInfo,
    R_F_change_input_api,
    R_F_delete_id,
    R_F_delete_allId,
    sort
     } from "../../redux/coin/coin"
import Coin from "./Coin"
import {spiner} from '../../helps/spiner'

const mapStateToProps =(state)=>{
    return {
        coin: state.coin,
        lang: state.lang
    }
}

const  ContainerCoin = props=>{
 
    
    useEffect(()=>{
         props.getAllCoin()
         
    },[])
   
return !props.coin.allCoin.length ? spiner('first') :<Coin {...props}/>
}

export default connect(mapStateToProps,{
    getAllCoin,
    addIdInfo,
    R_F_change_input_api,
    R_F_delete_allId,
    R_F_delete_id,
    sort
})(ContainerCoin)