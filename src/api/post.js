import axios from "axios";
import axiosInstance from "../axiosInstance";

const baseURL = process.env.REACT_APP_URL;
export const getAllPostsData = async (param) => {
    try {
        let response = await axios.get(
            `${baseURL}/posts?delay=1000&limit=10&skip=${param?.page * 10}`
        );
        return response?.data;
    } catch (error) {
        throw new Error(error?.response?.data?.message || "Error while getting all the posts.");
    }
}

export const getPostDetails = async (postId) => {
    try {
        let response = await axiosInstance.get(`${baseURL}/posts/${postId}`);
        return response?.data;
    } catch (error) {
        throw new Error(
            error?.response?.data?.message || "Error while getting all the posts."
        );
    }
}
export const postByTagName = async (tag, page) => {
    try {
        let response = await axiosInstance.get(`${baseURL}/posts/tag/${tag}/?delay=1000&limit=10&skip=${page * 10}`);
        return response?.data;
    } catch (error) {
        throw new Error(
            error?.response?.data?.message || "Error while getting posts via tag name."
        );
    }
}

export const postByUserId = async (userId) => {
    try {
        let response = await axiosInstance.get(`${baseURL}/users/${userId}/posts`);
        return response?.data?.posts;
    } catch (error) {
        throw new Error(
            error?.response?.data?.message || "Error while getting posts by user id."
        );
    }
}

export const relatedPost = async () => {
    try {

    } catch (error) {
        throw new Error("Error while fetching related posts.");
    }
}

export const searchedPost = async (text) => {
    try {
        let response = await axiosInstance.get(`${baseURL}/posts/search?q=${text}`);
        return response?.data?.posts
    } catch (error) {
        throw new Error(
            error?.response?.data?.message || "Error while searching posts."
        );
    }
}