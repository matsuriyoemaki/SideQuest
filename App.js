import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './app/screens/login';
import Home from './app/screens/home';
import Tasks from './app/screens/tasks';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Rewards from './app/screens/rewards';
import Completed from './app/screens/completed';
import CreateTask from './app/screens/createTask';
import CreateReward from './app/screens/createReward';
import {BlogProvider} from './app/context'
import { RootSiblingParent } from 'react-native-root-siblings';
import ViewTasks from './app/screens/viewTasks';
import RemoveRewards from './app/screens/removeReward';
import { Ionicons } from '@expo/vector-icons';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function Root() {
  return(
      <Tab.Navigator screenOptions={{headerShown: false}}>
        <Tab.Screen 
          name= "Home"
          component={Home}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="home" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen 
          name="Tasks"
          component={Tasks}
          options={{
            tabBarLabel: 'Tasks',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="reader" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Rewards"
          component={Rewards}
          options={{
            tabBarLabel: 'Rewards',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="flag" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
  );
}

function App(){
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Root" component={Root}/>
        <Stack.Screen name="Completed" component={Completed}/>
        <Stack.Screen name="To-do" component={Tasks}/>
        <Stack.Screen name="CreateTask" component={CreateTask}/>
        <Stack.Screen name="CreateReward" component={CreateReward}/>
        <Stack.Screen name="ViewTask" component={ViewTasks}/>
        <Stack.Screen name="removeReward" component={RemoveRewards}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default ()=>{
  return <RootSiblingParent>
  <BlogProvider>
      <App />
   </BlogProvider>
   </RootSiblingParent>
 }