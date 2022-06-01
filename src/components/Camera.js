import { useState, useEffect } from 'react';
import { Camera, CameraType } from 'expo-camera';
import { View, Text, Image } from 'react-native';
import { Button } from 'react-native-paper';

function CameraComp() {
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(CameraType.back);
  const [takenPic, setTakenPic] = useState();

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
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
      <Camera style={{ height: 400, width: '100%' }} type={type}></Camera>

      <Button
        onPress={async () => {
          const options = { quality: 1, base64: true };
          const data = await Camera.takePictureAsync(options);
          setTakenPic(data);
        }}
      >
        Capture
      </Button>

      {/* TODO we will start 43 lecture on it! */}
      {takenPic && (
        <Image source={{ uri: takenPic }} style={{ width: 200, height: 200 }} />
      )}
    </View>
  );
}

export { CameraComp };
