import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import React, {useLayoutEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {Hangout1, Hangout3, Map, inbox, sos} from '../assets/images';
import SwipeButton from '../components/SwipeButton';

const Home = () => {
  const navigation = useNavigation();
  const hangoutImages = [Hangout1, Hangout3]; // Assuming you have an array of hangout images

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView className="bg-yellow-50 flex-1 relative">
      <ScrollView contentContainerStyle={{padding: 12, paddingBottom: 60}}>
        <View className="pt-9 px-4 flex space-y-4 ">
          <View className="flex-row justify-between items-center">
            <Text className="text-[#121418] font-semibold text-base">
              Gm, Joy
            </Text>
            <View className="flex flex-row space-x-3">
              <TouchableOpacity
                onPress={() => navigation.navigate('AcceptRequest')}>
                <Image source={inbox} className="w-12 h-12 mr-1" />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate('AcceptRequest')}>
                <View className="w-12 h-12 ml-3 bg-red-500 rounded-2xl flex justify-center items-center">
                  <Text className="text-white font-bold">SOS</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
          {/* Explore Your Neighborhood*/}
          <View className="flex space-y-2">
            <Text className="text-[#121418] font-medium text-lg">
              Explore Your Neighborhood
            </Text>
            <View className="bg-gray-200 p-1 z-0 rounded-lg ">
              <TouchableOpacity
                onPress={() => navigation.navigate('Map')}
                className="z-50">
                <Image className="w-full h-40   rounded-lg" source={Map} />
              </TouchableOpacity>
            </View>
          </View>
          {/* Upcoming Events*/}
          <View className="flex space-y-2">
            <View className="mb-6">
              <Text className="text-[#121418] font-medium text-lg">
                Upcoming Events
              </Text>
            </View>
            <View className="flex-row align-baseline">
              {/* timeline */}
              <View className="basis-[11%] w-full h-14 flex justify-center items-center space-y-20 mt-12 mr-2 ">
                {hangoutImages.map((image, index) => (
                  <View
                    key={index}
                    className="rounded-full w-5 h-5 bg-[#FF5757] flex justify-center items-center">
                    <View
                      key={index}
                      className="rounded-full w-2 h-2 bg-white"></View>
                  </View>
                ))}
              </View>
              {/* event list */}
              <View className="flex w-full space-y-[47px]">
                {hangoutImages.map((image, index) => (
                  <TouchableOpacity
                    key={index}
                    onPress={() => navigation.navigate('Hangout')}
                    className="w-[85%] h-14  flex justify-center items-center">
                    <Image className="w-full h-24 rounded-lg" source={image} />
                  </TouchableOpacity>
                ))}
              </View>
            </View>
          </View>
          {/* Swipe Button */}
          <View className="flex">
            <View className="mt-6 mb-3">
              <Text className="text-[#121418] font-medium text-lg ">
                Swipe Hangout
              </Text>
            </View>
            {/* swipe button */}

            <SwipeButton />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
