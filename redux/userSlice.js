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

// import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// interface UserState {
//   info: object;
// }

// const initialState: UserState = {
//   info: {
//     name: '',
//     email: '',
//   },
// }

// const userSlice = createSlice({
//   name: 'user',
//   initialState,
//   reducers: {
//     login(state, action: PayloadAction<string>) {
//       state.info = action.payload;
//     }
//   }
// });

// export const { login } = userSlice.actions;
// export default userSlice.reducer;
