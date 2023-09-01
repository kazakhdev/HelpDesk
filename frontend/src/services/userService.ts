import axios from "axios"
import { axiosInstance } from "./authHeader"

export const getAllRoles =async()=>{
    return await axiosInstance.get(`/api/User/roles`).then((res)=>{
        if (res.data.code==="SUCCESS"){
            return res.data.data
        }
        return null;
    }).catch((err)=>{
        console.log("ERROR:" , err)
    })
}
export const getUsers =async()=>{
    return await axiosInstance.get(`/api/User`).then((res)=>{
        if (res.data.code==="SUCCESS"){
            return res.data.data.data
        }
        return null;
    }).catch((err)=>{
        console.log("FAILED: ",err)
    })
}
export const getCustomUser =async(userId:string)=>{
    return await axiosInstance.get(`/api/User/${userId}`).then((res)=>{
        if (res.data.code==="SUCCESS"){
            return res.data.data.data
        }
        return null
    }).catch((err)=>{
        console.log("FAILED:",err)
    })
}
export const createUser =async(lastName:string,firstName:string,middleName:string,roleId:string,phoneNumber:string,email:string, password:string, organizationID:string)=>{
    const body = {
        lastName:lastName,
        firstName:firstName,
        middleName:middleName,
        roleId:roleId,
        phoneNumber:phoneNumber,
        email:email,
        password:password,
        organizationId: organizationID
    }
    await axiosInstance.post("/api/User").then((res)=>{
        if (res.data.code==="SUCCESS"){
            return res.data.data.id
        }
        return null;
    })
}
export const putUser=async()=>{
    await axiosInstance.put("/api/User").then((res)=>{
        if (res.data.code==="SUCCESS"){
            console.log("PUT REQUEST:",res.data.code)
        }
    }).catch((err)=>{
        console.log("ERROR IN PUT REQUEST: ",err)
    })
}