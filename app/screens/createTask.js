import React, {useContext, useState} from 'react';
import { Picker } from '@react-native-picker/picker';
import { Button, 
    Text, 
    View, 
    FlatList, 
    TextInput, 
    StyleSheet, 
    SafeAreaView, 
    TouchableOpacity,
    Pressable
} from 'react-native';
import {BlogContext}  from '../context'
import DateTimePicker from '@react-native-community/datetimepicker';

function CreateTask({route, navigation}) {
    const[title,setTitle] = useState("")
    const[content,setContent] = useState("")
    const {state,dispatch} = useContext(BlogContext)
    const [priority, setSelectedLanguage] = useState("1");
    const[deadline, setDeadline] = useState("")

    const [date, setDate] = useState(new Date());
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);
    const [text, setText] = useState('Empty');

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'android');
        setDate(currentDate);

        let tempDate = new Date(currentDate);
        let fDate = tempDate.getDay() + '/' + (tempDate.getMonth() + 1) + '/' +tempDate.getFullYear();
        setText(fDate);
        console.log(fDate);
    }

    const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
    }

    return(
        <View style={styles.background}>
            <Text style={styles.text}>Enter Title</Text>
            <TextInput style={styles.input} value={title} onChangeText={(text)=>setTitle(text)}/>
            <Text style={styles.text}>Enter Description</Text>
            <TextInput style={styles.input} value={content} onChangeText={(text)=>setContent(text)}/>
            <Text style={styles.text}>Enter Priority Number</Text>
            <Picker
                style={{backgroundColor: "white"}}
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
            <Text style={styles.text}>Enter Deadline</Text>
            <Pressable onPress={()=>showMode('date')}>
                <TextInput 
                    style={styles.input}
                    editable={false}>
                       {text} 
                    </TextInput>
            </Pressable>
            {show && (
                <DateTimePicker
                    testID='dateTimePicker'
                    value={date}
                    mode='date'
                    display='default'
                    onChange={onChange}
                />
            )}
            <Button 
                    title="Create Task"
                    color="#5cffecff"
                    onPress={() => 
                    {dispatch({type:"ADD_POST",payload:{title,content,priority}})
                    navigation.navigate("Tasks")}}/>
        </View>
    );
}

export default CreateTask;

const styles = StyleSheet.create({
    background:{
        flex: 1,
        backgroundColor:"black",
        margin: 3
    },

    text:{
        fontSize: 22,
        color: "white"
    },

    input:{
        fontSize:20,
        borderWidth:1,
        borderColor:"black",
        backgroundColor:"white",
        marginVertical:8
    },
    TextInput: {
        height: 50,
        flex: 1,
        padding: 10,
        marginLeft: 20,
        color: 'black'
    }
    
})