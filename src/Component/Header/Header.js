import React from "react";
import { NavLink } from "react-router-dom";
import '../../App.css'
import C from './Header.module.css'
import { connect } from "react-redux";
import LogOut from "../Google/LogOut";
import LogIn from "../Google/LogIn";
import  { t } from "i18next";
import { changeLang } from "../../redux/language/language";




const Header = (props) => {

console.log(t('cryptocurrency'));

   
    const lang_D = ['en', 'ru', 'uk']

    return <header className={C.header}>
        <NavLink className={C.header_list} to="/Coin">{t('cryptocurrency')}</NavLink>
        <NavLink className={C.header_list} to="/Todo">Todo</NavLink>
    

        {props.lang&&
            <select className={C.header_sel} onChange={(e)=>{props.changeLang(e.target.value)}} value={props.lang}>
                {lang_D.map(i => <option key={i} value={i} >{i === 'uk' ? 'ua' : i}</option>)}

            </select>
        }
{/* <div> */}
    {/* <LogIn/> */}
    {/* <LogOut/> */}
    {/* </div>   */}
      
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
export default connect(mapStateToProps, { changeLang })(Header)

