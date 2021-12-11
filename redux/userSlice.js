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
  }
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
    }
  }
});

export const { login, selectedLanguage } = userSlice.actions;
export default userSlice.reducer;
