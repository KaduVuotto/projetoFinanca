import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { View, Text, StatusBar } from 'react-native';
import AuthProvider from './src/contexts/auth'

import Routes from './src/routes';

export default function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <StatusBar backgroundColor='#049be3' barStyle='light-content' />
        <Routes />
      </AuthProvider>
    </NavigationContainer>
  );
}

