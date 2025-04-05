import {
  createAsyncThunk,
  createSlice,
} from "@reduxjs/toolkit";
import { loginUser } from "../../api/auth";

const TOKEN_KEY = "user";
// const storedUser = localStorage.getItem(TOKEN_KEY);

export const handleLogin = createAsyncThunk(
  "auth/login",
  async (values, { rejectWithValue }) => {
   try {
     return await loginUser(values);
   } catch (error) {
     return rejectWithValue(error.message);
   }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: {},
    isLoggedIn:false,
    error: null,
    loading: false
  },
  reducers:{
    logout:(state)=>{
      state.isLoggedIn = false;
      state.user ={}
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
