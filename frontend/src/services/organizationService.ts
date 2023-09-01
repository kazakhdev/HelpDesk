import { error } from "console"
import { axiosInstance } from "./authHeader"

export const postOrganization =async()=>{
    try{
        return await axiosInstance.post(`/api/Organization`).then((res)=>{
            if (res.status===200){
                console.log("Created:",res)
                return res.data.data.id
            }
        })
    }
    catch(error){
        console.log("FAILDE: ",error)
    }
}
export const putOrganization =async(name:string,bin:string,address: string, headFirstName: string, headLastName: string, headMiddleName: string, phoneNumber: string, email: string, city: string,projectId:string,projects:string) =>{
    const date =new Date();
    const id="";
    const body={
        id:projectId,
        createdDate:date,
        name:name,
        bin:bin,
        address:address,
        headFirstName:headFirstName,
        headLastName:headLastName,
        headMiddleName:headMiddleName,
        phoneNumber:phoneNumber,
        email:email,
        city:city,
        projectId:id,
        projects:projects}
        console.log("project:", projectId)
    try{
        console.log("BODY:",body)
        await axiosInstance.put(`/api/Organization`,body).then((res)=>{
        if (res){
            console.log("post success:",res)
        }
    })
    }
    catch(error){
        console.log("FAILED in put request:",error)
    }
}

export const getCurrentOrganization=async(organizationID:string)=>{

    return   await axiosInstance.get(`/api/Organization/${organizationID}`).then((res)=>{
        if (res.data.code==="SUCCESS"){
           return res.data.data.data
        }
        return null
    }).catch((err)=>{
        console.log("error:",err)
    })
}

//Надо решить проблему
export const deleteOrganization =async(organizationId:string)=>{
    const body = {id:organizationId};
    await axiosInstance.delete(`/api/Organization`).then((res)=>{

    })
}
export const getAllOrganizations =async()=>{
    return await axiosInstance.get(`/api/Organization`).then((res)=>{
        if (res.data.code==="SUCCESS"){
            return res.data.data.data;
        }
        return null
    }).catch((err)=>{
        console.log("Error: ",err)
    })
}