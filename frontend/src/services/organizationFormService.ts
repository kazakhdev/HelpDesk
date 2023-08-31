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