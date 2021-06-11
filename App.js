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
import Home from './pages/home';
import Perfil from './pages/perfil';
import ImagemCamera from './pages/entregas/entrega';
import DigitarCode from './pages/digitarcodbarra';
import DataeHora from './pages/dataehora';
import FotoCanhoto from './pages/fotocanhoto';
import FotoCanhoto2 from './pages/fotocanhoto2';
import FotoDosProdutos from './pages/fotodosprodutos';
import FotoDosProdutos2 from './pages/fotodosprodutos2';
import FotoDaEntrega from './pages/fotodaentrega';






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
            <Stack.Screen name="cadastro" component={Cadastro} />
            <Stack.Screen name="esquecisenha" component={EsqueciSenha} />
            <Stack.Screen name="perfil" component={Perfil} />
             <Stack.Screen name="home" component={Home} />
             <Stack.Screen name="entregas" component={ImagemCamera} />
             <Stack.Screen name="digitarcodbarra" component={DigitarCode} /> 
             <Stack.Screen name="dataehora" component={DataeHora} /> 
             <Stack.Screen name="fotocanhoto" component={FotoCanhoto} /> 
             <Stack.Screen name="fotocanhoto2" component={FotoCanhoto2} />
             <Stack.Screen name="fotodosprodutos" component={FotoDosProdutos}/>
             <Stack.Screen name="fotodosprodutos2" component={FotoDosProdutos2}/>
             <Stack.Screen name="fotodaentrega" component={FotoDaEntrega}/>

             


             

              




             

             
            
   
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
