import React, { useState, useEffect, useRef } from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Image, } from 'react-native';
import {Ionicons} from '@expo/vector-icons'



const OcorrenciaConfirmacao = ({navigation}) =>{
  
    const Home =()=>{
        navigation.navigate('home')
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

        <Text style={{color: 'white',fontWeight: 'bold', fontFamily: 'Segoe UI'}}> Confirmação</Text>

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

    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
     

     <Text style={{fontSize: '50%' ,fontFamily: 'Segoe UI', textAlign: 'center'}}>
     Ocorrência confirmada com sucesso!
     </Text>

    </View>
    <View style={{width: '100%', height: '0.5%', backgroundColor: '#2ECC71'}}></View>

    <View style={{width: '100%', height: '20%', backgroundColor: '#031F3C', alignItems: 'flex-end', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center'}}>

    

    <TouchableOpacity  
    onPress={()=> Home()}
    style={{width: '70%', height: '35%', backgroundColor: '#2ECC71', borderRadius: 8,  alignItems: 'center', justifyContent: 'center'} } >
    
        <Text style={{fontWeight: 'bold', fontFamily: 'Segoe UI', color: 'white'}}>Voltar para a tela inicial</Text>
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
     }
});

export default OcorrenciaConfirmacao;