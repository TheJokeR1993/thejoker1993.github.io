import { createContext } from "react";

const ContextUser = createContext(
    {
       hook : {
        // name:'',
        // email:'',
        // password : '',
        // confirmPassword:'',
        // token : ''
       },
       setHook : ()=>{}
    }
)

export default ContextUser