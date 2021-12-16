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
  selectedActivity: 'hehe',
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
    },
    selectActivity(state, { payload }) {
      state.selectedActivity = payload
    }
  }
});

export const { login, selectedLanguage, activities, selectActivity } = userSlice.actions;
export default userSlice.reducer;
