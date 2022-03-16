import React, { useContext, useEffect, useState } from "react";
import C from '../Home/Home.module.css'
import { api } from '../../App';
import ContextUser from '../../ContextUser'

import { Redirect } from "react-router-dom";

const Home = (props) => {
    const [user, setUser] = useState({})
    const [spiner, setSpiner] = useState(true)
    const [status, setStatus] = useState('')
    const [isShowInput,setShowInput] = useState(true)
    const [change,setChange] = useState('')
    const context = useContext(ContextUser).hook
    let userId = props.match.params.id;

    const get_status=(arg)=>{
        api.profile_status.get(arg)
        .then(e=> e ? setStatus(e) : setStatus(e?e:'No infomation')
        );
        
    }

    useEffect(function () {
        setSpiner(true)
        get_status(userId)
        api.profile.get(userId)
        .then(item => {
            console.log(item);
            api.follow.get(userId)
                    .then(isBool =>setUser({...item,isBool}))
                    .finally(() => setSpiner(false))
            })
            
        }, [props.match.params.id])
        
        const changetatus = ()=>{
           if(+user.id !== context.id)  return
            setShowInput(false)
        }
        if(!userId) return <Redirect to={'/Friend'} />
        if (spiner) return <img className={C.spiner} src="https://i.gifer.com/origin/95/95396fe4265aafabea4f81e2324dd7c0.gif" />
       function blur_change(){
           if(status=== change) return
           api.profile_status.put(change)
           .then(e=>{
               console.log(e);
               if(e.resultCode=== 0) return setStatus(change)
            })
            setShowInput(true)
       }

    //    <label className={C.switch}>
    //    <input type="checkbox"/>sdf
    //    <span className={C.slider} ></span>
    //  </label>
        
    return <div className={C.userblok}>
        <div>
            <h2>{user.fullName}</h2>
            <img alt='' src={user.photos.large ? user.photos.large : 'https://i1.sndcdn.com/avatars-000495007683-zg65ko-t500x500.jpg'} />
        </div>
        <div>
         <h2>Status : { isShowInput
            ?   <em onDoubleClick={changetatus}>{status}</em>
            :<input autoFocus onBlur={blur_change} value={change} onChange={e=>setChange(e.target.value)}/>
            }
        </h2>
        {+user.id !== context.id && (user.isBool
            ?<button className={C.buttondelete}>unsubscribe</button>
            : <button className={C.buttonadd}>subscribe</button>
         )}
         <h3>About Me :{user.aboutMe|| 'No infomation'}</h3>
         <h3>looking For  Job : {user.lookingForAJob?'Yes':'No'}</h3>
         {user.lookingForAJob &&<h3>
            objective :
             {user.lookingForAJobDescription}
         </h3>
         }
        </div>
        
        
        

    </div>
}

export default Home