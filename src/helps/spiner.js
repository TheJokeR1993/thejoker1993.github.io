import React from "react"
export const spiner =(key,style)=>{
    switch(key){
        case 'first': return <img style={{
            zIndex:"12", 
            height :"100vh",
             width: "100vw"
        }} alt="first" src="https://i.pinimg.com/originals/a4/45/3d/a4453d8329f0b9f48d38ad5e541e00e4.gif"/>
        case 'error': return <img alt="error" src="https://cdn.dribbble.com/users/2469324/screenshots/6538803/comp_3.gif"/>

        case 'loading': return <img style={{  
            height :"420px", 
            width: "240px",
            borderRadius: "10px",
            boxShadow: '0px 0px 9px black',
            margin:' 10px',
        }} alt="loading" src="https://c.tenor.com/G9LwLc5rCEIAAAAC/signs-infinity.gif"/>
        case 'loadingd': return <img style={{  
            width:'100%',
            height: style,
            margin:'0 auto',
        }} alt="loading" src="https://c.tenor.com/G9LwLc5rCEIAAAAC/signs-infinity.gif"/>
        case 'notFound': 
        return<img  alt="notFound" src="https://cdn.dribbble.com/users/308895/screenshots/2598725/no-results.gif"/>
        default:
    }
   
}

