import {useState} from "react";
import {View,Text, Button} from "react-native";

const Profile = ({route}) => {
    const [count, setCount] = useState(0);
    const [show, setShow] = useState(false);


    const {baseCount,name} = route.params

    return (
            <View>
                <Text style={{fontSize:30, alignSelf:"center"}}>{baseCount}</Text>
                <Text style={{fontSize:30, alignSelf:"center"}}>{name}</Text>

                <Button onPress={()=>{
                    // const inc = count + 1
                    // setCount(inc)


                    if(count === 10){
                        setShow(true)
                    }else {
                        setShow(false)
                    }
                    
                    setCount(count+1)


                    // setCount(count++)


                }}
                title={"increase"}
                />

{  show === true ?
        <Button onPress={()=>{
            // const dec = count - 1
            // setCount(dec)
            
            setCount(count-1)

        }}
        title={"Decrease"}
        />

        : 

        <View/>
}
           


            </View>
    )
}

export {Profile};





