import React, {Component} from 'react';
import {View, Text, Image} from 'react-native';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import {SearchBar, Button} from '@rneui/themed';
import {search, undo} from '../assets/images';
import Geolocation from '@react-native-community/geolocation';

// let eventData = [
//   {
//     id:"1",
//     name:"ZuSocial",
//     img:"",
//     latitude
//   }
// ]

class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {
      latitude: 41.38707262727212,
      longitude: 2.1700450041329127,
      events: [],
      searchSting: '',
      distance: 40,
      selectedPlace: null,
      region: {
        latitude: 41.3851,
        longitude: 2.1734,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      },
    };
    this.mapRef = React.createRef();
  }

  componentDidMount() {
    this.getMyLocation();
  }

  getMyLocation = () => {
    Geolocation.getCurrentPosition(loc => {
      this.mapRef.current.animateToRegion({
        latitude: loc.coords.latitude,
        longitude: loc.coords.longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      });
      this.setState({
        latitude: loc.coords.latitude,
        longitude: loc.coords.longitude,
        region: {
          latitude: loc.coords.latitude,
          longitude: loc.coords.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        },
      });
    });
  };

  render() {
    return (
      <View className="flex-1 justify-center  w-full ">
        <MapView
          className="flex-1"
          provider={PROVIDER_GOOGLE}
          ref={this.mapRef}
          initialRegion={this.state.region}
        />
        <SearchSection />
      </View>
    );
  }
}

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

export default Map;
