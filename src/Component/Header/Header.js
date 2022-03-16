import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import '../../App.css'
import C from './Header.module.css'
import ContextUser from "../../ContextUser";
import UserIn from './UserIn'



const Header = () => {
    const context = useContext(ContextUser)
    
    // const[Url,setUrl]=useState(window.location)
   
    // const [isRegistration , setIsRegistration]= useState(false)
    // const [isLogin , setIsLogin]= useState(false)
   
    // const Users = useContext(ContextUser)

    // const registration=()=>{
    //     setIsLogin(false)
    //     setIsRegistration(true)
    // }
// const userHome = '/Home/'+ context.hook?.userId


const userHome = '/Home/'+ context.hook?.id
    return <header className={C.header}>
         {context.hook &&  (<NavLink className={C.header_list} to={userHome} >Home</NavLink>)}  
            <NavLink className={C.header_list} to="/Todo">Todo</NavLink>
            <NavLink className={C.header_list} to="/Coin">Coin</NavLink>
            <NavLink className={C.header_list} to="/Friend/20/1">Friend</NavLink>
            <div>

            <UserIn />
            </div>

            {/* <div onClick={()=> setIsLogin(true)} >
        
           {/* {
           Users.hook 
           ? Users.hook.name 
           :<img  alt="regist" className={C.login} src="https://w7.pngwing.com/pngs/604/758/png-transparent-computer-icons-essex-school-entrance-angle-child-company-thumbnail.png"/>
           
           } */}
             {/* <img src="https://www.crushpixel.com/big-static18/preview4/avatar-profile-pink-neon-icon-3073413.jpg"/> */}
           
      
{/* <Modal
isOpen={isLogin}
onRequestClose={()=>setIsLogin(false)} 
ariaHideApp={false} className={C.loginModal}>
    <div className={C.loginUser}>
        <input type="email" placeholder="email"/>
        <input type="password" placeholder="password"/>
        <div className={C.loginBtn}>
            <button>Log in</button>
            <button onClick={registration}>Registration</button>
        </div>
    </div>
</Modal>
<Modal
    isOpen={isRegistration}
    className={C.registrationModal}
onRequestClose={()=>setIsRegistration(false)}
ariaHideApp={false}>
    <Registration Close={()=>setIsRegistration(false)} />
    
   
</Modal> */}
    </header>
}
export default Header

