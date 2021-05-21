import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image} from 'react-native';
import Cadastro from '../cadastro';

import {Ionicons} from '@expo/vector-icons'


import { url_api } from "../../utils/constants";
import {save_token} from "../../utils/save-token";
import Toast from 'react-native-toast-message';

const Login = ({navigation}) => {

    
    const [cellphoneNumber, setCellphoneNumber] = useState('');
    const [password, setPassword] = useState('');

    const Logar =()=>{
        const body ={
            cellphoneNumber: cellphoneNumber,
            password: password,
        }
        fetch(`${url_api}/users/signin/deliverer`,{
            method : 'POST',
            headers : {
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify(body)
         })
         .then(response => response.json())
         .then(data => {
            if (data.sucesso) {
                Toast.show({
                    text1: data.mensagem,
                    text2: "",
                    type: "success"
                });
                save_token(data.dados)
                navigation.push('Autenticado')
            } else {
                Toast.show({
                    text1: data.mensagem,
                    text2: "",
                    type: "error"
                });
            }
         })
     }
    


   const Cadastro =()=>{
       navigation.navigate('Cadastrar')
   }

   const EsqueciSenha =()=>{
    navigation.navigate('EsqueciSenha')
}

    return(
        <View style={styles.container}>
<Toast ref={(ref) => Toast.setRef(ref)} />
            
        <Image
            style={styles.logo}
            source={require('../../assets/logo.jpeg')}
        />
         
        <View>
            <Text style={{fontSize: 45, color: 'black', padding: 30, fontWeight: 'bold', fontFamily: 'Segoe UI'}}>
                Entrar
            </Text>
        </View>

        <View style={styles.input}>
        <TextInput
                style={styles.inputinterno}
                onChangeText={text => setCellphoneNumber(text)}
                value={cellphoneNumber}
                placeholder="Digite seu numero de telefone"
                placeholderTextColor ="black"

         />
         <TouchableOpacity>
                <Ionicons
                name="phone-portrait-outline"  color='green' size={25}
                />
         </TouchableOpacity>

        </View>   

        <View style={styles.input}>
            <TextInput
            style={styles.inputinterno}
            onChangeText={text => setPassword(text)}
            value={password}
            secureTextEntry={true}
            placeholder="Digite sua senha"
            placeholderTextColor ="black"
            />
         <TouchableOpacity>
                <Ionicons
                name='lock-closed-outline' color='green' size={25}
                />
         </TouchableOpacity>

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
      justifyContent: 'center',
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
    },
    innerText : {
        color: "#71A8E8",
    }, esqueci : {
        color: "#71A8E8", 
        margin: 10,
        width: '90%'
    }, logo : {
        width: 160,
        height: 150
    }, inputinterno: {
        width: '90%'
    },

    
});

export default Login;