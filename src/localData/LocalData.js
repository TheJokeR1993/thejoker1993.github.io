import localforage from "localforage"


const data = {
    time : new Date().getTime(),
    hour72 :  259200000,
    minut1 : 60000
}
const UserFor = localforage.createInstance({ name: 'User' })

 const  token ={
    getItem:()=> UserFor.getItem('User'),
    setToken:(newToken)=>UserFor.setItem('User',{token:newToken,time : data.time+data.hour72}),
    remove :()=> UserFor.removeItem('User')
}

export default token