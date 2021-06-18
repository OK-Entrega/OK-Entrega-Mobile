import React, {useState} from "react";
import {  View, Image, StyleSheet, TouchableOpacity, Modal } from 'react-native';
import {Ionicons} from '@expo/vector-icons'

const Cabecalho =()=>{

    return(
        <View style={styles.nav}>

            <TouchableOpacity>
                    <Ionicons
                        name="home-outline" color='white' size={25}
                    />
            </TouchableOpacity>

            <Image
                    style={styles.logo}
                    source={require('../../assets/logo.png')}
            />

            <TouchableOpacity >
                <Ionicons
                    name="ellipsis-vertical-outline"  color='white' size={25}
                />
            </TouchableOpacity>

            
            

        </View>

        
        
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
        height: '13%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 14
        
    },  logo : {
        width: 50,
        height: 50 
     }
});

export default Cabecalho;