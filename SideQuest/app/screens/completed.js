import React,{useContext,useState} from 'react'
import {Picker} from '@react-native-picker/picker';
import {View,Text,StyleSheet,FlatList,Button,TextInput} from 'react-native'
import {BlogContext}  from '../context'


const Completed = ({route,navigation})=>{
    const {state,dispatch} = useContext(BlogContext)
    
return (
    <View style={styles.container}>
        <FlatList 
         data={state}
         keyExtractor={post=>post.title}
         renderItem={({item})=>{
            if((item.type) && (item.type === "complete")){
                return (
                         <View style={styles.list}>
                            <Text>Title: <Text style={{fontSize:20}}>{item.title}</Text>   </Text>
                            <Text>Content: <Text style={{fontSize:20}}>{item.content}</Text>   </Text>
                            <Text>Priority: <Text style={{fontSize:20}}>{item.priority}</Text>  </Text>
                            <Text>Reward:  <Text style={{fontSize:20}}>{item.reward}</Text>  </Text>
                         </View>    
                )
            }
         }}
        />
    </View>
)
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 10, justifyContent: 'center', backgroundColor: 'black' },
    text: { margin: 6, fontSize: 16, fontWeight: 'bold' , textAlign: 'center' },
    list: {flexDirection:"row", flex: 1, justifyContent:"space-between", marginHorizontal:5, marginBottom:5, backgroundColor:"white", padding:10, elevation:4, flexWrap: 'wrap', borderColor: "#5cffecff", borderWidth: 5}
})
export default Completed;