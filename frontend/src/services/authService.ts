import axios from "axios";
import { error } from "console";

const API_URL ="https://localhost:7001";
export const login = async(login:string, password:string) =>{

    const body ={login, password};

    return await axios.post(API_URL+'/api/Account',body).then ((response)=>{
        if (response.data.accessToken){
            const userData ={
                roles:response.data.roles,
                accessToken: response.data.accessToken,
                id:response.data.id,
                email:response.data.email,
              }
              console.log(response.data);
              localStorage.setItem("login", response.data.login)
        }
        return response.data;
    }).catch((error)=>{
        console.log("ERROR: ", error)
    })

}

export const register =async(email:string,firstName:string, secondName: string,miidleName:string, password:string) =>{
    const body ={email, firstName, secondName, miidleName, password}
    return await axios.put(API_URL, body).then ((response)=>{
        if (response.status===200){
            
        }
    })
}