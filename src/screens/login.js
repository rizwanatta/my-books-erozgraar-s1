import { StatusBar } from 'expo-status-bar';
import { StyleSheet,
     TouchableOpacity, 
     TouchableHighlight, 
     Pressable,
     Text,
     Image,
      View } from 'react-native';

function Login({navigation}) {
  return (
    <View style={styles.container}>
      <Image
      source={{uri:'https://cdn.pixabay.com/photo/2022/01/25/12/11/electric-kettle-6966011_1280.jpg'}}
      style={{
        height:100,
        width:100,
        resizeMode:"contain",
        borderRadius:50
    }}

      />

        <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Touch Button</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>{
          navigation.navigate("Signup", {userName: 'Erozgaar program', rollNumber: 10, userAge: 32, userFather: "Saleem"})
        }} >
            <Text style={{color:'black', marginTop:20}}>Dont have an account? Signup</Text>
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