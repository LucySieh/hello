import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import LoginScreen from './screen.js/LoginScreen';
import HomeScreen from './screen.js/HomeScreen';
import AddScreen from './screen.js/AddScreen';
import AiScreen from './screen.js/AiScreen';

const Stack = createStackNavigator();

const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LoginScreen">
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="AddScreen" component={AddScreen}  />
        <Stack.Screen name="AiScreen" component={AiScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
