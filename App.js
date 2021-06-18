
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

const Stack = createStackNavigator()

import UserList from './screeens/UserList';
import CreateUserScreen from './screeens/CreateUserScreen';
import UserDetailScreen from './screeens/UserDetailScreen';

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="UserList" component={UserList} options={{title: 'Lista de Clausulas Akeron' }}/>
      <Stack.Screen name="CreateUserScreen" component={CreateUserScreen} options={{title: 'Crear Solicitud de Clausula'}} />
      <Stack.Screen name="UserDetailScreen" component={UserDetailScreen} options={{title: 'Detalles de Clausula Akeron'}} />
    </Stack.Navigator>

  )
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack></MyStack>

    </NavigationContainer>
    
  );
}

