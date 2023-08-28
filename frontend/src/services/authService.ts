import axios from "axios";
import { error } from "console";
import { axiosInstance } from "./authHeader";

const API_URL ="https://localhost:7001";
export const login = async (login: string, password: string) => {
    const body = { login, password };
    try {
      const response = await axios.post(API_URL + '/api/Account', body);
      if (response.data.code==="SUCCESS") {
        const userData = {
          isSuccessed: response.data.isSuccessed,
          code: response.data.code,
          title: response.data.title,
          text: response.data.text,
          data: {
            token: response.data.data.token,
          },
          exception: response.data.exception,
        };
        localStorage.setItem("user", JSON.stringify(userData));
      }
    } catch (error) {
      console.log("ERROR: ", error);
      throw error;
    }
  };
export const logOut=()=>{
    localStorage.removeItem("user");
    localStorage.clear()
    
}
export const register =async(email:string,firstName:string, secondName: string,miidleName:string, password:string) =>{
    const body ={email, firstName, secondName, miidleName, password}
    return await axios.put(API_URL, body).then ((response)=>{
        if (response.status===200){
            
        }
    })
}
// export const getUser = async() =>{
//     const sessionData = localStorage.getItem("user"); // Use getItem here
//   const token = sessionData ? JSON.parse(sessionData).data.token : null;
//     return await axios.get(API_URL+"/api/Account",{headers: token}).then((res)=>{
//         if (res.status===200){
//             console.log("RESULT:",res)
//         }
//         return res.data;
//     })
// }
export const getUser = async () => {
     try
     {
      const res = await axiosInstance.get(API_URL + "/api/Account");
      if (res.status === 200) {
        localStorage.setItem("userData", JSON.stringify(res.data.data));
      }
      return res.data.data;
    } catch (error) {
      console.log("error", error);
      throw error; // Rethrow the error to be caught by the caller
    }
  };
  