import axios from "axios";
const TOKEN_KEY = "user";
const baseUrl = process.env.REACT_APP_URL;

export const loginUser = async (values) => {
    try {
        //we will use values parameter later when we would have our own api and username and password will be our own.
        const response = await axios.post(`${baseUrl}auth/login`, {
            username: "emilys",
            password: "emilyspass",
            expiresInMins: 30
        });
        let user = {
            accessToken: response?.data?.accessToken,
            email: response?.data?.email,
            firstName: response?.data?.firstName,
            gender: response?.data?.gender,
            lastName: response?.data?.lastName,
            username: response?.data?.username,
            refreshToken: response?.data?.refreshToken,
            image: response?.data?.image,
            id: response?.data?.id,
        }
        localStorage.setItem(TOKEN_KEY, JSON.stringify(user));
        return user;
    } catch (error) {
        throw new Error(error?.response?.data?.message || "Login failed");
    }
}