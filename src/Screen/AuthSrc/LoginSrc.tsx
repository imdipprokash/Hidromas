import {Image, StatusBar, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {Logo, PasswordIcon, SignBgImg, UserIcon} from '../../assets';
import {ScreenHeight, ScreenWidth} from '../../utils/Constant';
import InputBox from '../../Components/InputBox';
import CustomBtn from '../../Components/CustomBtn';
import {useAuthStore} from '../../Store/useStore';

type Props = {};

const LoginSrc = (props: Props) => {
  const [userInfo, setUserInfo] = useState({username: '', password: ''});

  const {loggedIn, login} = useAuthStore();

  // Call api

  const onSubmitHandler = async () => {
    const url = 'https://api.hidromas.nl/user-login';
    const apiKey = 'hidromas-we-app-01~c^Dt0Oc32';
    const email = userInfo.username;
    const password = userInfo.password;

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          apikey: apiKey,
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();

      if (data?.msg === 'Success') {
        login(data?.data);
      }
    } catch (error) {
      console.error('Error logging in:', error);
      // Handle error cases here
    }
  };

  return (
    <View style={{flex: 1}}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle={'dark-content'}
      />
      {/* Main Container */}
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'space-evenly',
          height: ScreenHeight * 0.4,
        }}>
        {/* Bg Image */}
        <Image
          source={SignBgImg}
          resizeMode={'cover'}
          style={{
            width: ScreenWidth,
            height: ScreenHeight * 0.4,
            position: 'absolute',
            top: 0,
            left: 0,
            zIndex: -10,
          }}
        />
        {/* Logo */}
        <Image
          source={Logo}
          resizeMode={'contain'}
          style={{width: ScreenWidth * 0.4, height: ScreenHeight * 0.04}}
        />
        <Text style={{fontWeight: '700', fontSize: 30, color: 'black'}}>
          Sign In
        </Text>
      </View>

      <View
        style={{
          height: ScreenHeight * 0.59,
          position: 'absolute',
          bottom: 0,
          backgroundColor: '#f2f2f2',
          width: ScreenWidth,
          borderTopRightRadius: 20,
          borderTopLeftRadius: 20,
          paddingHorizontal: ScreenWidth * 0.06,
          flex: 1,
          paddingVertical: ScreenHeight * 0.04,
          alignItems: 'center',
        }}>
        {/* Login Components */}
        <View style={{width: ScreenWidth * 0.85}}>
          <Text
            style={{
              textAlign: 'left',
              paddingVertical: 6,
              color: 'black',
              paddingHorizontal: 10,
            }}>
            Username
          </Text>
          <InputBox
            onChangeText={e => setUserInfo(prev => ({...prev, username: e}))}
            source={UserIcon}
          />

          <View style={{paddingVertical: 15}} />
          <Text
            style={{
              textAlign: 'left',
              paddingVertical: 4,
              color: 'black',
              paddingHorizontal: 10,
            }}>
            Password
          </Text>
          <InputBox
            onChangeText={e => setUserInfo(prev => ({...prev, password: e}))}
            source={PasswordIcon}
            type={'password'}
          />

          <Text
            style={{
              textAlign: 'right',
              paddingVertical: 6,
              color: 'black',
              paddingHorizontal: 10,
              fontWeight: '600',
            }}>
            Forgot Password?
          </Text>
          <View style={{paddingVertical: 15}} />
          <CustomBtn
            onPress={() => {
              onSubmitHandler();
            }}
            title="Sign In"
          />

          <Text
            style={{
              color: 'darkblue',
              textAlign: 'center',
              bottom: -ScreenHeight * 0.09,
            }}>
            version 0.1
          </Text>
        </View>
      </View>
    </View>
  );
};

export default LoginSrc;

const styles = StyleSheet.create({});
