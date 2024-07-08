import {Image, StatusBar, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {ScreenWidth, ScreenHeight} from '../../utils/Constant';
import Header from '../../Components/Header';
import {CheckInIcon, TravelExpIcon, UserIcon} from '../../assets';
//@ts-ignore
import CheckOutDashIcon from '../../assets/Dashboard/icon-check-out.svg';
//@ts-ignore

import CheckInDashIcon from '../../assets/Dashboard/icon-check-in.svg';
import {useAuthStore} from '../../Store/useStore';

const HomeSrc = () => {
  const {data} = useAuthStore();

  const [meetingData, setMeetingData] = useState([
    {id: 1},
    {id: 2},
    {id: 3},
    {id: 4},
  ]);

  const getMeeting = async () => {
    const url = `https://api.hidromas.nl/get-meeting`;
    const requestData = {
      user_id: data?.user_id,
    };

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          apikey: 'hidromas-we-app-01~c^Dt0Oc32',
        },
        body: JSON.stringify(requestData),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      if (data?.data.length > 0) {
        // console.log(data?.data);
        setMeetingData(data?.data);
      }
      console.log('Meeting data:', data);
    } catch (error) {
      console.error('Error fetching meeting data:', error);
      // Handle error cases here
    }
  };

  useEffect(() => {
    getMeeting();
  }, []);
  return (
    <View style={{flex: 1}}>
      <Header />
      {/* Main sections */}
      <View
        style={{
          flexDirection: 'row',
          paddingHorizontal: ScreenWidth * 0.06,
          justifyContent: 'space-between',
          alignItems: 'center',
          width: ScreenWidth,
          paddingVertical: 16,
        }}>
        <Image
          source={CheckInIcon}
          resizeMode="cover"
          style={{width: ScreenWidth * 0.45, height: ScreenHeight * 0.3}}
        />
        <Image
          source={TravelExpIcon}
          resizeMode="cover"
          style={{width: ScreenWidth * 0.45, height: ScreenHeight * 0.3}}
        />
      </View>

      {/* Pending Checkout */}
      <View
        style={{
          paddingHorizontal: ScreenWidth * 0.06,
          marginTop: -50,
        }}>
        <Text
          style={{
            fontSize: 23,
            fontWeight: '600',
            color: 'black',
            paddingBottom: 10,
          }}>
          Pending Check Out
        </Text>
        {/* Items */}
        {meetingData?.map(item => (
          <View
            key={item.id}
            style={{
              marginBottom: 10,
              height: 80,
              backgroundColor: '#fff',
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 3,
              },
              shadowOpacity: 0.27,
              shadowRadius: 4.65,
              borderRadius: 10,
              elevation: 6,
              overflow: 'hidden',
            }}>
            <View style={{flexDirection: 'row'}}>
              <View style={{padding: 10, flexGrow: 1}}>
                <Text style={{fontSize: 23, fontWeight: '600', color: 'black'}}>
                  Triyaki Erdogan
                </Text>

                <View style={{flexDirection: 'row', gap: 4}}>
                  {/* CheckInDashIcon */}
                  <CheckInDashIcon width={20} height={20} fill={'red'} />

                  <Text style={{color: 'black'}}>
                    Check in: 14 Nov23 04:30 PM
                  </Text>
                </View>
              </View>
              <View
                style={{
                  backgroundColor: '#gray', //F6BE00
                  height: 80,
                  width: '25%',
                  alignItems: 'center',
                  alignSelf: 'flex-end',
                  justifyContent: 'center',
                }}>
                <CheckOutDashIcon width={30} height={30} fill={'red'} />
                <Text style={{color: 'black'}}>Check In</Text>
                {/* <Image
                source={CheckOutDashboardIcon}
                style={{width: 20, height: 20}}
              /> */}
              </View>
            </View>
          </View>
        ))}
      </View>
    </View>
  );
};

export default HomeSrc;

const styles = StyleSheet.create({});
