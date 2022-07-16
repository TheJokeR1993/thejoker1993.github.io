// const time = {
//     day : 86400,
//     mounth : 2629743,
//     year : 31556926 

// }
const d= new Date()
const checkZoro=(arg)=> arg<10 ? '0'+arg:arg



export const getUnixfoDate = (arg)=>{
        const dU= new Date(arg)
       return dU.getFullYear()+'-'+checkZoro(dU.getMonth()+1)+'-' + checkZoro(dU.getDate()) 
}    
    


export const getDateFromTo = (arg)=>{

          return {
        to:d.getFullYear()+'-'+checkZoro(d.getMonth()+1)+'-' + checkZoro(d.getDate()) ,
        from : d.getFullYear()-1+'-'+checkZoro(d.getMonth()+1)+'-' + checkZoro(d.getDate()) 
    }
    
    // return {
    //     to:d.getFullYear()+'-'+checkZoro(d.getMonth())+'-' + checkZoro(d.getDate()) ,
    //     from : d.getFullYear()-1+'-'+checkZoro(d.getMonth())+'-' + checkZoro(d.getDate()) 
    // }
}

export const unixDate = d => (d+"").slice(0,10)
export const  getDateUNIX = ({from,to})=>{
    from =unixDate(new Date(from).getTime());
    to =  unixDate(new Date(to).getTime());
    
    if(from>to){
        let newDate= from
        from=to
        to=newDate
    }
    // console.log(from);
    return {
        from,
        to
    }

}


