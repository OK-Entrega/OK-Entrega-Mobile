import React, { useState } from 'react';
import { View, Image, StyleSheet, Text, Header, TouchableOpacity } from 'react-native';
import Cabecalho from '../../components/cabecalho';
import { Ionicons } from '@expo/vector-icons';



const Perfil = () => {



    return (


        <View style={{ flex: 1 }}>

            <Cabecalho />

            <View style={{ width: '100%', height: '0.5%', backgroundColor: '#2ECC71' }}></View>

            <Text style={{ fontSize: 45, color: "black", justifyContent: 'center', textAlign: 'center', fontWeight: 'bold', paddingTop: 30 }}>Meu Perfil</Text>

            <View style={{ flex: 1, justifyContent: 'center' }} >

                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly', paddingBottom: 25 }}>
                    
                    <Text>USUARIO: {() => NomeUser()} </Text>
                </View>

                <View style={{ paddingLeft: 15, flexDirection: 'row' }}>
                    <TouchableOpacity>
                        <Ionicons name="phone-portrait-outline" color='#2DCC70' size={25} />
                    </TouchableOpacity>
                    <Text>Numero: </Text>
                    <Text>11947019825</Text>
                </View>

            </View>
        </View>
    );
}


const styles = StyleSheet.create({




    stretch: {
        width: 80,
        height: 80,

    },

    text: {
        fontFamily: "Bold"

    }
});


export default Perfil;