/* eslint-disable no-empty-pattern */
/* eslint-disable no-unused-vars */
import { createSlice } from "@reduxjs/toolkit";
import { logInStatusCheck, logInUser } from "./authOps";

const initialState = {
  isLoggedIn: false,
  isLoading: true,
  error: {},
  authData: {},
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(logInStatusCheck.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isLoggedIn = payload;
      })

      .addCase(logInStatusCheck.rejected, (state, { error }) => {
        state.isLoading = false;
        state.isLoggedIn = false;
        state.error = error;
      })

      .addCase(logInUser.pending, (state) => {
        state.isLoading = true;
      })

      .addCase(logInUser.fulfilled, (state, { payload }) => {
        console.log(payload)
        state.isLoading = false;
        state.isLoggedIn = payload.loggedIn
        state.authData = payload;

      })

      .addCase(logInUser.rejected, (state, { error }) => {
        state.isLoading = false;
        state.error = error;
      });
  },
});

export default authSlice.reducer;
export const {} = authSlice.actions;