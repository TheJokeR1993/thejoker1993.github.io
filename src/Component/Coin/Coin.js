import React, { useCallback, useState } from "react";
import CoinItem from './CoinItem'
import C from './Coin.module.css'
import { spiner } from "../../helps/spiner";
import { t } from "i18next";
import debouce from 'lodash.debounce'

const Coin = (props) => {
    const [look,setLook]=useState(false)
  const [changeValue,setChangeValue]= useState(props.coin.inp)
  const debouceCallback= useCallback(debouce(value=> props.R_F_change_input_api(value),1500),[]) 
   
    const changePrice = (arg) => {
        let price = ''
        switch (arg.value) {
            case 'upp':
            case 'down': arg.value === 'upp'
                ? arg.value = 'down'
                : arg.value = 'upp'
                price = arg.value === 'upp' ? 'price▲' : 'price▼'
                return arg.innerHTML = price
            case 'nz':
            case 'na': arg.value === 'na'
                ? arg.value = 'nz'
                : arg.value = 'na'
                price = arg.value === 'na' ? '0-Az' : '0-Za'
                return arg.innerHTML = price
            case 'zn':
            case 'an': arg.value === 'an'
                ? arg.value = 'zn'
                : arg.value = 'an'
                price = arg.value === 'an' ? 'Az-0' : 'Za-0'
                return arg.innerHTML = price
          default:
        }

    }

    return <div className={C.main}>
            {look
            ?  <img alt='' onClick={e=>setLook(false)} className={C.mainImg_open} src="https://img2.freepng.ru/20180409/geq/kisspng-computer-icons-eye-clip-art-eye-5acb3e384aa5c4.4631413615232691763058.jpg" />
            : <img alt=''  onClick={e=>setLook(true)} className={C.mainImg_close} src="https://w7.pngwing.com/pngs/221/536/png-transparent-eye-password-see-view-minimalisticons-icon.png" />
            }
        <div className={look? C.none : C.mainLeft}>
           
           

            <div className={C.mainInput}>
                <input type={'text'} value={changeValue} onChange={e =>{
                    setChangeValue(e.target.value)      
                    debouceCallback(e.target.value)} } />
            </div>
            <div className={C.error_div}>
                {props.coin.errInp
                    ? <h2 className={C.error_inp}>{t(props.coin.errInp)}</h2>
                    : <h2>All companies :</h2>
                }

            </div>
            <div className={C.mainAllRezult}>

                {props.coin.errInp !== ''
                    ? spiner('error')
                    : !props.coin.changeCoin.length
                        ? spiner('notFound')
                        : props.coin.changeCoin.map(item => <p onClick={() => props.addIdInfo(item.id)} key={item.id}>{item.name}</p>
                        )}
            </div>
           
        </div>

        <div className={C.rezult}>
            <div className={look?C.none : C.rezultLeft}></div>
            <div className={look?C.rezult_div_open : C.rezult_div}>
                {props.coin.allId.length >= 2 &&

                    <div className={look?C.rezult_menu_open :C.rezult_menu}>
                        <div className={C.sort_div} onClick={e => e.target.value !== 'clear' && props.sort(props.coin.allIdchange, e.target.value)}>
                            <button className={props.coin.sort === 'class' ? C.active : C.no_active} value='class' >{t('Classic')}</button>
                            <button className={(props.coin.sort === 'upp' || props.coin.sort === 'down') ? C.active : C.no_active} value='upp' onClick={e => changePrice(e.target)} >{t('price')}▲ </button>

                            <button className={(props.coin.sort === 'an' || props.coin.sort === 'zn') ? C.active : C.no_active} value='an' onClick={e => changePrice(e.target)} >Az-0</button>
                            <button className={(props.coin.sort === 'na' || props.coin.sort === 'nz') ? C.active : C.no_active} value='na' onClick={e => changePrice(e.target)} >0-Az</button>
                            <button className={C.rezultClear} value="clear" onClick={() => props.R_F_delete_allId()}>{t('Clear')}</button>
                        </div>

                    </div>
                }
                <div className={C.rezultItem}>
                    {props.coin.allIdchange
                        .map(item => <CoinItem key={item.id} lang={props.lang.lang} Items={item} Delete={props.R_F_delete_id} />)
                    }
                </div>

            </div>
        </div>
    </div>

}
export default Coin

