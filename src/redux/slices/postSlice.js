import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const getAllPosts = createAsyncThunk('posts/getAllPost', async(page,{ rejectWithValue })=>{
    try {
        let response = await axios.get(`https://dummyjson.com/posts?delay=5000&limit=10&skip=${page*10}`);
        return response?.data?.posts;
    } catch (error) {
        return rejectWithValue(error?.response?.data?.message || "Error while getting all the posts.");
    }
})

const postSlice = createSlice({
    name:"posts",
    initialState:{
        posts:[],
        loading:false,
        error:null,
        page: 0,
        hasMore: true
    },
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(getAllPosts.pending, state=>{
            state.loading = true;
            state.error = null;
        })
        .addCase(getAllPosts.fulfilled, (state, action)=>{
            state.loading = false;
            console.log(action.payload, 'payload is', state.posts.length);
            // state.posts = state.posts.length === 0 ? [...action.payload] : [...state.posts, ...action.payload]
            state.posts =  [...state.posts, ...action.payload];
            state.page += 1;
            state.hasMore = action.payload.length > 0;
        })
        .addCase(getAllPosts.rejected, (state, action)=>{
            state.loading = false;
            state.error = action.payload;
        });
    }
})
// export const {reducer} = postSlice.actions;  
export default postSlice.reducer;