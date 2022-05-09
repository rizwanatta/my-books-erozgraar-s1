import * as React from 'react';
import {ImageBackground, View, Button} from 'react-native';


function Home ({navigation}) {

    return(

        <View>
            <ImageBackground
            source={{uri: "https://cdn.pixabay.com/photo/2022/01/07/07/13/chicago-6921293__340.jpg"}}
            style={{width:"100%", height:"100%"}}
            resizeMode="cover"
            >

                <View style={{backgroundColor:'rgba(0,0,0,0.7)',
                justifyContent:'center',
                alignItems:'center',
                flex:1}}>

                    <Button title={"button"}
                    onPress={()=>{
                        navigation.navigate("Profile",{baseCount:32, name:"akram"})
                    }}
        
                    />

                </View>

            </ImageBackground>
        </View>

    )
}


export {Home}