import * as React from 'react';
import {View, Image,Text, FlatList} from 'react-native';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';


const LeftContent = props => <Avatar.Icon {...props} icon="folder" />


function Home ({navigation}) {

    const numbers = [1,2, 3, 4,5 ,6]

    const numbersObjArray = [
        {
            "name": "rizwan",
            "age": 30,
        },
        {
            "name": "steve",
            "age": 60,
        },
        {
            "name": "saleem",
            "age": 40
        }
    ]


    return(

        <View>

            <View>
                <FlatList
                        data={numbersObjArray}
                        renderItem={({item})=> (
                            <Card>
                            <Card.Title title={item.name} subtitle={item.age} left={LeftContent} />
                            <Card.Content>
                              <Title>{item.name}</Title>
                              <Paragraph>AGE: {item.age}</Paragraph>
                            </Card.Content>
                            <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
                            <Card.Actions>
                              <Button>Cancel</Button>
                              <Button>Ok</Button>
                            </Card.Actions>
                          </Card>
                        )}
                />
            </View>
        
        </View>

    )
}


export {Home}