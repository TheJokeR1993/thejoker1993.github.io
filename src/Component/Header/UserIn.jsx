import React, {  useContext, useState } from "react";
import ContextUser from '../../ContextUser'
import Modal from 'react-modal';
import C from './Header.module.css'
import ModalSwitch from "../ModalSwitch/ModalSwitch";
import { NavLink } from "react-router-dom";

// 


 const Components = ['Registration','LoGin']




 const UserIn =()=>{
    // const [isRegistration , setIsRegistration]= useState(false)
    // const [isLogin , setIsLogin]= useState(false)
   const [isModal,setIsModal]= useState(false)
   const [component,setComponent] = useState(null)
   
    const Users = useContext(ContextUser)

 const close = ()=>setIsModal(false)
 const open = ()=>setIsModal(true)

    
    const changeComonent = (i)=>{
        setComponent(Components[i])
    }

    
return (<div className={C.user}>

    {Users.hook
      ?
        <NavLink to='/Setting'>
            <div className={C.userdiv} >
              <p >{Users.hook.name}</p>
              <img   alt="regist" className={C.login} src="https://i1.sndcdn.com/avatars-000495007683-zg65ko-t500x500.jpg"/>
             </div>
        </NavLink>

    : <div className={C.userdiv} onClick={()=>{open(); changeComonent(1)}} >
            <img  alt="regist" className={C.login} src="https://w7.pngwing.com/pngs/604/758/png-transparent-computer-icons-essex-school-entrance-angle-child-company-thumbnail.png"/>
    </div>
    }



    <Modal
    className={C[component]}
    isOpen={isModal}
    ariaHideApp={false} 
    onRequestClose={close} 
    >
   
    <ModalSwitch close={close} submit={()=>{open();changeComonent(0)}} type={component}/>
   
    </Modal>


</div>

)

        
        
}

export default UserIn




