import React from 'react';

import { View, StyleSheet, StatusBar } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import Login from './components/Login';

const SignIn = () => {
  
  return (
    <SafeAreaProvider> 
    <View style={{ flex: 1 }} >
      <StatusBar style="light"/>
      <Login/>
    </View>
    </SafeAreaProvider>
  );
};



export default SignIn;
