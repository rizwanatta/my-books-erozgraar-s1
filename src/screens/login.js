import { StatusBar } from 'expo-status-bar';
import { StyleSheet,
     TouchableOpacity, 
     TouchableHighlight, 
     Pressable,
     Text,
      View } from 'react-native';

function Login() {
  return (
    <View style={styles.container}>
        <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Touch Button</Text>
        </TouchableOpacity>
  
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
  button:{
      backgroundColor:'purple',
      padding:10,
      borderRadius:10
  },
  buttonText:{
      color:"white"
  }
});


export {Login}