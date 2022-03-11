import React, { useContext, useEffect, useState } from "react";
import { profile, follow } from '../../apy/apySocial'
import C from '../Home/Home.module.css'
import { api } from '../../App';
import HOCloading from "../../Loading/HOCloading";
import LoGin from "../LoGin/LoGin";
import { Redirect } from "react-router-dom";
const Home = (props) => {
    const [user, setUser] = useState({})
    const [spiner, setSpiner] = useState(true)
    let userId = props.match.params.id;
    
    useEffect(function () {
        setSpiner(true)
        api.profile.get(userId)
        .then(item => {
            api.follow.get(userId)
                    .then(isBool =>setUser({...item,isBool}))
                    .finally(() => setSpiner(false))
            })
            
        }, [props.match.params.id])
        
        
        if(!userId) return <Redirect to={'/Friend'} />
    if (spiner) return <img className={C.spiner} src="https://i.gifer.com/origin/95/95396fe4265aafabea4f81e2324dd7c0.gif" />
  
    return <div className={C.userblok}>
        <div>
            <h2>{user.fullName}</h2>
            <img alt='' src={user.photos.large ? user.photos.large : 'https://i1.sndcdn.com/avatars-000495007683-zg65ko-t500x500.jpg'} />
        </div>
        {user.isBool ?
            <button className={C.buttondelete}>unsubscribe</button>
            : <button className={C.buttonadd}>subscribe</button>}

    </div>
}

export default Home