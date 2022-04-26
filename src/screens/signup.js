import { StyleSheet,
     Text,
     TouchableOpacity,
      View } from 'react-native';

function Signup({route, navigation}) {
  const {userName, rollNumber, userAge, userFather}  = route.params
  return (
    <View style={styles.container}>
          <Text style={{fontSize:30}}>{userName}</Text>
          <Text style={{fontSize:30}}>{rollNumber}</Text>
          <Text style={{fontSize:30}}>{userAge}</Text>
          <Text style={{fontSize:30}}>{userFather}</Text>
          <TouchableOpacity onPress={()=>{
            navigation.goBack()
          }}>
            <Text style={styles.buttonText}> press me to Go Back</Text>
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
});


export {Signup}