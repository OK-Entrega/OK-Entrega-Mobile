import React, { useState } from 'react';
import { StyleSheet, CheckBox, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import Login from '../login';
// Storage
//icons
import { Ionicons } from '@expo/vector-icons'
import { url_api } from "../../utils/constants";
import {save_token} from "../../utils/save-token";
import Toast from 'react-native-toast-message';


const Cadastro = ({ navigation }) => {

    const [cellphoneNumber, setCellphoneNumber] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [mesmasenha, setMesmaSenha] = useState('');
    const [isSelected, setSelection] = useState('');


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
                source={require('../../assets/logo.png')}
            />


            <View>
                <Text style={{ fontSize: 45, color: 'black', padding: 30, fontWeight: 'bold', fontFamily: 'Segoe UI' }}>
                    Cadastro
                    </Text>
            </View>


            <View style={styles.input}>
                <TextInput
                    style={styles.inputinterno}
                    onChangeText={text => setName(text)}
                    value={name}
                    placeholder="Digite seu nome"
                    placeholderTextColor="black"
                />
                <TouchableOpacity>
                    <Ionicons
                        name="person-outline" color='green' size={25}
                    />
                </TouchableOpacity>
            </View>

            <View style={styles.input}>
                <TextInput
                    style={styles.inputinterno}
                    onChangeText={text => setCellphoneNumber(text)}
                    value={cellphoneNumber}
                    placeholder="Digite seu numero de telefone"
                    placeholderTextColor="black"
                />
                <TouchableOpacity>
                    <Ionicons
                        name="phone-portrait-outline" color='green' size={25}
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
                    placeholderTextColor="black"
                />
                <TouchableOpacity>
                    <Ionicons
                        name="lock-closed-outline" color='green' size={25}
                    />
                </TouchableOpacity>
            </View>

            <View style={styles.input}>
                <TextInput
                    style={styles.inputinternoo}
                    onChangeText={text => setMesmaSenha(text)}
                    value={mesmasenha}
                    secureTextEntry={true}
                    placeholder="Confirme sua senha"
                    placeholderTextColor="black"

                />
                <TouchableOpacity style={{ flexDirection: 'row' }}>
                    <Ionicons
                        name="checkmark-outline" color='green' size={25}
                    />

                    <Ionicons
                        name="lock-closed-outline" color='green' size={25}
                    />
                </TouchableOpacity>
            </View>

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
        width: 160,
        height: 150,
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