import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  username: window?.localStorage.getItem("username"),
  token: window?.localStorage.getItem("token"),
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      state.username = action.payload;
      localStorage.setItem("username", JSON.stringify(action.payload.username));
      localStorage.setItem("token", JSON.stringify(action.payload.token));
    },

    logout: (state) => {
      state.username = null;
      localStorage?.clear();
    },
  },
});

export default userSlice.reducer;
export const { login, logout } = userSlice.actions;
