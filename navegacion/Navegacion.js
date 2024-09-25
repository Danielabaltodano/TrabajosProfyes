import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { AntDesign } from '@expo/vector-icons'; 

import Home from './Screens/Home';    
import Settings from './Screens/Settings';
import Users from './Screens/Users';
import DetailHome from './Screens/DetailHome';
import AnotherDetailHome from './Screens/AnotherDatailsHome';


const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName='Home'
      screenOptions={{
        tabBarActiveTintColor: 'purple',
      }}
    >
      <Tab.Screen 
        name='HomeScreen' component={StackDetailHome}
        options={{
          tabBarLabel: 'HomeScreen',
          tabBarIcon: ({ color, size }) => (
            <AntDesign name='home' size={30} color={color} />
          ),
        }}
      />
      <Tab.Screen 
        name='Setting' 
        component={Settings}
        options={{
          tabBarLabel: 'Settings',
          tabBarIcon: ({ color, size }) => (
            <AntDesign name='setting' size={30} color={color} />
          ),
        }}
      />
      <Tab.Screen 
        name='Users' 
        component={Users}
        options={{
          tabBarLabel: 'Users',
          tabBarIcon: ({ color, size }) => (
            <AntDesign name='user' size={30} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}

const Stack = createStackNavigator();

function StackDetailHome() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="DetailHome" component={DetailHome} />  
      <Stack.Screen name="AnotherDetailHome" component={AnotherDetailHome} />
    </Stack.Navigator>
  );
}

