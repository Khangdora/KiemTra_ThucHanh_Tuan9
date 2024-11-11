import { createSlice } from '@reduxjs/toolkit';

const bikesSlice = createSlice({
  name: 'bikes',
  initialState: {
    bikes: [],
  },
  reducers: {
    setBikes: (state, action) => {
      state.bikes = action.payload;
    },
  },
});

export const { setBikes } = bikesSlice.actions;
export default bikesSlice.reducer;