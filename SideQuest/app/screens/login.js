import React from 'react';
import { SafeAreaView,View, Text, TextInput, StyleSheet, Button } from 'react-native';


function Login({navigation}) {
    const [username, setUsername] = React.useState('Username');
    const [password, setPassword] = React.useState('Password');
    return (
        <SafeAreaView style={styles.background}>
            <Text style={styles.TitleText}>Login</Text>

            <SafeAreaView style={styles.inputBox}>
                <TextInput
                style={styles.TextInput}
                onChangeText={(username) => setPassword(username)}
                value={username}
                />
            </SafeAreaView>

            <SafeAreaView style={styles.inputBox}>
                <TextInput
                style={styles.TextInput}
                onChangeText={(password) => setPassword(password)}
                value={password}
                />
            </SafeAreaView>
            <View styles={styles.loginButton}>
                <Button
                color="#5cffecff"
                title="Login"
                onPress={() => navigation.navigate("Root")}/>
            </View>
            
        </SafeAreaView>
    );
}

export default Login;

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
    loginButton: {
        width: '70%',
        backgroundColor: '#5cffecff',
        top: "70%"
    }
    
})