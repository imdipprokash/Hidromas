import {StatusBar, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import 'react-native-gesture-handler';
import {createDrawerNavigator} from '@react-navigation/drawer';
import HomeSrc from './src/Screen/UserSrc/HomeSrc';

type Props = {};

const App = (props: Props) => {
  const Stack = createNativeStackNavigator();
  const Drawer = createDrawerNavigator();

  //   <Drawer.Navigator>
  //   <Drawer.Screen name="Feed" component={Feed} />
  //   <Drawer.Screen name="Article" component={Article} />
  // </Drawer.Navigator>

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={HomeSrc} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
