import { StatusBar } from 'expo-status-bar';
import { StyleSheet,Image, Text, View } from 'react-native';

function Login() {
  return (
    <View style={styles.container}>

    <Image
    source={require('../../assets/dp2.png')}
    />
    <Text>hie i am here 
        in login</Text>
  
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


export {Login}