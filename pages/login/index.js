import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image} from 'react-native';
import Cadastro from '../cadastro';

import {Ionicons} from '@expo/vector-icons'

// Storage



const Login = ({navigation}) => {

    const [telefone, setTelefone] = useState('');
    const [senha, setSenha] = useState('');

    const salvarToken = async (value) => {
        try {
          await AsyncStorage.setItem('@jwt', value)
        } catch (e) {
          // saving error
        }
    }

    const Logar =()=>{
        alert('CELULAR: ' + telefone + '   SENHA: '  + senha)
        const corpo ={
            telefone, telefone,
            senha, senha
        }
        fetch('http://192.168.0.18:500/conta/entrar',{
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
                 alert('Login efetuado com sucesso!')
                 salvarToken(data.token)
                 navigation.push('Autenticado')
             }else{
                 alert('Dados incorretos')
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
                onChangeText={text => setTelefone(text)}
                value={telefone}
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
            onChangeText={text => setSenha(text)}
            value={senha}
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