import { StyleSheet, Alert, View } from 'react-native';
import { Text, TextInput, Button, RadioButton } from 'react-native-paper';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useState } from 'react';
import { firebase } from '../db/firebase_config';

function Register({ navigation }) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [address, setAddress] = useState('');
  const [gender, setGender] = useState('');

  function registerUser() {
    // call firebase and ask it to register on
    // firebase auth
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((response) => {
        //after a suceess register you take the rest of states
        const restOfData = {
          firstName,
          lastName,
          address,
          gender,
        };
        //
        if (response.user.uid) {
          firebase
            .firestore()
            .collection('users')
            .doc(response.user.uid)
            .set(restOfData);
        }
      })
      .catch((error) => {
        Alert.alert('❌', 'Something Went Wrong, Please Retry');
      });
  }

  return (
    <View style={styles.container}>
      <Ionicons
        name="person"
        size={40}
        color="purple"
        style={{ alignSelf: 'center' }}
      />

      <TextInput
        style={styles.inputContainer}
        label="First Name"
        onChangeText={(text) => {
          setFirstName(text);
        }}
      />

      <TextInput
        style={styles.inputContainer}
        label="Last Name"
        onChangeText={(text) => {
          setLastName(text);
        }}
      />

      <TextInput
        label="Email"
        style={styles.inputContainer}
        onChangeText={(text) => {
          setEmail(text);
        }}
      />

      <TextInput
        label="Password"
        style={styles.inputContainer}
        onChangeText={(text) => setPassword(text)}
        secureTextEntry={true}
        right={<TextInput.Icon name="eye" color="purple" />}
      />

      <TextInput
        style={[styles.inputContainer, { height: 200 }]}
        label="Address"
        multiline={true}
        onChangeText={(text) => setAddress(text)}
      />

      <Text>Gender:</Text>
      <RadioButton.Group
        onValueChange={(newValue) => {
          setGender(newValue);
        }}
        value={gender}
      >
        <View style={styles.genderViewCon}>
          <View style={styles.radioCon}>
            <RadioButton value="male" />
            <Text>Male</Text>
          </View>

          <View style={styles.radioCon}>
            <RadioButton value="female" />
            <Text>Female</Text>
          </View>
        </View>
      </RadioButton.Group>

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
    backgroundColor: 'white',
  },
  inputContainer: {
    backgroundColor: 'transparent',
  },
  genderViewCon: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  radioCon: {
    flexDirection: 'row',
    alignItems: 'center',
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
