import { useState, useEffect, useRef } from 'react';
import { Camera, CameraType } from 'expo-camera';
import { View, Text, Image } from 'react-native';
import { Button } from 'react-native-paper';

function CameraComp({ navigation }) {
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(CameraType.back);
  const [takenPic, setTakenPic] = useState();

  let camera;

  useEffect(() => {
    (async () => {
      const response = await Camera.requestCameraPermissionsAsync();
      if (response.status === 'granted') {
        setHasPermission(true);
      } else {
        setHasPermission(false);
      }
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={{ flex: 1 }}>
      <Button
        onPress={() => {
          if (type === CameraType.back) {
            setType(CameraType.front);
          } else {
            setType(CameraType.back);
          }
        }}
      >
        FLip
      </Button>
      <Camera
        ref={(r) => {
          camera = r;
        }}
        style={{ height: 400, width: '100%' }}
        type={type}
      ></Camera>

      <Button
        onPress={async () => {
          const options = { quality: 1, base64: true };
          const data = await camera.takePictureAsync(options);
          console.log(data);
          setTakenPic(data);
        }}
      >
        Capture
      </Button>

      <Button
        onPress={() => {
          navigation.navigate('Profile', { imageData: takenPic });
        }}
      >
        GO To Profile
      </Button>

      {/* TODO we will start 43 lecture on it! */}
      {takenPic && (
        <Image
          source={{ uri: takenPic.uri }}
          style={{ width: 200, height: 200 }}
        />
      )}
    </View>
  );
}

export { CameraComp };
