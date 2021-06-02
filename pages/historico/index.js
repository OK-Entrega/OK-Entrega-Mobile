import React  from "react";
import { StyleSheet, View, Text, TextInput, FlatList, SafeAreaView} from 'react-native';

import Cabecalho from "../../components/cabecalho";

const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'Carrefour',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
    },
  ];

  const Item = ({ title }) => (
      <View>
       <View style={styles.item}>
      <Text style={{fontSize: 10}}>54862158</Text>
      <Text style={styles.title}>{title}</Text>
      <Text>200 amaciantes Ypê entregues.</Text>
      <View style={{width: 20, height: 6, backgroundColor: 'green', borderRadius: 6}}></View>

      </View>
    

      
    </View>
  );

  const renderItem = ({ item }) => (
    <Item title={item.title} />
  );


const Historico =()=>{
   
    return( 
        <View style={styles.container}>

            <Cabecalho/> 

            {/* linha verde do cabecalho */}
            <View style={{width: '100%', height: '0.5%', backgroundColor: '#2ECC71'}}></View> 

            <View style={styles.container1}>

            {/* linha para a separação das seções (acima ficara o grafico)
            <View style={{width: '85%', height: '0,4%', backgroundColor: '#C8C8C8'}}></View> */}

            <Text>Pesquisar nota</Text>

            <View style={styles.input}>
            <TextInput
                style={styles.inputinterno}
             />
            </View>

        <SafeAreaView>

        <FlatList
            data={DATA}
            renderItem={renderItem}
            keyExtractor={item => item.id}
        />
        </SafeAreaView>
           
            </View>
            
        </View>       
    
    )

}

const styles = StyleSheet.create({
        container: {
        flex: 1,
        backgroundColor: '#F7F7F7',
        }, 
        container1: {
            flex: 1,
            backgroundColor: '#F7F7F7',
            alignItems: 'center',
            justifyContent: 'center'
            }, 
           input : {
            width: '40%',
            height: "6%", 
            borderColor: '#2ECC71', 
            borderWidth: 1,
            borderRadius: 6,
            padding: 10,
            marginTop: 10,
            color: 'black',
            justifyContent: 'center',
            alignItems: 'center'
          
            
        }, 
        inputinterno: {
            width: '100%' 
             }, 
        item: {
            padding: 20,
            marginVertical: 8,
            marginHorizontal: 16,
            borderWidth: 1,
            borderColor: 'grey',
            borderRadius: 8
              },
        title: {
            fontSize: 20,
              },
           
          
});

export default Historico;
