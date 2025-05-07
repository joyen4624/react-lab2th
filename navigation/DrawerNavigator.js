// navigation/DrawerNavigator.js
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import User from '../screens/User';
import Options from '../screens/Options';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => (
  <Drawer.Navigator initialRouteName="Me">
    <Drawer.Screen name="Me" component={User} />
    <Drawer.Screen name="Options" component={Options} />
  </Drawer.Navigator>
);

export default DrawerNavigator;
