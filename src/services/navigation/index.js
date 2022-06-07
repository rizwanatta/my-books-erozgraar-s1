import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Login } from '../../screens/login';
import { Register } from '../../screens/register';
import { Home } from '../../screens/home';
import { Profile } from '../../screens/profile';
import { CameraComp } from '../../components/Camera';
const NavContainer = () => {
  // this will help us to register stack type screens
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Camera" component={CameraComp} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Register" component={Register} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export { NavContainer };
