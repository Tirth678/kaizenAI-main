import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: {
        userData: null,
    },
    reducers: {
        setUserData: (state, action) => {
            state.userData = action.payload // just like normal stat management in react
        }
    }
})

export const {setUserData} = userSlice.actions;
export default userSlice.reducer