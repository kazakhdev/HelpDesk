import { error } from "console";
import { axiosInstance } from "./authHeader"

export const createOrganization = async(id:string,name:string,bin:string,
    address:string,headFirstName: string, headLastName:string,headMiddleName:string, 
    phoneNumber:string,email:string,city:string,projectId:string,project:string[]) =>{
    const date =new Date();
    const body={
        id:id,
        createdDate:date,
        name:name,
        bin:bin,
        address:address,
        headFirstName: headFirstName,
        headLastName: headLastName,
        headMiddleName: headMiddleName,
        phoneNumber: phoneNumber,
        email: email,
        city: city,
        projectId: projectId,
        projects: project
    }
    await axiosInstance.put(`/api/Organization`, body).then((res)=>{
        console.log("res:" , res)
    }).catch((error)=>{
        console.log("Ошибка в методе createOrganization:",error)
    })

}