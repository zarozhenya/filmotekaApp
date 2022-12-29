import {createAsyncThunk} from '@reduxjs/toolkit';
import Config from 'react-native-config';

export const fetchTrendingMovies = createAsyncThunk(
  'movie/fetchTrendingMovies',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const params = new URLSearchParams({
      api_key: Config.API_KEY,
      page: state.movie.page,
    });
    const url = `${Config.API_URL}/trending/movie/day?${params}`;
    console.log(url);
    const data = await fetch(url).then(res => res.json());
    return data.results;
  },
);
