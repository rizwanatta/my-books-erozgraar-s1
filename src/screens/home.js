import * as React from 'react';
import { ImageBackground, View, Text, Button } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import Foundation from '@expo/vector-icons/Foundation';

function Home({ navigation, route }) {
  const { userEmail } = route.params;

  return (
    <View>
      <ImageBackground
        source={{
          uri: 'https://cdn.pixabay.com/photo/2022/01/07/07/13/chicago-6921293__340.jpg',
        }}
        style={{ width: '100%', height: '100%' }}
        resizeMode="cover"
      >
        <View
          style={{
            backgroundColor: 'rgba(0,0,0,0.7)',
            justifyContent: 'center',
            alignItems: 'center',
            flex: 1,
          }}
        >
          <Text style={{ color: 'white' }}>{userEmail}</Text>

          <Ionicons name="person" color="white" size={30} />
          <Ionicons name="home" color="purple" size={30} />
          <Foundation name="bitcoin" color="yellow" size={100} />
          <Button
            title={'button'}
            onPress={() => {
              navigation.navigate('Profile', { baseCount: 32, name: 'akram' });
            }}
          />
        </View>
      </ImageBackground>
    </View>
  );
}

export { Home };
