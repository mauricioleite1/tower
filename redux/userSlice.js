import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  info: {
    isLoggedIn: false,
    displayName: '',
    email: '',
    photoURL: '',
  },
  preferences: {
    language: 'en',
  },
  activities: [],
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login(state, { payload }) {
      state.info = payload;
    },
    selectedLanguage(state, { payload }) {
      state.preferences.language = payload;
    },
    activities(state, { payload }) {
      state.activities = payload;
    }
  }
});

export const { login, selectedLanguage, activities } = userSlice.actions;
export default userSlice.reducer;
