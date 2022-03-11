import React  from "react";
import {api} from '../App';
const HOCloading =  (Component)=> (props)=>{
console.log(api);
console.log(Component);
console.log(props);

return <Component {...props}    />
}

export default HOCloading 