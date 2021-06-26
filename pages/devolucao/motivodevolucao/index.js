import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Image, Button } from 'react-native';
import {Ionicons} from '@expo/vector-icons'
import DateTimePicker from '@react-native-community/datetimepicker';
import { TextInput } from 'react-native-paper';

const MotivoDevolucao = ({navigation}) =>{
    //faça a coneccao aqui

    const ImagemCamera =()=>{
        navigation.navigate('entregas')
    }

    const Home =()=>{
        navigation.navigate('home')
    }

    const FotoCanhoto =()=>{
      navigation.navigate('fotocanhoto')
  }

  return (
     <View style={{flex: 1, backgroundColor: 'white', }}> 
            
           <View style={styles.nav}>

        <TouchableOpacity onPress={() => navigation.goBack()}>
                <Ionicons
                 name="chevron-back-outline" color='white' size={25}
                />
        </TouchableOpacity>

        <Text style={styles.textodbutton}> Motivo da devolução</Text>

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


      <View style={{justifyContent: 'center', alignItems: 'center'}}>

    <Text style={{fontWeight: 'bold', 
                  fontFamily: 'Segoe UI', 
                  color: 'black',
                  fontSize: 30,
                  padding: 20}}>
    Motivo da devolução 
    </Text>
      

      <TextInput
                style={{width: '80%'}}
                mode ="outlined"
                underlineColor= '#2ECC71'
                label="Digite seu numero de telefone"
                right={<TextInput.Affix text="/100" />}
                outlineColor = '#2ECC71'
         />
            
           
            
      </View>
      
     
      <View style={{height: '35%', width: '100%', alignItems: 'center', justifyContent: 'space-evenly'}}> 
        
        <TouchableOpacity
        onPress={() => FotoCanhoto()}
        style={{width: '55%', height: '15%', backgroundColor: '#2ECC71', borderRadius: 8, alignItems: 'center', justifyContent: 'center',}}>
        <Text style={styles.textodbutton}>Confirmar</Text>
    </TouchableOpacity>

    
    <TouchableOpacity
    onPress={() => Home()}
    style={{width: '55%', height: '15%', backgroundColor: '#E92525', borderRadius: 8, alignItems: 'center', justifyContent: 'center',}}>
        <Text style={styles.textodbutton}>Cancelar</Text>
    </TouchableOpacity>
       

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
     },
     textodbutton : {
      fontWeight: 'bold', 
      fontFamily: 'Segoe UI', 
      color: 'white'

     }, 
     touchopa: {
      width: '30%', 
      height: '55%', 
      backgroundColor: 'white', 
      borderRadius: 8,  
      justifyContent: 'center', 
      alignItems: 'center'
     }
});

export default MotivoDevolucao;