import axios from "axios";

const axiosInstance = axios.create(
{withCredentials: true,
    baseURL:'https://social-network.samuraijs.com/api/1.0/',
    headers:{"API-KEY":"2b581a81-54b7-49eb-a649-1f6bdf6715c4"}
}
)

export const getUsers = (currentPage:number, pageSize:number) => {

    return axiosInstance.get(`users?page=${currentPage}&count=${pageSize}`)
        .then(responce => responce.data)
}

export const getProfile = (profileNumber:number) =>{
    return axiosInstance.get(`profile/${profileNumber}`)
        .then(responce => responce.data)
}
export const getProfileStatus = (profileNumber:number) =>{
    return axiosInstance.get(`profile/status/${profileNumber}`)
        .then(responce => responce.data)
}
export const setProfileStatusOnServer = (status:string) =>{
    return axiosInstance.put(`profile/status`, {status:status})
        .then(responce => responce.data)
}

export  const unFollowChange = (id:number) =>{
    return axiosInstance.delete(`follow/${id}`)
        .then(responce => responce.data)
}
export  const followChange = (id:number) =>{
    return axiosInstance.post(`follow/${id}`)
        .then(responce => responce.data)
}

export const authMe = () =>{
    return axiosInstance.get(`auth/me`)
        .then(responce => responce.data)
}

export const setPhotoOnServer = (file:any) =>{
    const formData = new FormData()
    formData.append('image',file)
    return axiosInstance.put('profile/photo',formData,{
        headers:{'Content-Type': 'multipart/form-data'}
    })
}
