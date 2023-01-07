import {createSlice} from '@reduxjs/toolkit';
import {logUserOut, signUserIn} from './operations';

const initialState = {
  data: null,
  error: null,
  queueList: [],
  watchedList: [],
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserOnAuthStateChanged: (state, {payload}) => {
      const parsedPayload = JSON.parse(payload);
      state.data = parsedPayload;
      state.error = null;
    },
  },
  extraReducers: builder =>
    builder
      .addCase(signUserIn.fulfilled, (state, {payload}) => {
        const parsedUser = JSON.parse(payload);
        state.data = parsedUser;
        state.error = null;
      })
      .addCase(signUserIn.rejected, (state, {payload}) => {
        state.error = payload;
      })
      .addCase(logUserOut.fulfilled, state => {
        state.data = null;
        state.error = null;
      }),
});

export const {setUserOnAuthStateChanged} = userSlice.actions;

export const userReducer = userSlice.reducer;

export const selectUser = state => state.user.data;

export const selectQueueList = state => state.user.queueList;

export const selectWatchedList = state => state.user.watchedList;
