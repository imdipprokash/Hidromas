import {StatusBar, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import HomeSrc from './src/Screen/UserSrc/HomeSrc';
import LoginSrc from './src/Screen/AuthSrc/LoginSrc';

type Props = {};
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const App = (props: Props) => {
  const MyDrawer = () => {
    return (
      <Drawer.Navigator screenOptions={{headerShown: false}}>
        <Drawer.Screen name="Home" component={HomeSrc} />
      </Drawer.Navigator>
    );
  };

  const isLogIn = true;

  return (
    <NavigationContainer>
      {isLogIn ? (
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
