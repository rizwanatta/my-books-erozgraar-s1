import React from 'react';
import { useState } from 'react';
import { View, Text, TouchableOpacity, Alert } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Camera, CameraType } from 'expo-camera';

import { firebase } from '../db/firebase_config';

const Profile = ({ route, navigation }) => {
  const [person, setPerson] = useState();
  const [loading, setLoading] = useState(true);

  const userId = firebase.auth().currentUser.uid;

  firebase
    .firestore()
    .collection('users')
    .doc(userId)
    .get()
    .then((response) => {
      setPerson(response.data());
      setLoading(false);
    })
    .catch((error) => {
      Alert.alert('test', 'error');
      setLoading(false);
    });

  function openCamera() {
    navigation.navigate('Camera');
  }

  if (loading === true) {
    return <Text>Fetching the data</Text>;
  }

  return (
    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
      <TouchableOpacity onPress={() => openCamera()}>
        <Ionicons name={'person-circle'} size={200} color={'purple'} />
      </TouchableOpacity>
      <Text style={{ fontSize: 30, alignSelf: 'center' }}>
        {person.firstName}
      </Text>
      <Text style={{ fontSize: 30, alignSelf: 'center' }}>
        {person.lastName}
      </Text>
      <Text style={{ fontSize: 30, alignSelf: 'center' }}>
        {person.address}
      </Text>
      <Text style={{ fontSize: 30, alignSelf: 'center' }}>{person.gender}</Text>
    </View>
  );
};

export { Profile };
