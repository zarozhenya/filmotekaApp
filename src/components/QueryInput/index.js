import React, {useState} from 'react';
import {TextInput} from 'react-native';
import {styles} from './styles';

export const QueryInput = () => {
  const [isFocused, setIsFocused] = useState(false);
  return (
    <TextInput
      placeholder="Enter the query"
      style={[styles.input, isFocused && styles.inputAccent]}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
    />
  );
};
