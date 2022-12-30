import React, {useEffect} from 'react';
import {FlatList} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {selectList} from '../../redux/movieSlice';
import {fetchMovies} from '../../redux/operations';
import {EmptyList} from './EmptyList';
import {ListItem} from './ListItem';

export const MoviesList = () => {
  const dispatch = useDispatch();
  const list = useSelector(selectList);
  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);
  return (
    <FlatList
      data={list}
      renderItem={({item, index}) => (
        <ListItem item={item} index={index} length={list.length} />
      )}
      ListEmptyComponent={<EmptyList />}
      onEndReached={() => {
        dispatch(fetchMovies());
      }}
    />
  );
};
