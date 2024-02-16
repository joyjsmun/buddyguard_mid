import {useNavigation} from '@react-navigation/native';
import React, {useLayoutEffect} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import {Icon, SearchBar, Button} from '@rneui/themed';

const SearchSection = () => {
  return (
    <View className="absolute bottom-[10.5%] w-[100%] h-auto p-2 self-center bg-gray-200">
      <SearchBar
        placeholder="Search your destination.."
        ref={search => (this.search = search)}
        lightTheme={true}
        round={true}
        inputContainerStyle={{
          backgroundColor: 'white',
          paddingLeft: 10,
        }}
        containerStyle={{
          backgroundColor: 'transparent',
        }}
      />
      <View className="mt-2 flex-row">
        <Button
          onPress={() => {}}
          containerStyle={{
            width: '48%',
            borderRadius: 5,
            marginHorizontal: 2,
          }}>
          <Text className="font-bold mr-2 text-white text-lg p-1 ">Reset</Text>
          <Icon name="refresh" color="white" />
        </Button>
        <Button
          onPress={() => {}}
          containerStyle={{
            width: '48%',
            borderRadius: 5,
            marginHorizontal: 2,
          }}>
          <Text className="font-bold mr-2 text-white text-lg p-1 ">Search</Text>
          <Icon name="search" color="white" />
        </Button>
      </View>
    </View>
  );
};

export default function Map() {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);

  return (
    <View className="flex-1 relative w-full ">
      <MapView
        className="flex-1 "
        provider={PROVIDER_GOOGLE}
        onMapReady={() => {}}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
      <SearchSection />
    </View>
  );
}
