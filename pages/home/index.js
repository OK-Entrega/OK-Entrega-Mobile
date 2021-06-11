import React, { useState } from "react";
import {  View, Image, Text, StyleSheet, TouchableOpacity, Alert, Modal, Pressable, } from 'react-native';

import {Ionicons} from '@expo/vector-icons'
import Cabecalho from "../../components/cabecalho";



const Home =({navigation})=>{

    const ImagemCamera =()=>{
        navigation.navigate('entregas')
    }
    
    return(

   <View style={styles.container}>
            
    <Cabecalho/>

     {/* linha verde do cabecalho*/}
     <View style={{width: '100%', height: '0.5%', backgroundColor: '#2ECC71'}}></View>

        {/* view para determinar o comportamento dos botoes */}
       <View style={{ flex: 1, backgroundColor: '#F7F7F7',
      alignItems: 'center', justifyContent: 'space-evenly'}}>

          {/* Começo dos botoes */}
        <TouchableOpacity onPress={() => ImagemCamera()}
         style={[styles.botaoo, {backgroundColor: "#2ECC71"}]}>
            <Text style={styles.texttouch}>Entrega</Text>
            <Ionicons
               name="checkbox-outline" color='white' size={25}
            />
        </TouchableOpacity>


        <TouchableOpacity style={[styles.botaoo, {backgroundColor: "#3071D3"}]}>
            <Text style={styles.texttouch}>Canhoto</Text>
            <Ionicons
             name="document-text-outline" color='white' size={25}
            />
        </TouchableOpacity>


        <TouchableOpacity
        style={[styles.botaoo, {backgroundColor: '#F29035'}]} >
            <Text style={styles.texttouch}>Ocorrência</Text>
            <Ionicons
                name="at-outline"  color='white' size={25}
            />
        </TouchableOpacity>


        <TouchableOpacity
        style={[styles.botaoo, {backgroundColor: '#E92525'}]}>
            <Text style={styles.texttouch}>Devolução</Text>
            <Ionicons
             name="close-circle-outline"  color='white' size={25}
            />
        </TouchableOpacity>


        <TouchableOpacity
        style={[styles.botaoo, {backgroundColor: '#000000'}]}>
            <Text style={styles.texttouch}>Historico</Text>
            <Ionicons
             name="reload-outline" color='white' size={25}
            />
        </TouchableOpacity>
        {/* fim dos botoes */}

        </View>

        </View>
       
        
    )

}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F7F7F7',

    },
    buttonText : {
        color : 'white',
        fontSize: 25,           
   
    },
     logo : {
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
        justifyContent:'space-between' , 
        padding: 14,
        
    }, texttouch:{
        fontSize: 25, 
        color: 'white', 
        fontWeight: 'bold', 
        fontFamily: 'Segoe UI'
    }

      
});

export default Home; 

