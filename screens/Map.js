import React, {useLayoutEffect, useState, useRef} from 'react';
import {View, Text, Image} from 'react-native';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import {SearchBar, Button} from '@rneui/themed';
import {search, undo} from '../assets/images';
import Geolocation from '@react-native-community/geolocation';

const getMyLocation = (mapRef, setRegion) => {
  Geolocation.getCurrentPosition(loc => {
    mapRef.current.animateToRegion({
      latitude: loc.coords.latitude,
      longitude: loc.coords.longitude,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    });
    setRegion({
      latitude: loc.coords.latitude,
      longitude: loc.coords.longitude,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    });
  });
};

const SearchSection = () => {
  return (
    <View
      style={{
        position: 'absolute',
        bottom: '10.5%',
        width: '100%',
        backgroundColor: '#e0e0e0',
        padding: 8,
      }}>
      <SearchBar
        placeholder="Search your destination.."
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
      <View style={{marginTop: 8, flexDirection: 'row'}}>
        <Button
          onPress={() => {}}
          containerStyle={{
            width: '48%',
            borderRadius: 5,
            marginHorizontal: 2,
          }}>
          <Text
            style={{
              fontWeight: 'bold',
              marginRight: 4,
              color: 'white',
              fontSize: 16,
              padding: 4,
            }}>
            Reset
          </Text>
          <Image source={undo} style={{width: 32, height: 32}} />
        </Button>
        <Button
          onPress={() => {}}
          containerStyle={{
            width: '48%',
            borderRadius: 5,
            marginHorizontal: 2,
          }}>
          <Text
            style={{
              fontWeight: 'bold',
              marginRight: 4,
              color: 'white',
              fontSize: 16,
              padding: 4,
            }}>
            Search
          </Text>
          <Image source={search} style={{width: 32, height: 32}} />
        </Button>
      </View>
    </View>
  );
};

export default function Map() {
  const [region, setRegion] = useState({
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });
  const mapRef = useRef(null);

  useLayoutEffect(() => {
    // Hide header
  }, []);

  useLayoutEffect(() => {
    if (mapRef.current) {
      getMyLocation(mapRef, setRegion);
    }
  }, []);

  return (
    <View style={{flex: 1, width: '100%'}} className="flex-1 relative w-full ">
      <MapView
        style={{flex: 1}}
        provider={PROVIDER_GOOGLE}
        ref={mapRef}
        initialRegion={region}
      />
      <SearchSection />
    </View>
  );
}
