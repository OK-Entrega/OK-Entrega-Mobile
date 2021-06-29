import React, { useState } from "react";
import { View, Image, StyleSheet, TouchableOpacity, StatusBar, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/FontAwesome5';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Cabecalho = ({ navigation }) => {

    const home = () => {
        navigation.navigate('home')
    }

    return (
        <>
            <View style={styles.nav}>
                <StatusBar barStyle="white" backgroundColor="#2ECC71" />
                <TouchableOpacity onPress={() => home()} >
                    <Icon name="home" color="white" size={25} />
                </TouchableOpacity >
                <TouchableOpacity onPress={() => home()}>
                    <Image
                        style={styles.logo}
                        source={require('../../assets/logo.png')}
                        onPress={() => home()}
                    />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {
                    Alert.alert(
                        "Sair do aplicativo",
                        "Tem certeza de que deseja sair do aplicativo?",
                        [
                            {
                                text: "Cancelar",
                                onPress: () => console.log(),
                                style: "cancel"
                            },
                            {
                                text: "Sim", onPress: () => {
                                    AsyncStorage.removeItem("jwt");
                                    navigation.navigate("login");
                                }
                            }
                        ]
                    );
                }}>
                    <Icon name="sign-out-alt" color="white" size={25} />
                </TouchableOpacity>
            </View>
            <View style={{ width: '100%', height: '0.5%', backgroundColor: '#2ECC71' }}></View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F7F7F7',
    },
    nav: {
        backgroundColor: '#031F3C',
        width: '100%',
        height: '10%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 14

    }, logo: {
        width: 50,
        height: 50
    }, titmodal: {
        fontFamily: 'Segoe UI',
        color: 'white',
        fontSize: 20
    }, containerStyle: {
        backgroundColor: '#031F3C',
        padding: 15,
        width: '45%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15,
    }
});

export default Cabecalho;