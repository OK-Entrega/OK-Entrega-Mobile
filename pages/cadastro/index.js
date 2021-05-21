import React, {useState} from 'react';
import { StyleSheet, CheckBox, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import Login from '../login';
// Storage
//icons
import {Ionicons} from '@expo/vector-icons'
import { color } from 'react-native-reanimated';


const Cadastro = ({navigation}) => {

    const [celular, setCelular] = useState('');
    const [senha, setSenha] = useState('');
    const [nome, setNome] = useState('');
    const [mesmasenha, setMesmaSenha] = useState('');
    const [isSelected, setSelection] = useState('');


    const Cadastrar =()=>{

        alert('seu nome é ' + nome + 'seu Celular é ' + celular + 'sua senha é ' + senha)

        const corpo ={
            nome, nome,
            celular, celular,
            senha, senha,
            mesmasenha, mesmasenha

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
                 alert('Login efetuado com sucesso!')
                 navigation.push('Autenticado')
             }else{
                 alert('Dados incorretos')
             }
         })
     

        
    }

    const Login =()=>{
        navigation.navigate('Login')
    }


    return(
        <View style={styles.container}>

        <Image
            style={styles.logo}
            source={require('../../assets/logo.jpeg')}
        />

          
                <View>
                    <Text style={{fontSize: 45, color: 'black', padding: 30, fontWeight: 'bold', fontFamily: 'Segoe UI'}}>
                        Cadastro
                    </Text>
                 </View>

            
        <View style={styles.input}>
        <TextInput
                style={styles.inputinterno}
                onChangeText={text => setNome(text)}
                value={nome}
                placeholder="Digite seu nome"
                placeholderTextColor ="black"
         />
         <TouchableOpacity>
                <Ionicons
                name="person-outline"  color='green' size={25}
                />
         </TouchableOpacity>
        </View>

        <View style={styles.input}>
        <TextInput
                style={styles.inputinterno}
                onChangeText={text => setTelefone(text)}
                value={senha}
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
                name="lock-closed-outline"  color='green' size={25}
                />
         </TouchableOpacity>
        </View>

        <View style={styles.input}>
        <TextInput
                style={styles.inputinternoo}
                onChangeText={text => setMesmaSenha(text)}
                value={mesmasenha}
                secureTextEntry={true}
                placeholder="confirme sua senha"
                placeholderTextColor ="black"

         />
         <TouchableOpacity style={{flexDirection: 'row'}}>
                <Ionicons
                name="checkmark-outline"  color='green' size={25}
                />

                <Ionicons
                name="lock-closed-outline"  color='green' size={25}
                />
         </TouchableOpacity>
        </View>


      <View style={styles.checkboxContainer}>
        <CheckBox
          value={isSelected}
          onValueChange={setSelection}
          style={styles.checkbox}
        />
        <Text style={styles.label}>Li e aceito os termos de uso {isSelected ? "👍" : "👎"}</Text>
      </View>
      
    

            <TouchableOpacity
                style={styles.button}
                onPress={Cadastrar}
            >
                <Text style={styles.buttonText}>Cadastrar</Text>
            </TouchableOpacity>

            <Text style={{margin: 8, width: '90%' }}
            
            onPress={() => Login()}
            >
                Já tem uma conta?
            <Text style={styles.innerText}> Logar-se</Text>
                
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
    },  logo : {
        width: 160,
        height: 150
    }, checkboxContainer: {
        flexDirection: "row",
        marginBottom: 20,
        
      },
      checkbox: {
        alignSelf: "center",
        height: 13,
        width: 13,
        
      },
      label: {
        margin: 10,
        width: '80%'
        
      },
      innerText : {
        color: "#71A8E8",       
     }, inputinterno: {
        width: '90%'
    }, inputinternoo: {
        width: '78%'
    }
    
});

export default Cadastro;