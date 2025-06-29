import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LoginScreen } from '../screnns';

const Stack = createNativeStackNavigator(); 

const AuthNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name= 'LoginScreen' component={LoginScreen} />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
