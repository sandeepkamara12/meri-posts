import { configureStore } from "@reduxjs/toolkit";
import authReducer from './slices/authSlice';
import postReducer from './slices/postSlice';
import userReducer from './slices/userSlice';
import commentReducer from './slices/commentSlice';

// import storage from "redux-persist/lib/storage"; // Defaults to localStorage
// import { persistReducer, persistStore } from "redux-persist";
// import { combineReducers } from "redux";
// import { FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE } from "redux-persist";

// 1️⃣ Create persist config
// const persistConfig = {
//     key: "root",
//     storage, // You can also use sessionStorage: `import sessionStorage from "redux-persist/lib/storage/session";`
// };

// const rootReducer = combineReducers({
//     auth:authReducer,
//     posts:postReducer,
//     users:userReducer
// });

// 3️⃣ Create a persisted reducer
// const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer:{
        auth:authReducer,
        posts:postReducer,
        users:userReducer,
        comments:commentReducer
    }
    // reducer: persistedReducer,
    // middleware: (getDefaultMiddleware) =>
    //     getDefaultMiddleware({
    //         serializableCheck: {
    //             ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    //         },
    //     }),
})

// export const persistor = persistStore(store);
export default store;