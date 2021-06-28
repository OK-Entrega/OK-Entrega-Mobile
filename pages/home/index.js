import React, { useState, useEffect } from "react";
import { View, StyleSheet, TouchableOpacity, } from 'react-native';

import { Ionicons } from '@expo/vector-icons'
import Cabecalho from "../../components/cabecalho";
import Historico from "../historico";

import { Modal, Portal, Text, Button, Provider } from 'react-native-paper';

import * as ScreenOrientation from 'expo-screen-orientation';

const Home = ({ navigation }) => {


    const ImagemCamera = () => {
        navigation.navigate('entregas')
    }

    const CodigoBarras = () => {
        navigation.navigate('codigobarra')
    }

    const CodigoBarraOcorrencia = () => {
        navigation.navigate('codigobarraocorrencia')
    }

    return (

        <View style={styles.container}>

            <Cabecalho navigation={navigation} />


            {/* view para determinar o comportamento dos botoes */}
            <View style={{
                flex: 1, backgroundColor: '#F7F7F7',
                alignItems: 'center', justifyContent: "center"
            }}>

                {/* Começo dos botoes */}
                <TouchableOpacity onPress={() => ImagemCamera()}
                    style={[styles.botaoo, { backgroundColor: "#2ECC71", marginBottom: 30 }]}>
                    <Text style={styles.texttouch}>Entrega</Text>
                    <Ionicons
                        name="checkbox-outline" color='white' size={25}
                    />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => CodigoBarraOcorrencia()}
                    style={[styles.botaoo, { backgroundColor: '#FEA520', marginBottom: 30 }]} >
                    <Text style={styles.texttouch}>Ocorrência</Text>
                    <Ionicons
                        name="at-outline" color='white' size={25}
                    />
                </TouchableOpacity>


                <TouchableOpacity onPress={() => CodigoBarras()}
                    style={[styles.botaoo, { backgroundColor: '#E92525' }]}>
                    <Text style={styles.texttouch}>Devolução</Text>
                    <Ionicons
                        name="close-circle-outline" color='white' size={25}
                    />
                </TouchableOpacity>

            </View>

        </View>


    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F7F7F7',
    },
    buttonText: {
        color: 'white',
        fontSize: 25,

    },
    logo: {
        width: 50,
        height: 50
    }, containerBorders: {
        flexDirection: "row"
    }, botaoo: {
        width: '85%',
        height: '8%',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: "bold",
        fontFamily: 'Segoe UI',
        color: 'white',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 14,

    }, texttouch: {
        fontSize: 25,
        color: 'white',
        fontWeight: 'bold',
        fontFamily: 'Segoe UI'
    }


});

export default Home;

