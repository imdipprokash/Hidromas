import {StatusBar, StyleSheet, Text, View} from 'react-native';
import React from 'react';

type Props = {};

const LoginSrc = (props: Props) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <StatusBar
        translucent
        backgroundColor={'#f2f2f2'}
        barStyle={'dark-content'}
      />
      <Text>Home Screen</Text>
    </View>
  );
};

export default LoginSrc;

const styles = StyleSheet.create({});
