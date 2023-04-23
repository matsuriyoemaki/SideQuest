import React from 'react';
import { Button, Text, TextInput, StyleSheet, SafeAreaView } from 'react-native';

function CreateReward({navigation}) {
    const [title, setTitle] = React.useState('Title');
    const [description, setDescription] = React.useState('Description');
    const [deadline, setDeadline] = React.useState('Deadline');
    const [reward, setReward] = React.useState('Reward');
    return (
        <SafeAreaView styles={styles.background}>
            <Text style={styles.TitleText}>Create Reward Here</Text>

            <TextInput
            style={styles.TextInput}
            onChangeText={(title) => setTitle(title)}
            value={title}
            />

            <TextInput
            style={styles.TextInput}
            onChangeText={(description) => setDescription(description)}
            value={description}
            />

            
            <Button 
                title="Create Reward"
                style ={styles.createButton}
                onPress={() => navigation.navigate("Rewards")}/>
        </SafeAreaView>
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