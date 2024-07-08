import {
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {Logo, MenuIcon, UserIcon} from '../assets';
import {ScreenWidth, ScreenHeight} from '../utils/Constant';
import {
  DrawerActions,
  ParamListBase,
  useNavigation,
} from '@react-navigation/native';
import {DrawerNavigationProp} from '@react-navigation/drawer';

const Header = () => {
  const navigation = useNavigation<DrawerNavigationProp<ParamListBase>>();
  return (
    <View
      style={{
        width: ScreenWidth,
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'center',
      }}>
      <StatusBar backgroundColor={'#f2f2f2'} barStyle={'dark-content'} />
      <TouchableOpacity
        onPress={() => {
          navigation.dispatch(DrawerActions.toggleDrawer());
        }}
        style={{position: 'absolute', left: ScreenWidth * 0.06}}>
        <Image source={MenuIcon} style={{width: 30, height: 30}} />
      </TouchableOpacity>
      <Image
        source={Logo}
        resizeMode={'contain'}
        style={{width: ScreenWidth * 0.4, height: ScreenHeight * 0.04}}
      />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({});
