import {StatusBar, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import HomeSrc from './src/Screen/UserSrc/HomeSrc';
import LoginSrc from './src/Screen/AuthSrc/LoginSrc';
import {useAuthStore} from './src/Store/useStore';
import CustomDrawer from './CustomDrawer';
import {ScreenHeight} from './src/utils/Constant';

type Props = {};
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const App = (props: Props) => {
  const {loggedIn, data} = useAuthStore();

  const MyDrawer = () => {
    return (
      <Drawer.Navigator
        drawerContent={props => <CustomDrawer {...props} />}
        screenOptions={{
          headerShown: false,
          drawerStyle: {
            backgroundColor: '#c6cbef',
            top: 0,
          },
        }}>
        <Drawer.Screen name="Settings" component={HomeSrc} />
        <Drawer.Screen name="Check-Ins" component={HomeSrc} />
        <Drawer.Screen name="My Expenses" component={HomeSrc} />
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
