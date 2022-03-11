import axios from 'axios';
const tokenA = '50ca4fea-d1f3-4118-a21b-95065b855bfb'
const errorF =respon=>respon.status===200?respon.data:Promise.reject(respon)






const api = token =>{

const instos = axios.create({
    baseURL:'https://social-network.samuraijs.com/api/1.0/',
    withCredentials:true,
    headers :{
        'API-KEY':token
    }
})


 const users = {
    get: (count,page,term)=> {
        const termP = term ? `&term=${term}`:'';
     return   instos.get(`users?count=${count}&page=${page}`+termP)
        .then(errorF)
    }
}
 const auth = {
  
    post: (email,password,rememberMe,captcha)=>instos.post(`auth/login`,{email,password,rememberMe,captcha})
    .then(errorF),
    authMe : ()=> instos.get(`auth/me`)
    .then(errorF)
   
    
}
 const profile = {
    get : (id)=> instos.get(`profile/${id}`)
    .then(errorF)
    .then(e=>{  
        e.token = tokenA;
        e.id = id
        return e
    }),
}

 const follow = {
    get : (id)=> instos.get(`follow/${id}`)
    .then(errorF)
    .then(e=>{  
     
        return e
    }),
    post: (id) => instos.post(`follow/${id}`)
    .then(errorF),
    delete:(id) => instos.post(`follow/${id}`)
    .then(errorF)
   
}



return {
    follow,
    auth,
    profile,
    users,
    token
}

}

// console.log(api(''));
export default api