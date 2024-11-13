import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigation from './src/navigation/StackNavigation';
import {Linking} from 'react-native';

const linking = {
  prefixes: ['deeplinking://', 'https://deeplinkingemail.firebaseapp.com'],
  config: {
    screens: {
      Login: 'login',
      Forgot: 'forgot',
      Home: 'home',
      Profile: 'profile',
    },
  },
};

type Props = {};

const App = (props: Props) => {
  return (
    <NavigationContainer linking={linking}>
      <StackNavigation />
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
