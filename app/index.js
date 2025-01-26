import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LogInScreen from './screen.js/LogInScreen';
import HomeScreen from './screen.js/HomeScreen';
import AddScreen from './screen.js/AddScreen';
import AiScreen from './screen.js/AiScreen';
import ResponseScreen from './screen.js/ResponseScreen';
import SignupScreen from './screen.js/SignupScreen';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LogInScreen">
        {/* 登入頁 */}
        <Stack.Screen
          name="LogInScreen"
          component={LogInScreen}
          options={{ title: 'Login' }}
        />

        {/* 註冊頁 */}
        <Stack.Screen
          name="SignupScreen"
          component={SignupScreen}
          options={{ title: 'Signup' }}
        />
    
        {/* 首頁 */}
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{ title: 'Home' }}
        />
        
        {/* 新增頁 */}
        <Stack.Screen
          name="AddScreen"
          component={AddScreen}
          options={{ title: 'Add' }}
        />
        
        {/* AI 分析頁 */}
        <Stack.Screen
          name="AiScreen"
          component={AiScreen}
          options={{ title: 'AI' }}
        />
        
        {/* 回應頁 */}
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
