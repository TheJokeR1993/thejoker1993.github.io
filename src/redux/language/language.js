import axios from "axios";
import i18n from "../../helps/i18n";

// import f from '../../language/en'
// https://api.ipregistry.co/?key=tryout
const T = {
    CHANGE_LANGUEAGE: 'CHANGE_LANGUEAGE',
  
}

const lang = {
    lang: null
};

export const changeLang =(lang)=>(dispatch)=>{
   // console.log(i18n.store.data[lang]);
//    R_F_change_lang
    i18n.changeLanguage(lang)
    .then(()=>{
        dispatch(R_F_change_lang(lang))
    })
}

const language = (state = lang, action) => {
    // console.log(action.lang);
    switch (action.type) {
        case T.CHANGE_LANGUEAGE:
            
            return { lang: action.lang }
        

        default: return state
    }
}

 const R_F_change_lang = (lang) => ({ lang, type: T.CHANGE_LANGUEAGE })
// const R_F_first = (lang) => ({ lang, type: T.CHANGE_LANGUEAGE })

export const get_lang = () => (dispatch) => {
    const lanqu = localStorage.getItem('i18nextLng')
    if (lanqu === null) {
        axios.get('https://api.ipregistry.co/?key=tryout')
            .then(respon => respon.status === 200 ? respon.data : Promise.reject(respon))
            .then(item => {
                dispatch(changeLang(item.location.language.code))
            })         
} else {
        dispatch(changeLang(lanqu))

    }

}





export default language
