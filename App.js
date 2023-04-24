import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import {NavigationContainer,useNavigation} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import IndexScreen from './src/screens/indexScreen'
import {BlogProvider} from './src/context/BlogContext'
import ShowScreen from './src/screens/Showscreen'
import CreateScreen from './src/screens/CreateScreen'
import AddPriorityReward from './src/screens/AddPriorityReward'
import CompletedTasks from './src/screens/CompletedTasks'
import RemoveRewards from './src/screens/RemoveRewards'
import {Feather} from '@expo/vector-icons'
import { RootSiblingParent } from 'react-native-root-siblings';

const Stack = createStackNavigator()
function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen 
          name="index"
          component={IndexScreen} 
          options={{
            title:"SideQuest",
            headerTitleAlign:"center",
            /*
            headerRight:()=>{
               return <Feather 
               name="plus" 
               size={30} 
               style={{marginRight:5}}
               />
            }
            */
            }} />
          <Stack.Screen name="show" component={ShowScreen} options={{title:"Task Details",headerTitleAlign:"center"}} />
          <Stack.Screen name="create" component={CreateScreen} options={{title:"Create Task",headerTitleAlign:"center"}} />
          <Stack.Screen name="addreward" component={AddPriorityReward} options={{title:"Add Reward",headerTitleAlign:"center"}} />
          <Stack.Screen name="completedtasks" component={CompletedTasks} options={{title:"Completed Tasks",headerTitleAlign:"center"}} />
          <Stack.Screen name="removerewards" component={RemoveRewards} options={{title:"Remove Rewards",headerTitleAlign:"center"}} />
        </Stack.Navigator>
      </NavigationContainer>

  );
}

export default ()=>{
 return <RootSiblingParent>
 <BlogProvider>
     <App />
  </BlogProvider>
  </RootSiblingParent>
}