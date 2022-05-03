import React from "react";
import { NavLink } from "react-router-dom";
import '../../App.css'
import C from './Header.module.css'

import { connect } from "react-redux";
import LogOut from "../Google/LogOut";
import LogIn from "../Google/LogIn";
import i18next, { t } from "i18next";
import { R_F_change_lang } from "../../redux/language/language";


const Header = (props) => {

    
    
   
    const lang_D = ['en', 'ru', 'uk']

    return <header className={C.header}>
        
        <NavLink className={C.header_list} to="/Todo">Todo</NavLink>
        <NavLink className={C.header_list} to="/Coin">{t('cryptocurrency')}</NavLink>
        {/* <NavLink className={C.header_list} to="/Friend/20/1">Friend</NavLink> */}
        {/* <div><h1>{t("title")}</h1></div> */}

        {props.lang&&
            <select className={C.header_sel} onChange={(e)=>props.R_F_change_lang(e.target.value,i18next)} value={props.lang}>
                {lang_D.map(i => <option key={i} value={i} >{i === 'uk' ? 'ua' : i}</option>)}

            </select>
        }
<div>
    {/* <LogIn/> */}
    {/* <LogOut/> */}
    </div>     {/* <div>

            <UserIn />
            </div> */}

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
const mapStateToProps = (state) => {

    return {
        lang: state.lang.lang
    }
}
export default connect(mapStateToProps, { R_F_change_lang })(Header)
// export default Header

