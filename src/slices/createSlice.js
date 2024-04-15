// SLICE FOR MANAGING GLOBAL STATE OF CONDITIONAL COMPONENT CREATE A TASK WHICH IS DISPLAYED USING POPUP

import { createSlice, nanoid } from "@reduxjs/toolkit";

//intial state
const initialState = {
  isCreate: false,
};

// slice is created where reducers are also created .
export const isCreateSlice = createSlice({
  name: "isCreate",
  initialState,
  reducers: {
    updateIsCreate: (state, action) => {
      state.isCreate = !state.isCreate;
    },
  },
});

export const { updateIsCreate } = isCreateSlice.actions;

export default isCreateSlice.reducer;
