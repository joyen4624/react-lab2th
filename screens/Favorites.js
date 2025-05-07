import React, { useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, ActivityIndicator } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { fetchContacts } from '../utils/api';
import {
  fetchContactsLoading,
  fetchContactsSuccess,
  fetchContactsError,
} from '../store';
import ContactThumbnail from '../components/ContactThumbnail';

// 2124802010151 - Lê Sỹ Hoài

const keyExtractor = ({ phone }) => phone;

const Favorites = ({ navigation }) => {
  const dispatch = useDispatch();
  const { contacts, loading, error } = useSelector(state => state.contacts); // ✅ đúng path

  useEffect(() => {
    if (contacts.length === 0) {
      dispatch(fetchContactsLoading());
      fetchContacts()
        .then(data => dispatch(fetchContactsSuccess(data)))
        .catch(() => dispatch(fetchContactsError()));
    }
  }, []);

  const favorites = contacts.filter(c => c.name.first[0].toLowerCase() === 'a'); // ví dụ lọc chữ A

  const renderItem = ({ item }) => {
    const { picture, name, phone } = item;
    return (
      <ContactThumbnail
        avatar={picture.medium}
        name={`${name.first} ${name.last}`}
        phone={phone}
        onPress={() => navigation.navigate('Profile', { contact: item })}
      />
    );
  };

  return (
    <View style={styles.container}>
      {loading && <ActivityIndicator size="large" />}
      {error && <Text style={styles.error}>Error loading contacts.</Text>}
      {!loading && !error && (
        <FlatList
          data={favorites}
          keyExtractor={keyExtractor}
          numColumns={3}
          contentContainerStyle={styles.list}
          renderItem={renderItem}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    justifyContent: 'center',
    flex: 1,
  },
  list: {
    alignItems: 'center',
  },
  error: {
    color: 'red',
    textAlign: 'center',
  },
});

export default Favorites;
