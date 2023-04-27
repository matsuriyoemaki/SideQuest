import React,{useContext, useState, useEffect} from 'react'
import {View,Text,StyleSheet,FlatList,Button,TouchableOpacity, SafeAreaView} from 'react-native'
import {Feather} from '@expo/vector-icons'
import {BlogContext}  from '../context/'
import Toast from 'react-native-root-toast';





const Tasks = ({navigation})=>{
    const {state,dispatch} = useContext(BlogContext)
    
    var [date, setDate] = useState(new Date());
    useEffect(() => {

        var timer = setInterval(()=>setDate(new Date()), 1000)
            
        return function cleanup(){
            clearInterval(timer)
        }
        
    }, []);
    
return (
    <SafeAreaView style={styles.container}>
        <View style={styles.completedButton}>
            <Button 
                color="#5cffecff" 
                title="See Completed Tasks" 
                onPress={()=>navigation.navigate("Completed")} />
        </View>

        <View>
            <Text style={styles.timeStyle}>{date.toLocaleDateString()}</Text>
            <Text style={styles.timeStyle}>{date.toLocaleTimeString()}</Text>
        </View>
        
        <FlatList 
         data={state}
         keyExtractor={post=>post.title}
         renderItem={({item})=>{
            if(!(item.type)){
                return (
                    <TouchableOpacity
                        onPress={()=>navigation.navigate("ViewTask",{id:item.id})}
                    >
                         <View style={styles.list}>
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

        <View>
            <Button
            color="#5cffecff" 
            title="Create Task"
            onPress={()=>navigation.navigate("CreateTask")} />
        </View>
        
    </SafeAreaView>
)
}
const styles = StyleSheet.create({
    container: { flex: 1, padding: 10, justifyContent: 'center', backgroundColor: 'black' },
    list: {flexDirection:"row", justifyContent:"space-between", marginHorizontal:10, marginBottom:5, backgroundColor:"white", padding:10, elevation:4, borderColor: "#5cffecff", borderWidth: 5, flexWrap: 'wrap'},
    completedButton: {width: "50%", alignSelf: 'flex-end', marginTop: -5},
    timeStyle: {fontSize: 40, textAlign:"center", color:"white"}
})
export default Tasks;