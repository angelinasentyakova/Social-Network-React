import axios from "axios"

const axiosInstance = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  withCredentials: true,
  headers: {
    'API-KEY': 'e9feafa3-b857-47d3-809b-f8e01e3b9bce',
}
})

export const usersAPI = {
  getUsers(currentPage, pageSize) {
    return axiosInstance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data)
  },
  getUserProfile(userId) {
    return axiosInstance.get(`profile/` + userId).then(response =>  response.data)
    
  },
  followUser(userId) {
    return axiosInstance.post(`follow/${userId}`).then(response => response.data)
  },
  unfollowUser(userId) {
    return axiosInstance.delete(`follow/${userId}`).then(response => response.data)
  }
}

export const profileAPI = {
  getStatus(userId) {
    return axiosInstance.get(`profile/status/` + userId).then(response => response.data)
  },
  updateStatus(status) {
    return axiosInstance.put(`profile/status/`, {status: status}).then(response => response.data)
  }
}

export const authAPI = {
  getMyProfile() {
    return axiosInstance.get(`auth/me`).then(response => response.data);
  },
  login(email, password, rememberMe) {
    return axiosInstance.post(`auth/login`, { email, password, rememberMe }).then(response => response.data);
  },
  logOut() {
    return axiosInstance.delete(`auth/login`).then(response => response.data)
  }
}



