import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  manifest: null,
}

const bungieDataSlice = createSlice({
  name: 'bungieData',
  initialState,
  reducers: {
    manifest(state, { payload }) {
      state.manifest = payload;
    },
  }
});

export const { manifest } = bungieDataSlice.actions;
export default bungieDataSlice.reducer;
