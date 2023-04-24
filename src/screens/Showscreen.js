import React,{useContext} from 'react'
import {View,Text,StyleSheet,FlatList,Button} from 'react-native'
import {Feather} from '@expo/vector-icons'
import {BlogContext}  from '../context/BlogContext'
import Toast from 'react-native-root-toast'



const ShowScreen = ({route,navigation})=>{
    const {id}  =  route.params;
    const{state,dispatch} = useContext(BlogContext)
    const BlogPost  = state.find((post)=>{
        return post.id === id
    })
    return(
        <View>
            <Text>Title: {BlogPost ? BlogPost.title : ""}</Text>
            <Text>Description: {BlogPost ? BlogPost.content : ""}</Text>
            <Text>Priority: {BlogPost ? BlogPost.priority : ""}</Text>
            <Button
             title="Complete Task!"
             onPress={()=>{
                console.log(BlogPost);
                console.log(state)
                // Get reward for priority from state
                var item = "Default Item";
                var possibleRewards = []
                for(var i = 0; i < state.length; i++){
                    if(state[i].type == "reward"){
                        possibleRewards.push(state[i].title);
                    }
                }
                if(possibleRewards.length > 0){
                    item = possibleRewards[Math.floor(Math.random()*possibleRewards.length)];
                }
                let toast = Toast.show('Task Complete! Your reward is: ' + item, {
                    duration: Toast.durations.LONG,
                    position: Toast.positions.CENTER,
                    textColor: '#000000',
                    backgroundColor: '#00FF00',
                    shadow: true,
                    animation: true,
                    hideOnPress: true,
                    delay: 0,
                });
                navigation.goBack();
                 dispatch({type:"REMOVE",payload:id});
                }}
             />
        </View>
    )
}


export default ShowScreen