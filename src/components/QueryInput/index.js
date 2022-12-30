import React, {useState} from 'react';
import {TextInput} from 'react-native';
import {useDispatch} from 'react-redux';
import {useDebouncedCallback} from 'use-debounce';
import {updateQuery} from '../../redux/movieSlice';
import {fetchMovies} from '../../redux/operations';
import {styles} from './styles';

export const QueryInput = () => {
  const dispatch = useDispatch();
  const [isFocused, setIsFocused] = useState(false);
  const handleTextChange = useDebouncedCallback(value => {
    dispatch(updateQuery(value));
    dispatch(fetchMovies());
  }, 300);
  return (
    <TextInput
      placeholder="Enter the query"
      style={[styles.input, isFocused && styles.inputAccent]}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      onChangeText={text => handleTextChange(text)}
    />
  );
};
