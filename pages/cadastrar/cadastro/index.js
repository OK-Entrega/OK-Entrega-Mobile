import React, { useState } from 'react';
import { StyleSheet, CheckBox, Text, View, TouchableOpacity, Image } from 'react-native';
import Login from '../login';
// Storage
//icons
import { Ionicons } from '@expo/vector-icons'
import { url_api } from "../../../utils/constants";
import { save_token } from "../../../utils/save-token";
import Toast from 'react-native-toast-message';

import { TextInput } from 'react-native-paper';


const Cadastro = ({ navigation }) => {

    const [cellphoneNumber, setCellphoneNumber] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');



    const Cadastrar = () => {

        const corpo = {
            name: name,
            cellphoneNumber: cellphoneNumber,
            password: password,
            mesmasenha: mesmasenha

        }
        fetch(`${url_api}/account/signup`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(corpo)
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
                        navigation.push('login')
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

    const Login = () => {
        navigation.navigate('login')
    }


    return (
        <View style={styles.container}>
            <Toast ref={(ref) => Toast.setRef(ref)} />


            <Image
                style={styles.logo}
                source={require('../../../assets/logo.png')}
            />


            <View>
                <Text style={{ fontSize: 45, color: 'black', padding: 30, fontWeight: 'bold', fontFamily: 'Segoe UI' }}>
                    Cadastro
                </Text>
            </View>




            <TextInput
                style={{ width: '90%' }}
                mode="outlined"
                label="Nome"
                onChangeText={text => setName(text)}
                value={name}


            />

            <TextInput
                style={{ width: '90%' }}
                mode="outlined"
                label="Número de celular"
                onChangeText={text => setCellphoneNumber(text)}
                value={cellphoneNumber}
                keyboardType="numeric"

            />

            <TextInput
                style={{ width: '90%' }}
                mode="outlined"
                label="Senha"
                onChangeText={text => setPassword(text)}
                value={password}
                secureTextEntry={true}
                value={password}


            />



            <TouchableOpacity
                style={styles.button}
                onPress={Cadastrar}
            >
                <Text style={styles.buttonText}>Cadastrar</Text>
            </TouchableOpacity>

            <Text style={{ margin: 8, width: '90%' }}

                onPress={() => Login()}
            >
                Já tem uma conta?
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
    input: {
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
    button: {
        backgroundColor: '#2ECC71',
        padding: 10,
        borderRadius: 6,
        width: '90%',
        height: 45,
        marginTop: 10,
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: 'bold'
    },
    buttonText: {
        color: 'white',
        fontSize: 25,
    }, logo: {
        width: 90,
        height: 80,
        zIndex: -100
    }, checkboxContainer: {
        flexDirection: "row",
        marginBottom: 20,

    },

    innerText: {
        color: "#71A8E8",
    }, inputinterno: {
        width: '90%'
    }, inputinternoo: {
        width: '78%'
    }

});

export default Cadastro;