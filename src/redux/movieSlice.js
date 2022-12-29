import {createSlice} from '@reduxjs/toolkit';
import {fetchTrendingMovies} from './operations';

const initialState = {
  query: '',
  page: 1,
  list: [],
};

const movieSlice = createSlice({
  name: 'movie',
  initialState,
  extraReducers: builder =>
    builder.addCase(fetchTrendingMovies.fulfilled, (state, {payload}) => {
      state.list.push(...payload);
      state.page += 1;
    }),
});

export const movieReducer = movieSlice.reducer;

export const selectList = state => state.movie.list;
