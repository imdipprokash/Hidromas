import {StatusBar, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import HomeSrc from './src/Screen/UserSrc/HomeSrc';
import LoginSrc from './src/Screen/AuthSrc/LoginSrc';
import {useAuthStore} from './src/Store/useStore';

type Props = {};
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const App = (props: Props) => {
  const {loggedIn, data} = useAuthStore();

  const MyDrawer = () => {
    return (
      <Drawer.Navigator screenOptions={{headerShown: false}}>
        <Drawer.Screen name="Home" component={HomeSrc} />
      </Drawer.Navigator>
    );
  };

  return (
    <NavigationContainer>
      {loggedIn ? (
        <MyDrawer />
      ) : (
        <Stack.Navigator
          initialRouteName="LoginSrc"
          screenOptions={{headerShown: false}}>
          <Stack.Screen name="LoginSrc" component={LoginSrc} />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
