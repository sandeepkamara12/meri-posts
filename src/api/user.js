import axiosInstance from "../axiosInstance";
const baseURL = process.env.REACT_APP_URL;
export const userById = async (userId) => {
    try {
        let response = await axiosInstance.get(`${baseURL}/users/${userId}`);
        return response?.data;
    } catch (error) {
        throw new Error(error?.response?.data?.message || "Error while getting user by id.");
    }
}

export const allUsers = async () => {
    try {
        let response = await axiosInstance.get(`${baseURL}/users/`);
        const usersArray = response.data.users;
        // Below convert a userArray into userObject to get single and all the users faster as compare to array
        const usersObject = usersArray.reduce((acc, user) => {
            acc[user?.id] = user;
            return acc;
        }, {});
        return usersObject;
    } catch (error) {
        throw new Error(error?.response?.data?.message || "Error while getting users.");
    }
}

export const currentUser = async (token) => {
    try {
        let response = await axiosInstance.get(`${baseURL}/auth/me`, {
            headers: {
                Authorization: `Bearer ${token}`
            },
        }
        )
        return response.data;
    } catch (error) {
        throw new Error(error?.response?.data?.message || "Error while getting user by id.");
    }
}
export const getAllPosts =  async(token, userId) => {
    try {
        let response = await axiosInstance.get(`${baseURL}/users/${userId}/posts?limit=2`, {
            headers:{
                Authorization:`Bearer :${token}`
            }
        });
        return response?.data;
    } catch (error) {
        throw new Error(error?.response?.data?.message || "Error while getting all the posts by user id.");
    }
}