import axios from "axios"
import { axiosInstance } from "./authHeader"

export const getAllRoles =async()=>{
    return await axiosInstance.get(`/api/User/roles`).then((res)=>{
        
            return res.data.data
        
        
    }).catch((err)=>{
        console.log("ERROR:" , err)
    })
}
export const getUsers =async()=>{
    try{
        return await axiosInstance.get(`/api/User`).then((res)=>{
                return res.data.data
        }).catch((err)=>{
            console.log("FAILED: ",err)
        })
    }
    catch(err){

    }
    
}
export const getCustomUser =async(userId:string)=>{
    return await axiosInstance.get(`/api/User/${userId}`).then((res)=>{
            return res.data.data.data
    }).catch((err)=>{
        console.log("FAILED:",err)
    })
}
export const createUser = async (
    lastName: string,
    firstName: string,
    middleName: string,
    roleId: string,
    phoneNumber: string,
    email: string,
    password: string,
    organizationId: string
  ): Promise<string | null> => {
    try {
      // Make the API call to create the user
      const response = await axiosInstance.post("/api/User", {
        lastName,
        firstName,
        middleName,
        roleId,
        phoneNumber,
        email,
        password,
        organizationId,
      });
  
      
        return response.data.data.id;
      
  
      
    } catch (error) {
      console.error('Error creating user:', error);
      return null;
    }
  };
export const putUser=async()=>{
    await axiosInstance.put("/api/User").then((res)=>{
        
            console.log("PUT REQUEST:",res.data.code)
        
    }).catch((err)=>{
        console.log("ERROR IN PUT REQUEST: ",err)
    })
}