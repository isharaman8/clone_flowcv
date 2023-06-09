import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userData: {},
};

export const auth = createSlice({
  name: "counter",
  initialState,
  reducers: {
    addUserData: (state, action) => {
      state.userData = action.payload;
    },
    removeUserData: (state) => {
      state.userData = {};
    },
  },
});

export const { addUserData, removeUserData } = auth.actions;
export default auth.reducer;
