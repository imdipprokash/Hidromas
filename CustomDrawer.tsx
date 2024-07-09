import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
  StyleSheet,
  Switch,
  StatusBar,
} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import {SignBgImg} from './src/assets';
import {ScreenHeight} from './src/utils/Constant';
import {useAuthStore} from './src/Store/useStore';

const CustomDrawer = (props: any) => {
  const {data, logout} = useAuthStore();
  console.log(data);
  return (
    <View style={{flex: 1, backgroundColor: '#f2f2f2'}}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{
          zIndex: 10,
        }}>
        <ImageBackground
          source={SignBgImg}
          style={{
            padding: 20,
            marginTop: -10,
            height: ScreenHeight * 0.18,
            borderBottomLeftRadius: 0,
            borderBottomRightRadius: 20,
          }}>
          <View
            style={{
              flexDirection: 'row',
              gap: 10,
              marginTop: 20,
              alignItems: 'center',
            }}>
            <Image
              source={{uri: data?.profile_image}}
              style={{
                width: 70,
                height: 70,
                borderRadius: 9999,
                borderWidth: 2,
                borderColor: 'blue',
              }}
            />
            <View style={{gap: 4}}>
              <Text
                style={{
                  color: 'black',
                  fontSize: 18,
                  fontWeight: '600',
                }}>
                {data?.first_name.charAt(0).toUpperCase() +
                  data?.first_name.slice(1)}{' '}
                {data?.last_name.charAt(0).toUpperCase() +
                  data?.last_name.slice(1)}
              </Text>
              <Text
                style={{
                  color: 'black',
                  fontSize: 10,
                }}>
                {data?.email}
              </Text>
              <Text
                style={{
                  color: 'black',
                  fontSize: 10,
                }}>
                +91 {data?.phone}
              </Text>
            </View>
          </View>
        </ImageBackground>
        <View style={{flex: 1, paddingTop: 10, backgroundColor: '#f2f2f2'}}>
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>

      <View style={{padding: 20, borderTopWidth: 1, borderTopColor: '#ccc'}}>
        <TouchableOpacity
          style={{paddingVertical: 15}}
          onPress={() => logout()}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text
              style={{
                fontSize: 15,
                color: 'black',
                marginLeft: 5,
              }}>
              Log out
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CustomDrawer;

const styles = StyleSheet.create({
  userAvatar: {
    height: 67.5,
    width: 67.5,
    borderRadius: 40,
    marginBottom: 10,
    marginTop: 30,
  },
  switchTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 7,
    paddingVertical: 5,
  },
  preferences: {
    fontSize: 16,
    color: '#ccc',
    paddingTop: 10,
    fontWeight: '500',
    paddingLeft: 20,
  },
  switchText: {
    fontSize: 17,
    color: '',
    paddingTop: 10,
    fontWeight: 'bold',
  },
});
