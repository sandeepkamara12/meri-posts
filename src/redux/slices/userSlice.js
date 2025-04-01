import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { allUsers, currentUser, userById } from "../../api/user";

export const getUserById = createAsyncThunk('users/getUserById', async(userId, {getState, rejectWithValue })=>{
    // We are getting user for posts, and we can not load all the users togather so we are checking either the user
    // is exist in the redux store or not, if not then hit the api else it will show from redux store.
    const { users } = getState().users;
    if (users[userId]) {
        return users[userId];
    }  
    try {
        return await userById(userId);
    } catch (error) {
        return rejectWithValue(error);
    }
});

// In our case we do not need this api in blog listing because we are getting user info via user id in post loop
export const getAllUsers = createAsyncThunk('users/getAllUsers', async(_,{ rejectWithValue })=>{
    try {
        return await allUsers();
    } catch (error) {
        return rejectWithValue(error);
    }
})

export const getCurrentUser = createAsyncThunk("users/getCurrentUser", async(token, {rejectWithValue}) => {
    try {
        return await currentUser(token);
    } catch (error) {
        return rejectWithValue(error);
    }
})

const userSlice = createSlice({
    name:"users",
    initialState:{
        users: {},
        loading:false,
        error:null,
    },
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(getUserById.pending, state=>{
            state.loading = true;
            state.error = null;
        })
        .addCase(getUserById.fulfilled, (state, action)=>{
            state.loading = false;
            //Storing each user in redux with its id in an object, check redux state
            state.users[action.payload.id] =  action.payload;
        })
        .addCase(getUserById.rejected, (state, action)=>{
            state.loading = false;
            state.error = action.payload;
        });

        builder.addCase(getAllUsers.pending, state=>{
            state.loading = true;
            state.error = null;
        })
        .addCase(getAllUsers.fulfilled, (state, action)=>{
            state.loading = false;
            state.users =  action.payload; //Store all user
        })
        .addCase(getAllUsers.rejected, (state, action)=>{
            state.loading = false;
            state.error = action.payload;
        });

        builder.addCase(getCurrentUser.pending, state=>{
            state.loading = true;
            state.error = null;
        })
        .addCase(getCurrentUser.fulfilled, (state, action)=>{
            state.loading = false;
            state.users =  action.payload; //Store current user
        })
        .addCase(getCurrentUser.rejected, (state, action)=>{
            state.loading = false;
            state.error = action.payload;
        });
    }
})
// export const {reducer} = userSlice.actions;  
export default userSlice.reducer;