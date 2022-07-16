import React from "react";

import App from "./App";
import {  get_lang } from "./redux/language/language";
import { connect } from "react-redux";
import { useEffect } from "react";



const mapStateToProps = (state)=>{
   
    return {
        lang :state.lang.lang
    }
}

const AppContainer=(props)=> {

    useEffect(()=>{
      //  i18n.changeLanguage(props.lang)
         props.get_lang()
    },[])
   
     return  <App/> 
}

export default connect(mapStateToProps,{get_lang})(AppContainer)


