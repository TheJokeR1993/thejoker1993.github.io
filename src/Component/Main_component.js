import React from "react";
import {Switch,Route} from 'react-router-dom'
import Coin from "./Coin/Coin"
import Home from './Home/Home'
import Todo from './Todo/Todo'
import Setting from './User/Setting'
import FriendContainer from "./Friend/FriendContainer";
import CurrentCoin from './Coin/CurrentCoin'
const Main_component =()=>{
    return <Switch>

    {/* <Route path="/Coin"><Coin /></Route> */}
    <Route path="/Todo" component={Todo} />
    <Route path="/Coin" exact component={Coin} />
    <Route path="/Coin/:id?" component={CurrentCoin} />
    <Route path='/Setting' component ={Setting}/>
    <Route path='/Friend/:limit?/:page?/:search?' component ={FriendContainer}/>
    <Route path="/Home/:id?" component={Home} />
  </Switch>
}
export default Main_component