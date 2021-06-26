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
import FotoCanNota from './pages/canhotos/fotocannota';
import FotoCanNota2 from './pages/canhotos/fotocannota2';
import ConfirmarCanhoto from './pages/canhotos/confirmarcanhoto';
import CodigoBarras from './pages/devolucao/codigobarra';
import DigitarCodigo from './pages/devolucao/digitarcodigo';
import DataHoraDevolucao from './pages/devolucao/datahoradevolucao';
import FotoDosProdutoDev from './pages/devolucao/fotoprodutodev';
import FotoDosProdutosDev2 from './pages/devolucao/fotoprodutodev2';
import DescricaoProblema from './pages/devolucao/descricaoproblema';
import DescricaoProblema2 from './pages/devolucao/descricaoproblema2';
import MotivoDevolucao from './pages/devolucao/motivodevolucao';
import ConfirmaDevolucao from './pages/devolucao/confirmadevolucao';
import CodigoBarraOcorrencia from './pages/ocorrencia/codigobarraocorrencia';
import DigiteCodigoOcorrencia from './pages/ocorrencia/digitecodigoocorrencia';
import DataHoraOcorrencia from './pages/ocorrencia/datahoraocorrencia';
import FotoOcorrencia from './pages/ocorrencia/fotoocorrencia';
import FotoOcorrencia2 from './pages/ocorrencia/fotoocorrencia2';
import MotivoOcorrencia from './pages/ocorrencia/motivoocorrencia';
import OcorrenciaConfirmacao from './pages/ocorrencia/ocorrenciaconfirmacao';







//declaracoes
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();


const Logout = () => {

}


const Autenticado = () => {
    return (

        <Tab.Navigator initialRouteName="Home">
            <Tab.Screen  name="home" component={Home} />
            <Tab.Screen name="Logout" component={Logout} />
        </Tab.Navigator>
    )
}


export default function App() {
    return (

        <NavigationContainer>
            
            <Stack.Navigator screenOptions={{ headerShown: false }}>

            
            
            <Stack.Screen name="home" component={Home} /> 
            
           <Stack.Screen name="canhoto" component={Canhoto} />   
           <Stack.Screen name="fotocannota" component={FotoCanNota} />
           <Stack.Screen name="fotocannota2" component={FotoCanNota2} />
           <Stack.Screen name="confirmarcanhoto" component={ConfirmarCanhoto} />  


	        <Stack.Screen name="codigobarra" component={CodigoBarras} />   
            <Stack.Screen name="digitarcodigo" component={DigitarCodigo} />
            <Stack.Screen name="datahoradevolucao" component={DataHoraDevolucao} />
            <Stack.Screen name="fotoprodutodev" component={FotoDosProdutoDev} />
            <Stack.Screen name="fotoprodutodev2" component={FotoDosProdutosDev2}/>
            <Stack.Screen name="descricaoprblema" component={DescricaoProblema}/> 
            <Stack.Screen name="descricaoprblema2" component={DescricaoProblema2}/> 
            <Stack.Screen name="motivodevolucao" component={MotivoDevolucao} />
            <Stack.Screen name="confirmadevolucao" component={ConfirmaDevolucao} />
            
            
             <Stack.Screen name="codigobarraocorrencia" component={CodigoBarraOcorrencia} />   
             <Stack.Screen name="datahoraocorrencia" component={DataHoraOcorrencia} />
             <Stack.Screen name="digitecodigoocorrencia" component={DigiteCodigoOcorrencia} />
             <Stack.Screen name="fotoocorrencia" component={FotoOcorrencia} />
             <Stack.Screen name="fotoocorrencia2" component={FotoOcorrencia2}/>
             <Stack.Screen name="motivoocorrencia" component={MotivoOcorrencia}/> 
             <Stack.Screen name="ocorrenciaconfirmacao" component={OcorrenciaConfirmacao}/> 


             <Stack.Screen name="confirma" component={Confirma} />   
             <Stack.Screen name="dataehora" component={DataeHora} />
             <Stack.Screen name="digitarcodbarra" component={DigitarCode} />
             <Stack.Screen name="entregas" component={ImagemCamera} />
             <Stack.Screen name="fotocanhoto" component={FotoCanhoto}/>
             <Stack.Screen name="fotocanhoto2" component={FotoCanhoto2}/> 
             <Stack.Screen name="fotodaentrega" component={FotoDaEntrega}/> 
             <Stack.Screen name="fotodosprodutos2" component={FotoDosProdutos2}/> 
             <Stack.Screen name="fotodosprodutos" component={FotoDosProdutos}/> 

             




             
             
               
         
           

            
          


           
            
             
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
