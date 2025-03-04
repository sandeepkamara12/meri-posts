import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getUserById = createAsyncThunk('users/getUserById', async(userId, {getState, rejectWithValue })=>{
    // We are getting user for posts, and we can not load all the users togather so we are checking either the user
    // is exist in the redux store or not, if not then hit the api else it will show from redux store.
    const { users } = getState().users;
    if (users[userId]) {
        return users[userId];
    }  
    try {
        let response = await axios.get(`https://dummyjson.com/users/${userId}`);
        return response?.data;
    } catch (error) {
        return rejectWithValue(error?.response?.data?.message || "Error while getting user by id.");
    }
});

// In our case we do not need this api in blog listing because we are getting user info via user id in post loop
export const getAllUsers = createAsyncThunk('users/getAllUsers', async(_,{ rejectWithValue })=>{
    try {
        let response = await axios.get(`https://dummyjson.com/users/`);
        const usersArray = response.data.users;
        // Below convert a userArray into userObject to get single and all the users faster as compare to array
        const usersObject = usersArray.reduce((acc, user)=>{
            acc[user?.id] = user;
            return acc;
        }, {});
        return usersObject; 
    } catch (error) {
        return rejectWithValue(error?.response?.data?.message || "Error while getting user by id.");
    }
})

export const getCurrentUser = createAsyncThunk("users/getCurrentUser", async(token, {rejectWithValue}) => {
    try {
        let response = await axios.get('https://dummyjson.com/auth/me', {
            headers:{
                Authorization:`Bearer ${token}`
            },
        }
    )
    console.log(response, "current user");
    return response.data; 
    } catch (error) {
        return rejectWithValue(error?.response?.data?.message || "Error while getting user by id.");
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