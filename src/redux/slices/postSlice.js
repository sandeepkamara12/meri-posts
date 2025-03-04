import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const getAllPosts = createAsyncThunk('posts/getAllPost', async(_,{ rejectWithValue })=>{
    try {
        let response = await axios.get('https://dummyjson.com/posts');
        return response?.data?.posts;
    } catch (error) {
        return rejectWithValue(error?.response?.data?.message || "Login failed");
    }
})

const postSlice = createSlice({
    name:"posts",
    initialState:{
        posts:[],
        loading:false,
        error:null
    },
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(getAllPosts.pending, state=>{
            state.loading = true;
            state.error = null;
        })
        .addCase(getAllPosts.fulfilled, (state, action)=>{
            state.loading = false;
            state.posts = action.payload;
        })
        .addCase(getAllPosts.rejected, (state, action)=>{
            state.loading = false;
            state.error = action.payload;
        });
    }
})
// export const {reducer} = postSlice.actions;
export default postSlice.reducer;