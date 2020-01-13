import axios from "axios";

const Instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {'API-KEY': '91505e0e-7e1c-42f5-a6af-7dab9d5c8659'}
});
export const UsersApi = {
    getUsers(currentPage = 1, pageUsersCount = 10) {
        return (
            Instance.get(`users?page=${currentPage}&count=${pageUsersCount}`)
                .then(response => {
                    return response.data
                })
        )
    }
};
export const FollowApi = {
    follow(uId) {
        return (
            Instance.post(`follow/${uId}`)
                .then(response => {
                    return response.data
                })

        )
    },
    unfollow(uId) {
        return (
            Instance.delete(`follow/${uId}`)
                .then(response => {
                    return response.data
                })
        )
    }
};
export const ProfileAPI = {
    profilepage(userId) {
        return (
            Instance.get(`profile/${userId}`)
                .then(response => {
                    return response.data
                })
        )
    },
    getProfileStatus(userId) {
        return (
            Instance.get(`profile/status/${userId}`)
                .then(response => {
                    return response.data
                })
        )
    },
    setProfileStatus(status) {
        return (
            Instance.put(`profile/status`, {status: status})
        )
    },
    setProfileInfo(profile){
        return(
            Instance.put(`profile`,profile)
        )
    },
    uploadPhoto(photo){
        let formData = new FormData();
        formData.append("image", photo);
        return(
            Instance.put(`profile/photo`,formData,{
                headers:{
                    'Content-Type':'multipart/form-data'
                }
            })
        )
    }
};
export const LoginApi = {
    login() {
        return (
            Instance.get(`auth/me`)
        )
    },
    loginUser(email, password, rememberMe) {
        return (
            Instance.post(`auth/login`, {email, password, rememberMe})

        )
    },
    loginOutUser() {
        return (
            Instance.delete(`auth/login`)

        )
    }
};