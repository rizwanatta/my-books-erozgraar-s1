import { StatusBar } from 'expo-status-bar';
import { StyleSheet,Image,TextInput,View, TouchableOpacity , Text} from 'react-native';

function Login() {
  return (

    <View style={styles.container}>
      <StatusBar backgroundColor='#EEABC4'/>

      <Image 
      
      style={styles.headerImage}
      source={{uri:"https://cdn.pixabay.com/photo/2021/01/21/15/54/books-5937716__340.jpg"}}
  
      />

    <TextInput
      style={styles.input}
      placeholder="email"
      selectionColor={"#4B2840"}
    />
    <TextInput
      style={styles.input}
      placeholder={"password"}
      secureTextEntry = {true}
      selectionColor={"#4B2840"}
    />



    <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}> Login </Text>
    </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding:10
  },
  headerImage:{
    height:200,
    width:200,
    borderRadius: 100,
    marginTop:50,
    alignSelf:'center'
  },
  input:{
    borderBottomWidth: 1,
    height:50,
  },
  button:{
      backgroundColor:'purple',
      padding:10,
      borderRadius:10,
      alignItems:'center',
      marginTop:10,
      width:200,
      height:50,
      alignSelf:'flex-end'
  },
  buttonText:{
      color:"white"
  }
});


export {Login}