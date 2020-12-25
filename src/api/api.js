import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    headers: {
        "API-KEY": "646afb48-3d71-4c67-ad7d-cd96062fbe6f"
    }
});


export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 3) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)            .then(response => {
                return response.data
            });
    }
}

export const getUsers2 = (currentPage = 1, pageSize = 3) => {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`)
        .then(response => {
            return response.data
        });
}

