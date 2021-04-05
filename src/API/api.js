import axios from "axios";

const instance = axios.create({
    withCredentials : true,
    headers :  {"API-KEY":"b33a9a2b-fad2-4f61-bd6d-a4dc65fa2669"},
    baseURL : "https://social-network.samuraijs.com/api/1.0/"
})

export const getUsers = (currentPage,pageSize) => {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data)
    }

export const getUsers2 = (c , pageSize) => {
    return instance.get(`users?page=${c}&count=${pageSize}`).then(response => response.data)
}

export const  deleteUnfollow = (id) => {
    return instance.delete(`/follow/${id}`) .then(response =>  response.data)
}
export const  postFollow = (id) => {
    return instance.post(`/follow/${id}`) .then(response =>  response.data)
}