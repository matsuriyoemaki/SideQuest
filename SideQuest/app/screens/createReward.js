import React,{useContext, useState} from 'react'
import {Picker} from '@react-native-picker/picker';
import {View,Text,StyleSheet,FlatList,Button,TextInput} from 'react-native'
import {BlogContext}  from '../context'

function CreateReward({route, navigation}) {
    const[title,setTitle] = useState("")
    const {state,dispatch} = useContext(BlogContext)
    const [priority, setSelectedLanguage] = useState("1");
    return(
        <View style={styles.background}>
            <Text style={styles.text}>Enter Title</Text>
            <TextInput style={styles.input} value={title} onChangeText={(text)=>setTitle(text)}/>
            <Text style={styles.text}>Add Reward for Priority Number: </Text>
            <Picker
                selectedValue={priority}
                style={{backgroundColor: "white"}}
                onValueChange={(itemValue, itemIndex) =>
                    setSelectedLanguage(itemValue)
                }>
                <Picker.Item label="Low" value="Low" />
                <Picker.Item label="Medium" value="Medium" />
                <Picker.Item label="High" value="High" />
            </Picker>
            <Button
            color="#5cffecff"
             title="Add reward to priority pool"
             onPress={()=>{
                dispatch({type:"ADD_REWARD",payload:{title,priority}})
                navigation.navigate("Rewards")
                }}
             />
        </View>
    );
}

export default CreateReward;

const styles = StyleSheet.create({
    background:{ flex: 1,backgroundColor:"black",},
    text:{fontSize: 22,color: "white"},
    input:{fontSize:20,borderWidth:1,borderColor:"black",backgroundColor:"white",marginVertical:8},    
})