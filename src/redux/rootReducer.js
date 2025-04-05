import { combineReducers } from "@reduxjs/toolkit";
import authReducer from './slices/authSlice';
import postReducer from './slices/postSlice';
import userReducer from './slices/userSlice';
import commentReducer from './slices/commentSlice';
import sessionStorage from "redux-persist/es/storage/session";
import persistReducer from "redux-persist/es/persistReducer";

const authConfig = {
    key: 'auth',
    storage: sessionStorage,
    whitelist: ['user', 'isLoggedIn']
}

const rootReducer = combineReducers({
    auth: persistReducer(authConfig,authReducer),
    posts: postReducer,
    users: userReducer,
    comments: commentReducer
});

export default rootReducer;