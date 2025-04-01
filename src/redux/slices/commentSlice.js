import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getPostComments } from "../../api/comment";

export const getCommentByPostId = createAsyncThunk('comments/getCommentByPostId', async(postId, {rejectWithValue })=>{  
    try {
        return await getPostComments(postId);
    } catch (error) {
        return rejectWithValue(error?.response);
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