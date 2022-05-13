import { StyleSheet, Text, View } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useState } from 'react';

function Login({ navigation }) {
  const [email, setEmail] = useState('');
  const [loginDisable, setLoginDisable] = useState(true);

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
          if (email.length > 0) {
            setLoginDisable(false);
          }
        }}
      />

      <TextInput
        label="Password"
        secureTextEntry={true}
        right={<TextInput.Icon name="eye" color="purple" />}
      />

      <Button
        mode="outlined"
        color="purple"
        disabled={email.length > 0 ? false : true}
        onPress={() => {
          navigation.replace('Home', { userEmail: email });
        }}
      >
        Login
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

export { Login };
