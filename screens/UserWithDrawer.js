import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import User from './User';
import Options from './Options'; 

// 2124802010151 - Lê Sỹ Hoài
const Drawer = createDrawerNavigator();

const UserWithDrawer = () => {
  return (
    <Drawer.Navigator initialRouteName="User">
      <Drawer.Screen name="User" component={User} />
      <Drawer.Screen name="Options" component={Options} />
    </Drawer.Navigator>
  );
};

export default UserWithDrawer;
