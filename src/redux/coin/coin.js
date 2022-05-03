import { lfCoin } from '../../localData/LocalData'
import api_coin from "../../apy/api"
import { errCoin,sortChange } from './helpCoin'



const T = {
    GET_ALL_COIN: 'GET_ALL_COIN',
    ADD_ID: 'ADD_ID',
    DELETE_ID: 'DELETE_ID',
    CHANGE_INPUT_API: 'CHANGE_INPUT_API',
    CHANGE_STATE_COIN: 'CHANGE_STATE_COIN',
    DELETE_ALL_ID: 'DELETE_ALL_ID',
    SORT: 'SORT'
}

const dataCoin = {
    allCoin: [],
    changeCoin: [],
    allId: [],
    allIdchange: [],
    inp: '',
    errInp: '',
    sort:  'class',
    
}
const coin = (state = dataCoin, action) => {
    switch (action.type) {
        case T.GET_ALL_COIN:
            return { ...state, allCoin: action.data, changeCoin: action.data, }

        case T.ADD_ID:
            if (action.id === '') return { ...state,
                 allId: ['', ...state.allId],
                 allIdchange:['', ...state.allIdchange] }

            return { ...state,
                 allId: [action.id, ...state.allId.filter(item => item.id !== action.id.id && item)] ,
                 allIdchange:[action.id, ...state.allIdchange.filter(item => item.id !== action.id.id && item)]}

        case T.DELETE_ID:
            return { ...state, 
                allId: state.allId.filter(item => item.id !== action.id),
                allIdchange: state.allIdchange.filter(item => item.id !== action.id)}

        case T.CHANGE_INPUT_API:
            
            if (!errCoin(action.str)) {
                return { ...state, errInp: '', 
                inp: action.str, 
                changeCoin: state.allCoin.filter(item => item.id.includes(action.str)) }
            } else {
                return { ...state, 
                    inp: action.str, changeCoin: [],
                     errInp: errCoin(action.str) }
            }

        case T.CHANGE_STATE_COIN:
            return { ...action.state }
        case T.DELETE_ALL_ID: return { ...state, allId: [],allIdchange:[], sort: 'class' }
        case T.SORT:  
        
            
            if(action.str==='class'){
                return {...state,allIdchange: state.allId , sort:'class'}
            }
            return{ ...state, allIdchange : action.arr, sort : action.str }
        
                
        default: return state
    }


}

const R_F_get_all_id = (data) => ({ data, type: T.GET_ALL_COIN })
const R_F_add_id = (id) => ({ id, type: T.ADD_ID })
export const R_F_delete_id = (id) => ({ id, type: T.DELETE_ID })
export const R_F_change_input_api = (str) => ({ str, type: T.CHANGE_INPUT_API })
const R_F_change_state = (state) => ({ state, type: T.CHANGE_STATE_COIN })
export const R_F_delete_allId = () => ({ type: T.DELETE_ALL_ID })
const R_F_sort = (arr, str) => ({ str, arr, type: T.SORT })

export const sort = (arr, str) => (dispatch) => {
    if(str==='class') return dispatch(R_F_sort(arr, str))

   const newArr = sortChange(arr, str) 
   
   dispatch(R_F_sort(newArr, str))
   

}

export const getAllCoin = () => (dispatch) => {

    lfCoin.getItem()
        .then(item =>
            item === null || !item.allCoin.length
            ? api_coin.coinsLists()
                .then(data => {
                    dispatch(R_F_get_all_id(data))
                   
                    api_coin.currentCoin(data[0].id)
                    .then(item => dispatch(R_F_add_id(item)))

                })
            : dispatch(R_F_change_state(item))
              )
}

export const addIdInfo = (id) => (dispatch) => {
    dispatch(R_F_add_id(''))

    api_coin.currentCoin(id)
        .then(item => dispatch(R_F_add_id(item)))
}
export default coin