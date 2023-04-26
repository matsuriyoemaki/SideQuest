import React,{useContext,useState} from 'react'
import {Picker} from '@react-native-picker/picker';
import {View,Text,StyleSheet,FlatList,Button,TextInput} from 'react-native'
import {BlogContext}  from '../context'
import {Feather} from '@expo/vector-icons'


const RemoveRewards = ({route,navigation})=>{
    const {state,dispatch} = useContext(BlogContext)
    
return (
    <View style={{flex:1}}>
        <FlatList 
         data={state}
         keyExtractor={post=>post.title}
         renderItem={({item})=>{
            if((item.type) && (item.type === "reward")){
                return (
                         <View style={{
                             flexDirection:"row",
                             justifyContent:"space-between",
                             marginHorizontal:10,
                             marginBottom:5,
                             backgroundColor:"white",
                             padding:10,
                             elevation:4
                         }}>
                            <Text>Priority: <Text style={{fontSize:20}}>{item.priority}</Text>  </Text>
                            <Text>Reward:  <Text style={{fontSize:20}}>{item.title}</Text>  </Text>
                            <Feather name="trash" size={24} 
                            onPress={()=>dispatch({type:"REMOVE",payload:item.id})}
                            />
                         </View>    
                )
            }
         }}
        />
    </View>
)
}

export default RemoveRewards