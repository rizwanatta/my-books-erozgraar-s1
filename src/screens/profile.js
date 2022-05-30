import { useState } from 'react';
import { View, Text, Button, Alert } from 'react-native';
import { Avatar } from 'react-native-paper';
import { firebase } from '../db/firebase_config';

const Profile = ({ route }) => {
  const [person, setPerson] = useState();

  const userId = firebase.auth().currentUser.uid;

  firebase
    .firestore()
    .collection('users')
    .doc(userId)
    .get()
    .then((response) => {
      response.ref.onSnapshot((response) => {
        console.log(response);
      });
      Alert.alert('test', 'response');
    })
    .catch((error) => {
      Alert.alert('test', 'error');
    });

  return (
    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 30, alignSelf: 'center' }}></Text>

      <Text style={{ fontSize: 28, alignSelf: 'center' }}></Text>

      <Text style={{ fontSize: 26, alignSelf: 'center' }}></Text>

      <Text style={{ fontSize: 20, alignSelf: 'center' }}></Text>
    </View>
  );
};

export { Profile };
