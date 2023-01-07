import {createSlice} from '@reduxjs/toolkit';
import {signUserIn} from './operations';

const initialState = {
  data: null,
  error: null,
  queueList: [],
  watchedList: [],
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  extraReducers: builder =>
    builder
      .addCase(signUserIn.fulfilled, (state, {payload}) => {
        const parsedUser = JSON.parse(payload);
        state.user = parsedUser;
        state.error = null;
      })
      .addCase(signUserIn.rejected, (state, {payload}) => {
        state.error = payload;
      }),
});

export const userReducer = userSlice.reducer;

export const selectUser = state => state.user.data;

export const selectQueueList = state => state.user.queueList;

export const selectWatchedList = state => state.user.watchedList;
