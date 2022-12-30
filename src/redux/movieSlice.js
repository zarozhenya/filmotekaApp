import {createSlice} from '@reduxjs/toolkit';
import {fetchMovies} from './operations';

const initialState = {
  query: '',
  page: 1,
  list: [],
  isTrending: true,
};

const movieSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {
    updateQuery: (state, {payload}) => {
      state.query = payload;
      state.page = 1;
      state.list = [];
      state.isTrending = payload ? false : true;
    },
  },
  extraReducers: builder =>
    builder.addCase(fetchMovies.fulfilled, (state, {payload}) => {
      state.list.push(...payload);
      state.page += 1;
    }),
});

export const {updateQuery} = movieSlice.actions;

export const movieReducer = movieSlice.reducer;

export const selectList = state => state.movie.list;
