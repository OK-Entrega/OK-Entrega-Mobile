import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Image, Button } from 'react-native';
import {Ionicons} from '@expo/vector-icons'

import DateTimePicker from '@react-native-community/datetimepicker';

const DataHoraDevolucao = ({navigation}) =>{
 const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState('datetime');
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
    
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const showTimepicker = () => {
    showMode('time');
  };


    const FotoDosProdutoDev =()=>{
        navigation.navigate('fotoprodutodev')
    }

    const Home =()=>{
        navigation.navigate('home')
    }

    const FotoCanhoto =()=>{
      navigation.navigate('fotocanhoto')
  }

  return (
     <View style={{flex: 1, backgroundColor: 'white',}}> 
            
           <View style={styles.nav}>

        <TouchableOpacity onPress={() => navigation.goBack()}>
                <Ionicons
                 name="chevron-back-outline" color='white' size={25}
                />
        </TouchableOpacity>

        <Text style={styles.textodbutton}> Selecione data e hora da entrega</Text>

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

      <Text style={{fontSize: 24}}>Data e hora da entrega *</Text>

            <View style={{flexDirection: 'row', margin: 5,width: '60%',  justifyContent: 'space-around'}}>

              <TouchableOpacity onPress={showDatepicker} 
              style={styles.touchopa}>
                 <Ionicons
                  name="calendar-outline" color='black' size={45}
                />
              </TouchableOpacity>

           
            <TouchableOpacity onPress={showTimepicker} 
              style={styles.touchopa}>
              <Ionicons
                 name="alarm-outline" color='black' size={45}
               />
            </TouchableOpacity>
            </View>
            
      </View>
      {show && (
                <DateTimePicker
                testID="dateTimePicker"
                value={date}
                mode='datetime'
                is24Hour={true}
                display="default"
                onChange={onChange}
                />
            )}

      <View style={{height: '35%', width: '100%', alignItems: 'center', justifyContent: 'space-evenly'}}> 
        
        <TouchableOpacity
        onPress={() => FotoDosProdutoDev()}
        style={{width: '55%', height: '15%', backgroundColor: '#2ECC71', borderRadius: 8, alignItems: 'center', justifyContent: 'center',}}>
        <Text style={styles.textodbutton}>Prosseguir</Text>
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

export default DataHoraDevolucao;