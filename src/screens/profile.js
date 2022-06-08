import React, { useEffect } from 'react';
import { useState, useRef } from 'react';
import { View, Text, TouchableOpacity, Alert, Image } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import * as MediaLibrary from 'expo-media-library';
import * as ImagePicker from 'expo-image-picker'; // not react-image-picker

import { firebase } from '../db/firebase_config';
import { Button } from 'react-native-paper';

const Profile = ({ route, navigation }) => {
  const [person, setPerson] = useState();
  const [loading, setLoading] = useState(true);
  const [imageFromGallery, setImageFromGallery] = useState();

  const { imageData } = route.params;

  const addressTextRef = useRef();

  useEffect(() => {
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
  }, []);

  function openCamera() {
    navigation.navigate('Camera');
  }

  if (loading === true) {
    return <Text>Fetching the data</Text>;
  }

  //
  const uriToBlob = (uri) => {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();

      xhr.onload = function () {
        // return the blob
        resolve(xhr.response);
      };

      xhr.onerror = function () {
        // something went wrong
        reject(new Error('uriToBlob failed'));
      };

      // this helps us get a blob
      xhr.responseType = 'blob';

      xhr.open('GET', uri, true);
      xhr.send(null);
    });
  };

  return (
    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
      <TouchableOpacity onPress={() => openCamera()}>
        {imageData ? (
          <Image
            source={{ uri: imageData.uri }}
            style={{ height: 200, width: 200, borderRadius: 100 }}
          />
        ) : (
          <Ionicons name={'person-circle'} size={200} color={'purple'} />
        )}
      </TouchableOpacity>

      {
        // this means only show when imageGallery has something
        imageFromGallery && (
          <Image
            source={{ uri: imageFromGallery.uri }}
            style={{ height: 200, width: 200, borderRadius: 100 }}
          />
        )
      }

      <Button
        onPress={() => {
          (async () => {
            try {
              const permissionData =
                await MediaLibrary.requestPermissionsAsync();
              console.log(permissionData);
              if (permissionData.status === 'granted') {
                let result = await ImagePicker.launchImageLibraryAsync({
                  mediaTypes: ImagePicker.MediaTypeOptions.All,
                  allowsEditing: true,
                  aspect: [4, 3],
                  quality: 1,
                });

                setImageFromGallery(result);
              }
            } catch (error) {
              console.log(error);
            }
          })();
        }}
      >
        check local storage permissons
      </Button>

      <Button
        onPress={() => {
          //convert image uri to a blob and then send it tofirebase
          const blob = uriToBlob(imageFromGallery.uri);

          firebase
            .storage()
            .ref('profile_pics')
            .child()
            .put(blob)
            .then((response) => {
              console.log(response);
            })
            .catch((error) => {
              console.log(error);
            });
        }}
      >
        upload to firebase
      </Button>

      <Text style={{ fontSize: 30, alignSelf: 'center' }}>
        {person.firstName}
      </Text>
      <Text style={{ fontSize: 30, alignSelf: 'center' }}>
        {person.lastName}
      </Text>
      <Text style={{ fontSize: 30, alignSelf: 'center' }} ref={addressTextRef}>
        {person.address}
      </Text>
      <Text style={{ fontSize: 30, alignSelf: 'center' }}>{person.gender}</Text>
    </View>
  );
};

export { Profile };
