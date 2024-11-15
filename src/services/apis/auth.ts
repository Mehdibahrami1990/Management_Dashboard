import getAxiosInstance from "./baseURLapi"

 export const sendLoginVerify =(username:string, password:string) =>{
    getAxiosInstance.post("login", {
        username,
        password,
    })
 }
 