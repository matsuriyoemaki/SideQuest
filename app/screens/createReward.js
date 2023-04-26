import React,{useContext, useState} from 'react'
import {Picker} from '@react-native-picker/picker';
import {View,Text,StyleSheet,FlatList,Button,TextInput} from 'react-native'
import {BlogContext}  from '../context'

function CreateReward({route, navigation}) {
    const[title,setTitle] = useState("")
    const[description,setContent] = useState("")
    const {state,dispatch} = useContext(BlogContext)
    const [priority, setSelectedLanguage] = useState("1");
    return(
        <View style={{margin:3}}>
            <Text style={styles.text}>Enter Title</Text>
            <TextInput style={styles.input} value={title} onChangeText={(text)=>setTitle(text)}/>
            <Text style={styles.text}>Enter Description</Text>
            <TextInput style={styles.input} value={description} onChangeText={(text)=>setContent(text)}/>
            <Text style={{fontSize:22}}>Add Reward for Priority Number: </Text>
            <Picker
                selectedValue={priority}
                onValueChange={(itemValue, itemIndex) =>
                    setSelectedLanguage(itemValue)
                }>
                <Picker.Item label="1" value="1" />
                <Picker.Item label="2" value="2" />
                <Picker.Item label="3" value="3" />
                <Picker.Item label="4" value="4" />
                <Picker.Item label="5" value="5" />
            </Picker>
            <Button
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
    background:{
        flex: 1,
        backgroundColor:"black",
        alignItems: 'center',
        justifyContent: 'center'
    },
    TitleText:{
        fontSize: 60,
        fontWeight:'bold',
        color: '#5cffecff',
    },
    inputBox:{
        backgroundColor: 'white',
        borderRadius: 30,
        width: "70%",
        height: 45,
        marginBottom: 20,
        justifyContent: "center",
    },
    TextInput: {
        height: 50,
        flex: 1,
        padding: 10,
        marginLeft: 20,
        color: 'black'
    },
    createButton: {
        width: '70%',
        backgroundColor: '#5cffecff',
        top: "70%"
    }
    
})