import axiosInstance from "../axiosInstance";

const baseUrl = process.env.REACT_APP_URL;
export const getPostComments = async (postId) => {
    try {
        let response = await axiosInstance.get(`${baseUrl}/comments/post/${postId}`);
        return response?.data?.comments;
    } catch (error) {
        throw new Error(error?.response?.data?.message || "Error while getting comments by post id.");
    }
}