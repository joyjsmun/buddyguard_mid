import React, {useLayoutEffect, useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import POAP from './POAP';
import ZuPass from './ZuPass';
import NFT from './NFT';

const HangoutCreate = () => {
  const navigation = useNavigation();
  const [activeTab, setActiveTab] = useState('POAP'); // Default active tab

  const handleTabPress = tab => {
    setActiveTab(tab);
  };

  const [eventName, setEventName] = useState('');
  const [date, setDate] = useState('');
  const [location, setLocation] = useState('');
  const [description, setDescription] = useState('');
  const [numberOfPeople, setNumberOfPeople] = useState('');

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#F6D268'}}>
      <ScrollView contentContainerStyle={{padding: 12, paddingBottom: 60}}>
        <View style={{flex: 1, padding: 4}}>
          {/* Top Section */}
          <View style={{marginBottom: 4}}>
            <Text style={{fontSize: 20, fontWeight: 'bold', color: '#121418'}}>
              Create Your Hangout
            </Text>
            {/* File Upload */}
            {/* <TouchableOpacity onPress={() => navigation.navigate("Hangout")}>
              <Image style={{ width: '100%', height: 40, borderRadius: 8 }} source={Map} />
            </TouchableOpacity> */}
          </View>
          {/* Card Section */}
          <View style={{flex: 1}}>
            <View
              style={{
                backgroundColor: 'white',
                borderRadius: 8,
                padding: 16,
                marginBottom: 16,
              }}>
              {/* Create Hangout Detail*/}
              <View style={{marginBottom: 4}}>
                <Text style={{fontWeight: 'bold', marginBottom: 4}}>
                  Hangout Event Name
                </Text>
                <TextInput
                  placeholder="Event Name"
                  style={{
                    borderWidth: 2,
                    borderColor: '#1B75BC',
                    padding: 4,
                    borderRadius: 8,
                  }}
                  value={eventName}
                  onChangeText={setEventName}
                />
              </View>
              <View style={{marginBottom: 4}}>
                <Text style={{fontWeight: 'bold', marginBottom: 4}}>Date</Text>
                <TextInput
                  placeholder="Date"
                  style={{
                    borderWidth: 2,
                    borderColor: '#1B75BC',
                    padding: 4,
                    borderRadius: 8,
                  }}
                  value={date}
                  onChangeText={setDate}
                />
              </View>
              <View style={{marginBottom: 4}}>
                <Text style={{fontWeight: 'bold', marginBottom: 4}}>
                  Location
                </Text>
                <TextInput
                  placeholder="Choose Location"
                  style={{
                    borderWidth: 2,
                    borderColor: '#1B75BC',
                    padding: 4,
                    borderRadius: 8,
                  }}
                  value={location}
                  onChangeText={setLocation}
                />
              </View>
              <View style={{marginBottom: 4}}>
                <Text style={{fontWeight: 'bold', marginBottom: 4}}>
                  Description
                </Text>
                <TextInput
                  placeholder="Description"
                  style={{
                    borderWidth: 2,
                    borderColor: '#1B75BC',
                    padding: 4,
                    borderRadius: 8,
                  }}
                  value={description}
                  onChangeText={setDescription}
                />
              </View>
              <View style={{marginBottom: 4}}>
                <Text style={{fontWeight: 'bold', marginBottom: 4}}>
                  Number of People
                </Text>
                <TextInput
                  placeholder="Limit of Number"
                  style={{
                    padding: 4,
                    borderWidth: 2,
                    borderColor: '#1B75BC',
                    borderRadius: 8,
                  }}
                  value={numberOfPeople}
                  onChangeText={setNumberOfPeople}
                />
              </View>
              {/* Group Tab Filter Menu */}
              <View>
                <Text style={{fontWeight: 'bold', marginBottom: 4}}>
                  Group Tabs
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginBottom: 4,
                  }}>
                  <TouchableOpacity
                    onPress={() => handleTabPress('POAP')}
                    style={{
                      padding: 4,
                      width: '32%',
                      flexDirection: 'row',
                      alignItems: 'center',
                      backgroundColor:
                        activeTab === 'POAP' ? '#1B75BC' : '#ccc',
                      borderRadius: 8,
                    }}>
                    <Text style={{color: 'white', fontWeight: 'bold'}}>
                      POAP
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => handleTabPress('NFT')}
                    style={{
                      padding: 4,
                      width: '32%',
                      flexDirection: 'row',
                      alignItems: 'center',
                      backgroundColor: activeTab === 'NFT' ? '#1B75BC' : '#ccc',
                      borderRadius: 8,
                    }}>
                    <Text style={{color: 'white', fontWeight: 'bold'}}>
                      NFT
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => handleTabPress('ZuPass')}
                    style={{
                      padding: 4,
                      width: '32%',
                      flexDirection: 'row',
                      alignItems: 'center',
                      backgroundColor:
                        activeTab === 'ZuPass' ? '#1B75BC' : '#ccc',
                      borderRadius: 8,
                    }}>
                    <Text style={{color: 'white', fontWeight: 'bold'}}>
                      ZuPass
                    </Text>
                  </TouchableOpacity>
                </View>
                {/* Render content based on active tab */}
                {activeTab === 'POAP' && <POAP />}
                {activeTab === 'NFT' && <NFT />}
                {activeTab === 'ZuPass' && <ZuPass />}
              </View>
            </View>
            {/* Tab Menu */}
            {/* Next Button */}
            <TouchableOpacity>
              <View
                style={{
                  backgroundColor: '#1B75BC',
                  width: '100%',
                  height: 60,
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: 8,
                }}>
                <Text
                  style={{color: 'white', fontWeight: 'bold', fontSize: 20}}>
                  Create
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HangoutCreate;
