import { StyleSheet, Alert, View } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useState } from 'react';
import { firebase } from '../db/firebase_config';

function Register({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function registerUser() {
    // call firebase and ask it to register on
    // firebase auth
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((response) => {
        Alert.alert('🎉', 'now you can signin');
        navigation.goBack();
      })
      .catch((error) => {
        Alert.alert('❌', 'Something Went Wrong, Please Retry');
      });
  }

  return (
    <View style={styles.container}>
      <Ionicons
        name="person"
        size={200}
        color="purple"
        style={{ alignSelf: 'center' }}
      />

      <TextInput
        label="Email"
        onChangeText={(text) => {
          setEmail(text);
        }}
      />

      <TextInput
        label="Password"
        onChangeText={(text) => setPassword(text)}
        secureTextEntry={true}
        right={<TextInput.Icon name="eye" color="purple" />}
      />

      <Button
        mode="outlined"
        color="purple"
        onPress={() => {
          if (email.length === 0) {
            Alert.alert('Sorry 😥', 'You Missed Email');
          } else if (password.length === 0) {
            Alert.alert('Sorry 🔑', 'you missed Password');
          } else {
            // here we will go to firebase
            registerUser();
          }
        }}
      >
        Register
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: 'purple',
    padding: 10,
    borderRadius: 10,
  },
  buttonText: {
    color: 'white',
  },
});

export { Register };
