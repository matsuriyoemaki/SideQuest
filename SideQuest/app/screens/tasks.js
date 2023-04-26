import React,{useContext} from 'react'
import {View,Text,StyleSheet,FlatList,Button,TouchableOpacity} from 'react-native'
import {Feather} from '@expo/vector-icons'
import {BlogContext}  from '../context/'
import Toast from 'react-native-root-toast';

const Tasks = ({navigation})=>{
    const {state,dispatch} = useContext(BlogContext)
    
return (
    <View style={{flex:1}}>
        <Button title="Create Task" onPress={()=>navigation.navigate("CreateTask")} />
        <Button title="See Completed Tasks" onPress={()=>navigation.navigate("Completed")} />
        <FlatList 
         data={state}
         keyExtractor={post=>post.title}
         renderItem={({item})=>{
            if(!(item.type)){
                return (
                    <TouchableOpacity
                        onPress={()=>navigation.navigate("ViewTask",{id:item.id})}
                    >
                         <View style={{
                             flexDirection:"row",
                             justifyContent:"space-between",
                             marginHorizontal:10,
                             marginBottom:5,
                             backgroundColor:"white",
                             padding:10,
                             elevation:4
                         }}>
                         <Text><Text style={{fontSize:22}}>{item.title}</Text>   (click me for details)   </Text>
                         <Feather name="trash" size={24} 
                         onPress={()=>dispatch({type:"REMOVE",payload:item.id})}
                         />
                         </View>    
                    </TouchableOpacity>
                )
            }
         }}
        />
    </View>
)
}
const styles = StyleSheet.create({
    container: { flex: 1, padding: 10, justifyContent: 'center', backgroundColor: 'black' },
    head: { height: 44, backgroundColor: 'darkblue' },
    headText: { fontSize: 20, fontWeight: 'bold' , textAlign: 'center', color: 'white' },
    text: { margin: 6, fontSize: 16, fontWeight: 'bold' , textAlign: 'center', color: 'white' },
    timeStyle: {fontSize: 50, textAlign:"center"},
    button: {width: "50%", alignSelf: 'flex-end', marginTop: -5}
})
export default Tasks;