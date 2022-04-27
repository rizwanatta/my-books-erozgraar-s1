import {View, Image, FlatList} from 'react-native';

function Home ({navigation}) {

    const numbers = [1,2, 3, 4,5 ,6]

    return(

        <FlatList
         style={{backgroundColor:'red'}}
         data={numbers}
         renderItem={({item})=> (
            <Image
            style={{width:'100%',height:300}}
            source={{uri:"https://cdn.pixabay.com/photo/2021/11/22/04/21/drink-6815800_1280.jpg"}}
            />
         )}
        />
           

    )
}


export {Home}