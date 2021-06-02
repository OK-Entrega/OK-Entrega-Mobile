import React from 'react';
import { View, Image, StyleSheet, Text, Header } from 'react-native';

const styles = StyleSheet.create({

 

  container: {
    paddingTop: 50,
  },
  stretch: {
    width: 120,
    height: 120,
    resizeMode: 'stretch',
  },

  text: {
    fontFamily: "Bold"

  }
});


const Perfil = () => {
  return (
    
    

    <View >



     {/* Título meu Perifl */}
      <Text style={{fontSize: 45, color:"black", paddingLeft:101, marginTop: 100 }}>Meu Perfil</Text>


      {/* início Imgagem do perfil */}
      <View  style={{ flexDirection: 'row', alignItems:'center',  justifyContent: 'center' ,marginTop:100}}>

    <Image
      style={styles.stretch}
      source={require('../../assets/user.png')}
      />
    <Text style={{paddingLeft:10, fontSize: 20, color:"black", fontWeight: "bold"}}>Pedro da Cunha</Text>
    </View>

     {/* Fim Imgagem do perfil */}

      <View  style={{ flexDirection: 'row' ,marginTop:100, marginLeft:30}}>
    <Image
      style={{width:27, height:27}}
      source={require('../../assets/splash.png')}
      />
     
    <Text style={{paddingLeft:10, fontSize: 20, color:"black", fontWeight: "bold"}}>Número</Text>
    </View>
          <Text style={{paddingLeft:66, fontSize: 13, color:"black", }} >11 9974471331</Text>
           {/* Fim Número */}

         {/* Inicio botão histórico */}
      <View  style={{ flexDirection: 'row' ,marginTop:40, marginLeft:30}}>
    <Image
      style={{width:27, height:27}}
      source={require('../../assets/icon.png')}
      />
    <Text style={{paddingLeft:10, fontSize: 20, color:"black", fontWeight: "bold"}}>Ver histórico</Text>
    </View>
    {/* Fim botão histórico */}
          
     
  

      </View>
  );
}

export default Perfil;