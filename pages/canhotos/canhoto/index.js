import React, { useState } from "react";
import {  View, Text,  StyleSheet, FlatList, SafeAreaView, TouchableOpacity } from 'react-native';

import {Ionicons} from '@expo/vector-icons'
import Cabecalho from "../../../components/cabecalho";


const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'Carrefour',
    },
   
   
    
  ];
  
  

  


const Canhoto =({navigation})=>{  

  
  const Item = ({ title }) => (
    
    <View>
     <View style={styles.item}>
    <Text style={{fontSize: 30}}>YPE</Text>
    <Text style={styles.title2}>{title}</Text>
    <Text>Você tem um canhoto pendente para essa empresa</Text>
    <View style={{alignItems: 'center', paddingTop: 8}}>
    <TouchableOpacity   
    onPress={() =>  FotoCanNota ()}
    style={styles.button}
    >
    <Text>Enviar canhoto</Text>
    </TouchableOpacity>
    </View>
    

    </View>
  

    
  </View>
);

const renderItem = ({ item }) => (
  <Item title={item.title2} />
);
  const FotoCanNota =()=>{
    navigation.navigate('fotocannota')
  }
    return(

   <View style={styles.container}>
            
    <Cabecalho/>

     {/* linha verde do cabecalho*/}
     <View style={{width: '100%', height: '0.5%', backgroundColor: '#2ECC71'}}></View>

     
    <Text style={styles.title}>
    Canhotos
    </Text>

    
    <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
    />
    

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
        
    }, title: {
        fontSize: 30,
        textAlign: 'center',
        paddingTop: 30, 
        fontFamily: 'Segoe UI', 
        fontWeight: 'bold'
        
    },item: {
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        borderWidth: 1,
        borderColor: 'grey',
        borderRadius: 8
          },
    title2: {
        fontSize: 20,
          }, containergrap: {
            flex: 1,
            backgroundColor: '#F7F7F7',
            alignItems: 'center',
            justifyContent: 'center',
          }, 
          button: {
              width: '70%',
              height: '50%',
              backgroundColor: '#2ECC71',
              borderRadius: 5,
              alignItems: 'center',
              justifyContent: 'center',
              fontFamily: 'Segoe UI',
              fontWeight: 'bold',
              color: 'white'
          }

      
});

export default Canhoto;