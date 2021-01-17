import * as axios from "axios";
import {unfollow} from "../redux/usersReducer";

const instance = axios.create({
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    headers: {
        "API-KEY": "646afb48-3d71-4c67-ad7d-cd96062fbe6f"
    }
});


export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 3) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data;
            });
    },
    follow(userId) {
        return instance.post(`/follow/${userId}`)
    },
    unfollow(userId) {
        return instance.delete(`/follow/${userId}`)
    },
    getProfile(userId) {
        return profileAPI.getProfile(userId);
    }
}

export const profileAPI = {
        getProfile(userId) {
            return instance.get(`profile/` + userId);
        },
        getStatus(userId) {
            return instance.get(`profile/status/` + userId);
        },
        updateStatus(status) {
            return instance.put(`profile/status/`, {status:status});
        }
    }

    export
const authAPI = {
    me() {
        return instance.get(`auth/me`)
    }
}
/*export const getUsers2 = (currentPage = 1, pageSize = 3) => {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data
            });
    },*/


