import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Camera } from 'expo-camera';
import {Ionicons} from '@expo/vector-icons'
import { TextInput } from 'react-native-gesture-handler';

const DigitarCodigo = ({navigation}) =>{

    const CodigoBarras =()=>{
        navigation.navigate('codigobarra')
    }

    const Home =()=>{
        navigation.navigate('home')
    }

    const DataeHora =()=>{
        navigation.navigate('dataehora')
    }

  return (

      <View style={{ flex: 1}}> 
           <View style={styles.nav}>

        <TouchableOpacity
        onPress={() => navigation.goBack()}
        >
                <Ionicons
                 name="chevron-back-outline" color='white' size={25}
                />
        </TouchableOpacity>

        <Text style={{color: 'white',fontWeight: 'bold', fontFamily: 'Segoe UI'}}> Digite o código de barras</Text>

    <TouchableOpacity
    onPress={() => Home()}

    >
        <Image
                        
                style={styles.logo}
                source={require('../../../assets/logo.png')}
        />
     </TouchableOpacity>

        </View>

       

   
    <View style={{width: '100%', height: '0.5%', backgroundColor: '#2ECC71'}}></View>

    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}> 

    <Text style={{fontSize: 25, color: 'black', padding: 10, fontWeight: 'bold', fontFamily: 'Segoe UI'}}>
        Codigo de barras
    </Text>

    <TextInput
    style={{width: '85%', height: '25%', borderRadius: 4,borderWidth: 2.5, borderColor: '#C4C4C4'}}
    />

    <View style={{ width: '100%', height: '40%', alignItems: 'center', justifyContent: 'space-around'}}>
    <TouchableOpacity
    onPress={() => DataeHora()}
     style={{width: '55%', height: '15%', backgroundColor: '#2ECC71', borderRadius: 8, alignItems: 'center', justifyContent: 'center',}}>
        <Text style={{fontWeight: 'bold', fontFamily: 'Segoe UI', color: 'white'}}>Prosseguir</Text>
    </TouchableOpacity>

    <TouchableOpacity
     onPress={() => ImagemCamera() }
     style={{width: '55%', height: '15%', backgroundColor: '#3071D3', borderRadius: 8, alignItems: 'center', justifyContent: 'center',}}>
        <Text style={{fontWeight: 'bold', fontFamily: 'Segoe UI', color: 'white'}}>Escanear código</Text>
    </TouchableOpacity>

    <TouchableOpacity
    onPress={() => Home() }
    style={{width: '55%', height: '15%', backgroundColor: '#E92525', borderRadius: 8, alignItems: 'center', justifyContent: 'center',}}>
        <Text style={{fontWeight: 'bold', fontFamily: 'Segoe UI', color: 'white'}}>Cancelar</Text>
    </TouchableOpacity>
    </View>

    </View>

    </View>
  );

  

}



const styles = StyleSheet.create({
    
    nav: {
        backgroundColor: '#031F3C',
        width: '100%',
        height: '13%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 14
        
    },  logo : {
        width: 35,
        height: 35 
     }
});

export default DigitarCodigo;