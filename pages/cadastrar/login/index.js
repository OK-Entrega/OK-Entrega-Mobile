import React, {useState} from 'react';
import { StyleSheet, Text, View,  TouchableOpacity, Image, Button} from 'react-native';
import Cadastro from '../cadastro';
import {Ionicons} from '@expo/vector-icons';
import { url_api } from "../../../utils/constants";
import {save_token} from "../../../utils/save-token";
import Toast from 'react-native-toast-message';

import { TextInput } from 'react-native-paper';
import { color } from 'react-native-reanimated';
const Login = ({navigation}) => {

    
    const [cellphoneNumber, setCellphoneNumber] = useState('');
    const [password, setPassword] = useState('');

    const Logar =()=>{

        const body ={
            cellphoneNumber: cellphoneNumber,
            password: password,
        }
        fetch(`${url_api}/account/signin`,{
            method : 'POST',
            headers : {
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify(body)
         })
         .then(response => response.json())
         .then(data => {
             console.log(data)
            if (data.success) {
                Toast.show({
                    text1: data.message,
                    text2: "",
                    type: "success"
                });
                save_token(data.data)
                setTimeout(() => {
                    navigation.push('home')
                }, 1000)
            } else {
                Toast.show({
                    text1: data.message,
                    text2: "",
                    type: "error"
                });
            }
         })
     }
    
     

   const Cadastro =()=>{
       navigation.navigate('cadastro')
   }

   const EsqueciSenha =()=>{
    navigation.navigate('esquecisenha')
}

    return(
        <View style={styles.container}>
        <Toast ref={(ref) => Toast.setRef(ref)} />
            
        <Image
            style={styles.logo}
            source={require('../../../assets/logo.png')}
        />
         
        <View>
            <Text style={{fontSize: 45, color: 'black', padding: 30, fontWeight: 'bold', fontFamily: 'Segoe UI'}}>
                Entrar
            </Text>
        </View>
  
        
        <View style={{width: '90%', height: '16%' , justifyContent: 'space-around'}}>

        
    
      
        <TextInput
                
                mode ="outlined"
                underlineColor= '#2ECC71'
                label="Digite seu numero de telefone"
                right={<TextInput.Affix text="/100" />}
                outlineColor = '#2ECC71'
                onChangeText={text => setCellphoneNumber(text)}
                value={cellphoneNumber}
                

         />

  

    
        
            <TextInput 
            onChangeText={text => setPassword(text)}
            value={password}
            secureTextEntry={true}
            mode="outlined"
            label="Digite sua senha"
            outlineColor = '#2ECC71'
            right={<TextInput.Affix text="/100" />}
            
            />
                  
 
        </View>

            <Text
            style={styles.esqueci}
            onPress={() => EsqueciSenha()}
            >
            Esqueci minha senha
                
            </Text>


            <TouchableOpacity
                style={styles.button}
                onPress={Logar}
            >
            <Text style={styles.buttonText}>Entrar</Text>
            </TouchableOpacity>

            <Text style={{marginTop: 13, width: '90%' }}
            
            onPress={() => Cadastro()}
            >
                Não tem uma conta?
            <Text style={styles.innerText}> Cadastre-se</Text>
                
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
   
    }, esqueci : {
        color: "#71A8E8", 
        margin: 10,
        width: '90%',
        paddingTop: 12
    }, logo : {
        width: 160,
        height: 150,
        zIndex: -100
    }, inputinterno: {
        width: '90%'
    },innerText: {
        color: "#71A8E8",
     }

    
});

export default Login;