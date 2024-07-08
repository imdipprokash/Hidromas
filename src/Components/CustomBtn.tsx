import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {ScreenHeight} from '../utils/Constant';

type Props = {
  title?: string;
};

const CustomBtn = ({title}: Props) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={{
        backgroundColor: 'darkblue',
        borderRadius: 16,
        height: ScreenHeight * 0.07,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Text
        style={{
          color: 'white',
          textAlign: 'center',
          fontSize: 25,
          fontWeight: '700',
        }}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomBtn;

const styles = StyleSheet.create({});
