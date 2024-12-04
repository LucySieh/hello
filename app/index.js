import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// 導入各頁面
import LogInScreen from './LogInScreen';
import HomeScreen from './HomeScreen';
import AddScreen from './AddScreen';
import AiScreen from './AiScreen';
import ResponseScreen from './ResponseScreen';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LogInScreen">
        <Stack.Screen
          name="LogInScreen"
          component={LogInScreen}
          options={{ title: 'Login' }}
        />
    
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{ title: 'Home' }}
        />
        
        <Stack.Screen
          name="AddScreen"
          component={AddScreen}
          options={{ title: 'Add' }}
        />
        
        <Stack.Screen
          name="AiScreen"
          component={AiScreen}
          options={{ title: 'AI' }}
        />
        
        <Stack.Screen
          name="ResponseScreen"
          component={ResponseScreen}
          options={{ title: 'Response' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
