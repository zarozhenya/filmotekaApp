import {createAsyncThunk} from '@reduxjs/toolkit';
import auth from '@react-native-firebase/auth';
import Config from 'react-native-config';

export const fetchMovies = createAsyncThunk(
  'movie/fetchTrendingMovies',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const params = new URLSearchParams({
      api_key: Config.API_KEY,
      page: state.movie.page,
    });
    const url = state.movie.isTrending
      ? `${Config.API_URL}/trending/movie/day?${params}`
      : `${Config.API_URL}/search/movie?${params}&query=${state.movie.query}`;
    const data = await fetch(url).then(res => res.json());
    return data.results;
  },
);

export const signUserIn = createAsyncThunk(
  'user/signUserIn',
  async ({email, password}, thunkAPI) => {
    try {
      const {
        user: {uid},
      } = await auth().signInWithEmailAndPassword(email, password);
      return JSON.stringify({uid, email});
    } catch (e) {
      return thunkAPI.rejectWithValue(e.code);
    }
  },
);

export const logUserOut = createAsyncThunk(
  'user/logUserOut',
  async (_, thunkAPI) => {
    try {
      return await auth().signOut();
    } catch (e) {
      return thunkAPI.rejectWithValue(e.code);
    }
  },
);
