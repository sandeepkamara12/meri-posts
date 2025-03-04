import {
  createAsyncThunk,
  createSlice,
} from "@reduxjs/toolkit";
import axios from "axios";


const TOKEN_KEY = "user";
const storedUser = localStorage.getItem(TOKEN_KEY);

export const handleLogin = createAsyncThunk(
  "auth/login",
  async (values, { rejectWithValue }) => {
    try {
      const response = await axios.post(`https://dummyjson.com/auth/login`, {
        username: "emilys",
        password: "emilyspass",
        expiresInMins: 30
      });
      let user = {
        accessToken:response?.data?.accessToken,
        email:response?.data?.email,
        firstName:response?.data?.firstName,
        gender:response?.data?.gender,
        lastName:response?.data?.lastName,
        username:response?.data?.username,
        refreshToken:response?.data?.refreshToken,
        image:response?.data?.image,
        id:response?.data?.id,
      }
      localStorage.setItem(TOKEN_KEY, JSON.stringify(user));
      return user;
    } catch (error) {
      return rejectWithValue(error?.response?.data?.message || "Login failed");
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: JSON.parse(storedUser),
    isLoggedIn:!!storedUser,
    error: null,
    loading: false
  },
  reducers:{
    logout:(state)=>{
      console.log('you are logged out.')
      state.isLoggedIn = false;
      localStorage.removeItem(TOKEN_KEY);
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(handleLogin.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(handleLogin.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.isLoggedIn = true;
      })
      .addCase(handleLogin.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  }
});
export const { logout } = authSlice.actions;
export default authSlice.reducer;
