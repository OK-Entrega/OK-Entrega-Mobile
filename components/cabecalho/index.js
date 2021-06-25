import React, {useState} from "react";
import {  View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import { Modal, Portal, Text, Button, Provider } from 'react-native-paper';





const Home =()=>{
    navigation.navigate('home')
  }

  

const Cabecalho =()=>{
    const [visible, setVisible] = React.useState(false);

    const showModal = () => setVisible(true);
    const hideModal = () => setVisible(false);
    
    return(
        
        <View style={styles.nav}>


            <TouchableOpacity onPress={()=> Home()} >
                    <Ionicons
                        name="home-outline" color='white' size={25}
                    />
            </TouchableOpacity >

            <TouchableOpacity onPress={()=> Home()}>
            <Image
                    
                    style={styles.logo}
                    source={require('../../assets/logo.png')}
            />
            </TouchableOpacity>
            

            <TouchableOpacity onPress={showModal}>
                <Ionicons
                    name="ellipsis-vertical-outline"  color='white' size={25}
                />
            </TouchableOpacity>


            <Modal visible={visible}  onDismiss={hideModal} style={styles.containerStyle}>
               
                      <TouchableOpacity>
                            <Ionicons
                              name="close" color='white' size={25}
                              />  
                      </TouchableOpacity>
                      <View >
                      <TouchableOpacity style={{flexDirection: 'row', alignItems: 'center'}}  >
                          <Ionicons
                              name="person" color='white' size={25}
                              /> 
                              <Text style={styles.titmodal}>Ver perfil</Text>
                          </TouchableOpacity>
                      </View>
                      <View >
                      <TouchableOpacity style={{flexDirection: 'row', alignItems: 'center'}}  >
                          <Ionicons
                              name="exit" color='red' size={25}
                              /> 
                              <Text style={styles.titmodal}>Sair</Text>
                          </TouchableOpacity>
                      </View>  
             
              </Modal>

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
        height: '15%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 14
        
    },  logo : {
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