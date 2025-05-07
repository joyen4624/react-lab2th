// Contacts.js
import React, { useEffect } from 'react';
import { View, FlatList, ActivityIndicator, Text, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchContactsLoading,
  fetchContactsSuccess,
  fetchContactsError,
} from '../store';
import { fetchContacts } from '../utils/api';
import ContactListItem from '../components/ContactListItem';

// 2124802010151 - Lê Sỹ Hoài

const keyExtractor = ({ phone }) => phone;

const Contacts = ({ navigation }) => {
  const dispatch = useDispatch();
  const { contacts, loading, error } = useSelector(state => state.contacts); // ✅ lấy từ state.contacts

  useEffect(() => {
    dispatch(fetchContactsLoading());
    fetchContacts()
      .then(data => dispatch(fetchContactsSuccess(data)))
      .catch(() => dispatch(fetchContactsError()));
  }, []);

  const renderItem = ({ item }) => {
    const { name, picture, phone } = item;
    const displayName = `${name.first} ${name.last}`;
    const avatar = picture.medium;

    return (
      <ContactListItem
        name={displayName}
        avatar={avatar}
        phone={phone}
        onPress={() => navigation.navigate('Profile', { contact: item })}
      />
    );
  };

  return (
    <View style={styles.container}>
      {loading && <ActivityIndicator size="large" />}
      {error && <Text>Error loading contacts.</Text>}
      {!loading && !error && (
        <FlatList
          data={contacts}
          keyExtractor={keyExtractor}
          renderItem={renderItem}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Contacts;
