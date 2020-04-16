import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isLoading: true,
    isUseLogin: false,
    userToken: null,
    isUserGuest: false
  },
  reducers: {
    signIn: {
      reducer(state, action) {
        const { token } = action.payload;
        state.userToken = token
        state.isLoading = false
        state.isUseLogin = true
      },
      prepare(token) {
        return { payload: { token } }
      }
    },
    skipAuth(state, action) {
      state.isUserGuest = true;
      state.isUseLogin = false;
      state.userToken = null;
    },
    signout(state, action) {
      state.isUseLogin=false
      state.userToken = null
      state.isUserGuest = false;
    },
    restore: {
      reducer(state, action) {
        const { token } = action.payload
        state.userToken = token;
      },
      prepare(token) {
        return { payload: { token } }
      }
    },

  }
})

export const { signIn, signout, restore, skipAuth } = authSlice.actions

export default authSlice.reducer
