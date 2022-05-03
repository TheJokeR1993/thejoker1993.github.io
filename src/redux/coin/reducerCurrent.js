import api_coin from "../../apy/api"
import {
    getDateFromTo,
    getDateUNIX
} from "../../helps/date"
import {  lfCurrent } from "../../localData/LocalData"

const T = {
    CURRENT_FIRST: 'CURRENT_FIRST',
    CHANGE_DATA: 'CHANGE_DATA',
    CHART: 'CHART'
}
const d = getDateFromTo()

const currentEl = {
    item: {},
    data: {
        to: d.to,
        from: d.from
    },
    chart: {}
}

const current = (state = currentEl, action) => {

    switch (action.type) {
        case T.CURRENT_FIRST: return { ...state, item: action.item }
        case T.CHART: return { ...state,chart: action.item}
        case T.CHANGE_DATA :  
            let obj={...state.data}
          if (action.name === 'to') {
              if(action.value > state.data.from){
                  obj.to= action.value
              }else{
                  obj.from= action.value
                  obj.to = state.data.from
              }
        } else {
            if( action.value<state.data.to){
                obj.from=  action.value
            }else{
                obj.to= action.value
                obj.from=state.data.to
            } 
        }
        return {...state,data:obj}
        default: return state
    }

}


export const R_F_change_date = (value,name) => ({ value,name, type: T.CHANGE_DATA })


const first = (item) => ({ item, type: T.CURRENT_FIRST })
const chart = (item) => ({ item, type: T.CHART })


export const R_F_chart=(id,data)=>(dispatch)=>{
    const unix = getDateUNIX(data)
    const data_api = {
        'id': id,
        vs_currency: 'usd',
        from: unix.from,
        to: unix.to,
    }
    api_coin.getPriceHistore(data_api)
            .then(item=>dispatch(chart(item)))
}

export const R_F_current_first = (id) => (dispatch) => {
    lfCurrent.getItem()
        .then(item =>{
         if(item === null||item.item.id !==id) {
            api_coin.currentCoin(id)
            .then(cur => {
                lfCurrent.setItem({'item':cur,'data':currentEl.data})
                dispatch(first(cur))})
           
         }else{
            dispatch(first(item.item))
           
         }
            
            })
           

}

export default current