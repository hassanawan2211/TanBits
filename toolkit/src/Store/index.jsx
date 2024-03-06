import { configureStore } from "@reduxjs/toolkit";
import  userSlice  from "./Slices/Userslice";

const store = configureStore({
    reducer: {
        users: userSlice,
    },
});

export default store;