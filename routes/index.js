import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Contacts from '../screens/Contacts';
import Profile from '../screens/Profile';
import Favorites from '../screens/Favorites';
import colors from '../utils/colors';
import User from '../screens/User';

// 2124802010151 - Lê Sỹ Hoài

const Stack = createNativeStackNavigator();
const Tab = createMaterialBottomTabNavigator();

const TabNavigator = () => (
  <Tab.Navigator
    initialRouteName="Contacts"
    activeColor="white"
    shifting={true}
    barStyle={{ backgroundColor: colors.blue }}
  >
    <Tab.Screen
      name="Contacts"
      component={Contacts}
      options={{
        tabBarLabel: 'Contacts',
        tabBarIcon: ({ color }) => (
          <Icon name="list" color={color} size={24} />
        ),
      }}
    />
    <Tab.Screen
      name="Favorites"
      component={Favorites}
      options={{
        tabBarLabel: 'Favorites',
        tabBarIcon: ({ color }) => (
          <Icon name="star" color={color} size={24} />
        ),
      }}
    />

<Tab.Screen
      name="User"
      component={User}
      options={{
        tabBarLabel: 'User',
        tabBarIcon: ({ color }) => (
          <Icon name="star" color={color} size={24} />
        ),
      }}
    />
    
  </Tab.Navigator>
);

const Routes = () => (
  <NavigationContainer>
    <Stack.Navigator
      screenOptions={{
        headerTintColor: 'white',
        headerStyle: { backgroundColor: colors.tomato },
        headerTitleAlign: 'center',
      }}
    >
      <Stack.Screen
        name="HomeTabs"
        component={TabNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default Routes;
