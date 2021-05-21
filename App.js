import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
//navigations

import { NavigationContainer } from '@react-navigation/native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
//telas
import Login from './pages/login';
import Cadastro from './pages/cadastro';
import EsqueciSenha from './pages/esquecisenha';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const Logout = () => {

}


const Autenticado = () => {
    return (

        <Tab.Navigator initialRouteName="Home">
            <Tab.Screen name="Logout" component={Logout} />
        </Tab.Navigator>
    )
}


export default function App() {
    return (

        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Cadastrar" component={Cadastro} />
                <Stack.Screen name="EsqueciSenha" component={EsqueciSenha} />
            </Stack.Navigator>
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
