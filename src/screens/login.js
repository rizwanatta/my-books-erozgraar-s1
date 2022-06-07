import { useRef, useEffect } from 'react';
import { StyleSheet, Alert, Text, View } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useState } from 'react';
import { firebase } from '../db/firebase_config';

function Login({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const inputRef = useRef();

  // this iwill only run when user see the page
  useEffect(() => {
    console.log('aaana pa');
  }, []);

  // this iwill only run when user leaves the page
  useEffect(() => {
    return () => {
      console.log('jaaana pa');
    };
  }, []);

  useEffect(() => {
    console.log('yp email  pa');
  }, [email]);

  useEffect(() => {
    if (password.length < 6) {
      console.log('password is week');
    } else {
      console.log('wow strong password');
    }
  }, [password]);

  if (firebase.auth().currentUser !== null) {
    // navigation.replace('Home');
  } else {
    // user is logged out
  }

  function loginUser() {
    navigation.replace('Home');
    // firebase
    //   .auth()
    //   .signInWithEmailAndPassword(email, password)
    //   .then((response) => {
    //     navigation.replace('Home');
    //   })
    //   .catch((error) => {
    //     Alert.alert('❌', 'Something Went Wrong, Please Retry');
    //   });
  }

  return (
    <View style={styles.container}>
      <Ionicons
        name="book"
        size={200}
        color="purple"
        style={{ alignSelf: 'center' }}
      />

      <TextInput
        label="Email"
        onChangeText={(text) => {
          setEmail(text);
        }}
        ref={inputRef}
      />

      <TextInput
        label="Password"
        secureTextEntry={true}
        onChangeText={(text) => setPassword(text)}
        right={<TextInput.Icon name="eye" color="purple" />}
      />

      <Button
        mode="outlined"
        color="purple"
        // disabled={email.length > 0 ? false : true}
        onPress={() => {
          if (email.length === 0) {
            // Alert.alert('Sorry 😥', 'You Missed Email');
            inputRef.current.label = 'sorry';
          } else if (password.length === 0) {
            Alert.alert('Sorry 🔑', 'you missed Password');
          } else {
            // here we will go to firebase
            loginUser();
          }
        }}
      >
        Login
      </Button>

      <Text
        style={{
          color: 'black',
          alignSelf: 'center',
          margin: 10,
        }}
      >
        Dont have an account? {'\t'}
        <Text
          onPress={() => {
            navigation.replace('Register');
          }}
          style={{ color: 'purple', fontWeight: 'bold' }}
        >
          Register Now!
        </Text>
      </Text>
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

export { Login };
