
// import localforage from "localforage"
// import { uid } from 'rand-token';
// let currentToken = ''
// const data = {
//     time : new Date().getTime(),
//     hour72 :  259200000,
//     minut1 : 60000
// }
// const UserFor = localforage.createInstance({ name: 'User' })


// export const User = {
//     set: (data, error) => {

//         back.get()
//             .then(all => {
//                 if (!all) {
//                     UserFor.setItem('User', { token: data.token })
//                     return back.set(data)
//                 }

//                 const userLook = all.find(item => item.email === data.email)
//                 if (userLook) {
//                     error()
//                 } else {
//                     UserFor.setItem('User', { token: data.token })
//                     back.set(data)
//                 }

//             })


//     },
//     removeUser : ()=>{
//         UserFor.removeItem('User')
//     },
//     setToken:newToken=>{
        
//         UserFor.setItem('User',{token:newToken,time : data.time +data.hour72})
//     },
//     changeKey: (key,value)=>{
//        back.chengeKey(`htpps://user/setting?token=${currentToken}&${key}=`+value)
      
//     },
//     get: ({ email, password }, context) => {
//         back.get()
//             .then(all => {

//                 const getUser = all.find(item => {

//                     if (item.email === email) {
//                         if (item.password === password) {

//                             return true
//                         } else {
//                             return console.log('eror');
//                         }
//                     } else {
//                         return console.log('eror');
//                     }
//                 })

//                 if (getUser){
//                     changeToken(getUser,context,all)
//                     }

//             })

//     },
//     getToken: () => UserFor.getItem('User'),
//     autoRegistration: (hook) => {
//         User.getToken()
//             .then(user => {
//                 if (!user) return 
//                 if(user.time <data.time)return

//                 back.get()
//                     .then(item => {
//                         if(!item) return
//                      const thisUser = item.find(i=> i.token === user.token)
                    
//                     if(thisUser){
                        
//                         // thisUser.token=uid(16) 
//                         // User.setToken(thisUser.token)
//                         // back.setTokenAll(item)
//                         // hook(thisUser)  
//                         changeToken(thisUser,hook,item)
//                     }  
//                     })


//             })
//     }
// }

// const Back = localforage.createInstance('Back')

// export const back = {
//     setTokenAll : (newList)=>Back.setItem('AllUser',newList),
//     get: () => Back.getItem('AllUser'),
//     set: function (user) {
//         this.get()
//             .then(all => {
//                 all
//                     ? Back.setItem('AllUser', [...all, user])
//                     : Back.setItem('AllUser', [user])

//             })

//     },
//     chengeKey:(url)=>{
//         const changeKeyInfo = url.split('?')[1].split('&').map(i=>i.split('=')[1])
//         console.log(changeKeyInfo);
//         // back.get()
//         // .then(item=>{
//         // })
//     }
// }



// const changeToken = (user,hook,all)  =>{
//     user.token=uid(16) 
//     User.setToken(user.token)
//     back.setTokenAll(all)
//     hook(user)
//     currentToken = user.token

// }