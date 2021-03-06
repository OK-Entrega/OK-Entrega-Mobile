import React, {useState} from 'react';
import { StyleSheet, Text, View,  TouchableOpacity, Image} from 'react-native';
import Cadastro from '../cadastro';

import {Ionicons} from '@expo/vector-icons'
import Login from '../login';

import { TextInput } from 'react-native-paper';

const EsqueciSenha =({navigation})=>{
    const [esquecisenha, setEsqueciSenha] = useState('');

    const RecuperarSenha =()=>{
        alert('um SMS será enviado em breve para o numero ' + esquecisenha)
        const corpo ={
            esquecisenha, esquecisenha
            

        }
        fetch('http://192.168.0.18:500/conta/cadastrar-se',{
            method : 'POST',
            headers : {
                'Content-Type' : 'application/json'
            },

            body : JSON.stringify(corpo)
         })
         .then(response => response.json())
         .then(data => {
             console.log(data);
             if(data.status != 404){
                 alert('Um SMS sera enviado em breve')
                 navigation.push('Autenticado')
             }else{
                 alert('Dados incorretos')
             }
         })
        
    }
    const Login =()=>{
        navigation.navigate('login')
    }

    return(
        
        <View style={styles.container}>
        
        <Image
            style={styles.logo}
            source={require('../../../assets/logo.png')}
        />
         
        <View>
            <Text style={{fontSize: 45, color: 'black', padding: 30, fontWeight: 'bold', fontFamily: 'Segoe UI'}}>
            Esqueci minha senha
            </Text>
        </View>

        <TextInput
                style={{width: '90%'}}
                mode ="outlined"
                label="Número de celular"
                outlineColor = '#2ECC71'
                selectionColor = '#2ECC71'
                borderColor = '#2ECC71'
                color = '#2ECC71'
                onChangeText={text => setEsqueciSenha(text)}
                value={esquecisenha}
                

         />

        
        <Text style={{width: '90%', padding: 6, color: 'grey'}}>
        Um SMS com mais instruções será enviado para o seu número.
        </Text>

        <TouchableOpacity
                style={styles.button}
                onPress={RecuperarSenha}
            >
            <Text style={styles.buttonText}>Solicitar nova senha</Text>
            </TouchableOpacity>

            <Text style={{marginTop: 13, width: '90%' }}
            
            onPress={() => Login()}
            >
                Lembrou a senha?
            <Text style={styles.innerText}> Entrar</Text>
                
            </Text>

            
        </View>

        

        
        

        

    )
    

    }
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: '#F7F7F7',
            alignItems: 'center',
            paddingTop: '22%'
        },
        input : {
            width: '90%',
            height: 50, 
            borderColor: '#2ECC71', 
            borderWidth: 1,
            borderRadius: 6,
            padding: 10,
            marginTop: 10,
            color: 'black',
            flexDirection: 'row',
            justifyContent: 'space-between'
            
        },
        button : {
          backgroundColor : '#2ECC71',
          padding: 10,
          borderRadius: 6,
          width: '90%',
          height: 45,
          marginTop: 10,
          alignItems: 'center',
          justifyContent: 'center',
          fontWeight: 'bold'
        },
        buttonText : {
            color : 'white',
            fontSize: 25,           
       
        }, logo : {
            width: 90,
            height: 80
        }, inputinterno: {
            width: '90%'
        }, innerText : {
            color: "#71A8E8",
     }
        
    });

   

    export default EsqueciSenha;

