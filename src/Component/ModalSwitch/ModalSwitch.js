import React from 'react'
import LoGin from '../LoGin/LoGin'
import Registration from '../Registration/Registration'
// yarn start
// const Components = {
//     Registration,
//     LoGin
// }

const ModalSwitch = props =>{
    
    switch(props.type){
        case 'LoGin' :return <LoGin {...props}/>
        case 'Registration' :return <Registration {...props}/>
        default : return <div>Not Found</div>
    }
}


export default ModalSwitch

