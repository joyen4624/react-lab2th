import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import colors from '../utils/colors';

const ContactThumbnail = ({ avatar, name, phone }) => (
  <View style={styles.container}>
    <Image source={{ uri: avatar }} style={styles.avatar} />
    <Text style={styles.name}>{name}</Text>
    <Text style={styles.phone}>{phone}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.white,
  },
  phone: {
    fontSize: 14,
    color: colors.white,
    marginTop: 4,
  },
});

export default ContactThumbnail;
