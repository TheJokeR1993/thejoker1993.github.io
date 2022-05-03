import React from "react";

import App from "./App";
import {  get_lang } from "./redux/language/language";
import { connect } from "react-redux";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

const mapStateToProps = (state)=>{
   
    return {
        lang :state.lang.lang
    }
}

const AppContainer=(props)=> {
  const { t ,i18n} = useTranslation();
 
    useEffect(()=>{
         props.get_lang(props.lang,i18n)
  
    },[props.lang])

     return  <App/> 
    
}

export default connect(mapStateToProps,{get_lang})(AppContainer)

const arr=['1f','0a','3a','0b']

