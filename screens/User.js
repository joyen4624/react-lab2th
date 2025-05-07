import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, ActivityIndicator } from 'react-native';
import { fetchUserContact } from '../utils/api';
import ContactThumbnail from '../components/ContactThumbnail';
import colors from '../utils/colors';

// 2124802010151 - Lê Sỹ Hoài

const User = () => {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetchUserContact()
      .then(data => {
        setUser(data);
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, []);

  const { name = {}, picture = {}, phone = '' } = user;
  const fullName = `${name.first || ''} ${name.last || ''}`;
  const avatar = picture.large;

  return (
    <View style={styles.container}>
      {loading && <ActivityIndicator size="large" />}
      {error && <Text>Error loading user data.</Text>}
      {!loading && !error && (
        <ContactThumbnail avatar={avatar} name={fullName} phone={phone} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.blue,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default User;
