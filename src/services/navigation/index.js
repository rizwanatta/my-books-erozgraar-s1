import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {Login} from '../../screens/login'
import { Signup } from '../../screens/signup';
import {Home} from '../../screens/home'

const NavContainer = ()=> {
// this will help us to register stack type screens
const Stack = createNativeStackNavigator();
    return (

        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={Home}/>
                <Stack.Screen name="Login" component={Login}/>
                <Stack.Screen name="Signup" component={Signup}/>
            </Stack.Navigator>
        </NavigationContainer>

    )
}

export {NavContainer}