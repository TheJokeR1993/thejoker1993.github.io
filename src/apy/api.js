import axios from 'axios';
const errorF =respon=>respon.status===200?respon.data:Promise.reject(respon)
const instos = axios.create({
    baseURL:'https://api.coingecko.com/api/v3/',
})

export  const  coin = {
    coinsLists : ()=> instos.get('coins/list')
    .then(errorF),
    currentCoin : (id)=> instos.get('coins/'+id)
    .then(errorF),
    getPriceHistore : ({id,vs_currency,from,to})=> instos.get('coins/'+id+'/market_chart/range?vs_currency='+vs_currency+'&from='+from +'&to='+to)
    .then(errorF),

}


export  default {
    coin
   
}

