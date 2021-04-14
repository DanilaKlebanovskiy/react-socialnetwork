import axios from "axios";

const instance = axios.create({
    withCredentials : true,
    headers :  {"API-KEY":"b33a9a2b-fad2-4f61-bd6d-a4dc65fa2669"},
    baseURL : "https://social-network.samuraijs.com/api/1.0/"
})
export const usersApi = {
    getUsers (currentPage = 1,pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data)
    },
    getUsers2 (c , pageSize)  {
        return instance.get(`users?page=${c}&count=${pageSize}`).then(response => response.data)
    },
    deleteUnfollow(id){
        return instance.delete(`/follow/${id}`) .then(response =>  response.data)
    },
    postFollow(id){
        return instance.post(`/follow/${id}`) .then(response =>  response.data)
    }

}


export const headerApi = {
    getLogin() {
        return instance.get("auth/me").then(response => response.data)
    },
    getPictureLogin() {
        return instance.get("profile/8").then(response => response.data)
    }
}

export const profileApi = {
    getProfile(test) {
        return instance.get(`profile/${test}`).then(response => response.data)
    },
    getStatus(userId){
        return instance.get( `/profile/status/${userId}`)
    },
    updateStatus(status) {
        return instance.put(`/profile/status`, {status : status})
    }
}

export const loginApi = {
    postLogin(email,password,rememberMe=false) {
        console.log(email,password,rememberMe)
        return instance.post(`/auth/login`, {email : email,password : password,rememberMe:rememberMe})
    },
    deleteLogin() {
        return instance.delete(`/auth/login`).then(response => response.data)
    }
}
