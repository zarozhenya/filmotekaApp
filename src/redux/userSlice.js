import {createSlice, isAnyOf} from '@reduxjs/toolkit';
import {logUserOut, signUserIn, signUserUp} from './operations';

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
      .addCase(logUserOut.fulfilled, state => {
        state.data = null;
        state.error = null;
      })
      .addMatcher(
        isAnyOf(signUserIn.fulfilled, signUserUp.fulfilled),
        (state, {payload}) => {
          const parsedUser = JSON.parse(payload);
          state.data = parsedUser;
          state.error = null;
        },
      )
      .addMatcher(
        isAnyOf(signUserIn.rejected, signUserUp.rejected),
        (state, {payload}) => {
          state.error = payload;
        },
      ),
});

export const {setUserOnAuthStateChanged} = userSlice.actions;

export const userReducer = userSlice.reducer;

export const selectUser = state => state.user.data;

export const selectError = state => state.user.error;

export const selectQueueList = state => state.user.queueList;

export const selectWatchedList = state => state.user.watchedList;
