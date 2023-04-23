import React from 'react';
import { Button, Text, TextInput, StyleSheet, SafeAreaView, TouchableOpacity} from 'react-native';


function CreateTask({navigation}) {
    const [title, setTitle] = React.useState('Title');
    const [description, setDescription] = React.useState('Description');
    const [deadline, setDeadline] = React.useState('Deadline');
    return (
        <SafeAreaView styles={styles.background}>
            <Text style={styles.TitleText}>Create Task Here</Text>

            <SafeAreaView styles={styles.inputBox}>
                <TextInput
                style={styles.TextInput}
                onChangeText={(title) => setTitle(title)}
                value={title}
                />
            </SafeAreaView>

            <SafeAreaView styles={styles.inputBox}>
                <TextInput
                style={styles.TextInput}
                onChangeText={(description) => setDescription(description)}
                value={description}
                />
            </SafeAreaView>

            <SafeAreaView styles={styles.inputBox}>
                <TextInput
                style={styles.TextInput}
                onChangeText={(deadline) => setDeadline(deadline)}
                value={deadline}
                />
            </SafeAreaView>

                <Button 
                    title="Create Task"
                    style ={styles.createButton}
                    onPress={() => navigation.navigate("Tasks")}/>
        </SafeAreaView>
    );
}

export default CreateTask;

const styles = StyleSheet.create({
    background:{
        flex: 1,
        backgroundColor:"black",
        alignItems: 'center',
        justifyContent: 'center'
    },
    TitleText:{
        fontSize: 50,
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