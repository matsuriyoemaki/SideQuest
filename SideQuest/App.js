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

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function Root() {
  return(
      <Tab.Navigator screenOptions={{headerShown: false}}>
        <Tab.Screen name= "Home" component={Home}/>
        <Tab.Screen name="Tasks" component={Tasks}/>
        <Tab.Screen name="Rewards" component={Rewards}/>
      </Tab.Navigator>
  );
}

function App(){
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name = "Login" component={Login}/>
        <Stack.Screen name="Root" component={Root}/>
        <Stack.Screen name="Completed" component={Completed}/>
        <Stack.Screen name="To-do" component={Tasks}/>
        <Stack.Screen name="CreateTask" component={CreateTask}/>
        <Stack.Screen name="CreateReward" component={CreateReward}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}
export default App;