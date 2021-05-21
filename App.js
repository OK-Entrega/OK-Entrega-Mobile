import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
//navigations

import { NavigationContainer } from '@react-navigation/native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
//telas
import Login from './pages/login';
import Cadastro from './pages/cadastro';
import EsqueciSenha from './pages/esquecisenha';



const Tab = createBottomTabNavigator();


const Logout =()=>{
  
}


const Autenticado =()=>{
  return(
   
  <Tab.Navigator initialRouteName="Home">
    <Tab.Screen name="Logout" component={Logout} />
  </Tab.Navigator>
  )
}


export default function App() {
  return (
   
  <NavigationContainer>
    <Tab.Navigator screenOptions={{ headerShown : false }}>
        <Tab.Screen       name="Login" component={Login}  />
         <Tab.Screen      name="Cadastrar" component={Cadastro} />
         <Tab.Screen      name="EsqueciSenha" component={EsqueciSenha} />

    </Tab.Navigator>
  </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
