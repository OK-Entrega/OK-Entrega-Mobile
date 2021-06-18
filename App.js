import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

//navigations
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

//telas
import Login from './pages/cadastrar/login';
import Cadastro from './pages/cadastrar/cadastro';
import EsqueciSenha from './pages/cadastrar/esquecisenha';
import Home from './pages/home';
import Perfil from './pages/perfil';
import ImagemCamera from './pages/entrega/entregas/entrega';
import DigitarCode from './pages/entrega/digitarcodbarra';
import DataeHora from './pages/entrega/dataehora';
import FotoCanhoto from './pages/entrega/fotocanhoto';
import FotoCanhoto2 from './pages/entrega/fotocanhoto2';
import FotoDosProdutos from './pages/entrega/fotodosprodutos';
import FotoDosProdutos2 from './pages/entrega/fotodosprodutos2';
import FotoDaEntrega from './pages/entrega/fotodaentrega';
import Historico from './pages/historico';
import Canhoto from './pages/canhotos/canhoto';
import Confirma from './pages/entrega/confirma';







//declaracoes
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const Logout = () => {

}


const Autenticado = () => {
    return (

        <Tab.Navigator initialRouteName="Home">
            <Tab.Screen name="home" component={Home} />
            <Tab.Screen name="Logout" component={Logout} />
        </Tab.Navigator>
    )
}


export default function App() {
    return (

        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
               
           
             <Stack.Screen name="login" component={Login} />
             <Stack.Screen name="esquecisenha" component={EsqueciSenha} />
             <Stack.Screen name="cadastro" component={Cadastro} />
             
   
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
