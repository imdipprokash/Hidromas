import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {EyeCloseIcon, EyeOpenIcon, UserIcon} from '../assets';
import {ScreenHeight} from '../utils/Constant';

type Props = {
  type?: 'password';
  source?: ImageSourcePropType | undefined;
  onChangeText: (e: string) => void;
};

const InputBox = ({type, source, onChangeText}: Props) => {
  const [show, setShow] = useState(type === 'password' ? true : false);
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 0.6,
        borderRadius: 10,
        paddingHorizontal: 10,
        height: ScreenHeight * 0.06,
      }}>
      <Image
        source={source || UserIcon}
        style={{width: 20, height: 20}}
        resizeMode="cover"
      />
      <TextInput
        onChangeText={onChangeText}
        style={{flex: 1, color: 'black', fontSize: 16, fontWeight: '500'}}
        secureTextEntry={show}
      />

      {type === 'password' && (
        <TouchableOpacity onPress={() => setShow(!show)}>
          <Image
            source={show ? EyeCloseIcon : EyeOpenIcon}
            style={{width: 20, height: 20}}
            resizeMode="cover"
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default InputBox;

const styles = StyleSheet.create({});
