import React,{useContext,useState} from 'react'
import {Picker} from '@react-native-picker/picker';
import {View,Text,StyleSheet,FlatList,Button,TextInput} from 'react-native'
import {BlogContext}  from '../context/BlogContext'



const AddPriorityReward = ({route,navigation})=>{
    const[title,setTitle] = useState("")
    const[content,setContent] = useState("")
    const {state,dispatch} = useContext(BlogContext)
    const [priority, setSelectedLanguage] = useState("1");
    return(
        <View style={{margin:3}}>
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
            <Text style={{fontSize:22}}>Enter Reward</Text>
            <TextInput style={styles.input} value={title} onChangeText={(text)=>setTitle(text)}/>
            <Button
             title="Add reward to priority pool"
             onPress={()=>{
                 dispatch({type:"ADD_REWARD",payload:{title,priority}})
                 navigation.goBack()
                }}
             />
        </View>
    )
}

const styles= StyleSheet.create({
    input:{
        fontSize:20,
        borderWidth:1,
        borderColor:"black",
        marginVertical:8
    }
})

export default AddPriorityReward