import React from "react";
import {Switch,Route} from 'react-router-dom'
import CurrentCoin from './Coin/CurrentCoin'
import TodoContainer from "./Todo/TodoContainer";
import ContainerCoin from "./Coin/ContainerCoin";
const Main_component =()=>{
    return <Switch>

    
    <Route path="/Coin" exact component={ContainerCoin} />
    <Route path="/Coin/:id?" component={CurrentCoin} />
   
    <Route path="/Todo" component={TodoContainer} />
    
    <Route path="/"  component={ContainerCoin} />
  </Switch>
}
export default Main_component