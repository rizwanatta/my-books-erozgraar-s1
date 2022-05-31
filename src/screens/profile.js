import React from 'react';
import { useState } from 'react';
import { View, Text, Button, Alert } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { firebase } from '../db/firebase_config';

const Profile = ({ route }) => {
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

  return (
    <React.Fragment>
      {loading === true ? (
        <Text>Fetching the data</Text>
      ) : (
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          <Ionicons name={'person-circle'} size={200} color={'purple'} />
          <Text style={{ fontSize: 30, alignSelf: 'center' }}>
            {person.firstName}
          </Text>
          <Text style={{ fontSize: 30, alignSelf: 'center' }}>
            {person.lastName}
          </Text>
          <Text style={{ fontSize: 30, alignSelf: 'center' }}>
            {person.address}
          </Text>
          <Text style={{ fontSize: 30, alignSelf: 'center' }}>
            {person.gender}
          </Text>
        </View>
      )}
    </React.Fragment>
  );
};

export { Profile };
