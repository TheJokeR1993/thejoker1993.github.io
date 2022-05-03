import axios from "axios";
import i18next from "i18next";
import store from "..";
import { lfCoin, lfLang } from "../../localData/LocalData";

// import f from '../../language/en'
// https://api.ipregistry.co/?key=tryout
const T = {
    CHANGE_LANGUEAGE: 'CHANGE_LANGUEAGE',
    FIRST_LANGUEAGE: 'FIRST_LANGUEAGE'
}

const lang = {
    lang: null
};

const language = (state = lang, action) => {
    switch (action.type) {
        case T.CHANGE_LANGUEAGE:
            action.i18&& action.i18.changeLanguage(action.lang)
            return { ...state, lang: action.lang }
        case T.FIRST_LANGUEAGE:

            return { ...state, lang: action.lang }

        default: return state
    }
}





// lanqu==='null' && localStorage.setItem('i18nextLng','en')
//  axios.get('https://api.ipregistry.co/?key=tryout')
//     .then(respon => respon.status === 200 ? respon.data : Promise.reject(respon))
//     .then(item => {
//         lanqu=item.location.language.code
//     } )       
export const R_F_change_lang = (lang, i18) => ({ lang, i18, type: T.CHANGE_LANGUEAGE })
const R_F_first = (lang) => ({ lang, type: T.CHANGE_LANGUEAGE })


export const get_lang = (lang, i18) => (dispatch) => {
 
    let lanqu = localStorage.getItem('i18nextLng')
if(!lang){
    lfLang.getItem()
        .then(item => {
            if (item === null) {
                axios.get('https://api.ipregistry.co/?key=tryout')
                    .then(respon => respon.status === 200 ? respon.data : Promise.reject(respon))
                    .then(item => {
                        i18.changeLanguage(item.location.language.code)
                        dispatch(R_F_first(item.location.language.code))
                        lfLang.setItem(item.location.language.code)
                    })
            } else {
                dispatch(R_F_first(lanqu)) 
            }})
}else{
   dispatch(R_F_change_lang(lanqu,i18))

}
    



    //    if(lang===null){
    //        dispatch(R_F_change_lang(lanqu,i18))
    //    }else{
    //        console.log(lanqu);
    //     dispatch(R_F_change_lang(lang,i18))
    //    }

    // if(lanqu ==='first'){
    //     i18.changeLanguage('en')
    //     dispatch(R_F_change_lang('en'))
    // }else{
    //     i18.changeLanguage(lanqu)
    //     dispatch(R_F_change_lang(lanqu))
    // }


}





export default language
