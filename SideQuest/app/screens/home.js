import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
function Home(props) {
    return (
        <View style={styles.background}>
            <Text style={styles.text} >Welcome to Sidequest!</Text>
            <Image style={styles.logo} source={require('../assets/SideQuestLogo.jpg')}/>
        </View>
    );
}

export default Home;


const styles = StyleSheet.create({
    background:{
        backgroundColor: "black",
        justifyContent: "center",
        alignItems: "center",
        flex:1
    },
    text:{
        fontWeight: "bold",
        fontSize:50,
        textAlign:"center",
        color: "#5cffecff"
    },
    logo:{
        width: 100,
        height:100,
    }

})