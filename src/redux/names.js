import { createSlice } from "@reduxjs/toolkit";

export const namesSlice = createSlice({
  name: 'names',
  initialState: {
    value: {
      firstName: 'Breaking',
      lastName: 'Bad'
    }
  },
  reducers: {
    changeNames: (state, action) => {
      state.value = action.payload;
    }
  }
});

export const { changeNames } = namesSlice.actions;
export default namesSlice.reducer;
