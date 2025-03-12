import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getCommentByPostId = createAsyncThunk('comments/getCommentByPostId', async(postId, {rejectWithValue })=>{  
    try {
        let response = await axios.get(`https://dummyjson.com/comments/post/${postId}`);
        return response?.data?.comments;
    } catch (error) {
        return rejectWithValue(error?.response?.data?.message || "Error while getting comments by post id.");
    }
});

const commentSlice = createSlice({
    name:"comments",
    initialState:{
        comments: [],
        loading:false,
        error:null,
    },
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(getCommentByPostId.pending, state=>{
            state.loading = true;
            state.error = null;
        })
        .addCase(getCommentByPostId.fulfilled, (state, action)=>{
            state.loading = false;
            state.comments =  action.payload;
        })
        .addCase(getCommentByPostId.rejected, (state, action)=>{
            state.loading = false;
            state.error = action.payload;
        });
    }
})
export default commentSlice.reducer;