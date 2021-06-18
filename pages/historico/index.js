import React, {useState}  from "react";
import { StyleSheet, View, Text, TextInput, FlatList, SafeAreaView, ScrollView} from 'react-native';
import {
  PieChart,
  StackedBarChart
} from "react-native-chart-kit";

import Cabecalho from "../../components/cabecalho";

/*const Graphic = (
  <View>
  <Text>Bezier Line Chart</Text>
  <LineChart
    data={{
      labels: ["January", "February", "March", "April", "May", "June"],
      datasets: [
        {
          data: [
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100
          ]
        }
      ]
    }}
  width={/*Dimensions.get("window").width 250} // from react-native
    height={220}
    yAxisLabel="$"
    yAxisSuffix="k"
    yAxisInterval={1} // optional, defaults to 1
    chartConfig={{
      backgroundColor: "#e26a00",
      backgroundGradientFrom: "#fb8c00",
      backgroundGradientTo: "#ffa726",
      decimalPlaces: 2, // optional, defaults to 2dp
      color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      style: {
        borderRadius: 16
      },
      propsForDots: {
        r: "6",
        strokeWidth: "2",
        stroke: "#ffa726"
      }
    }}
    bezier
    style={{
      marginVertical: 8,
      borderRadius: 16
    }}
  />
</View>
)*/


const Graphic=()=>{
  return (
    <SafeAreaView style={{flex: 1}}>
      
        <View style={styles.containergrap}>
          <View>
            {/*Example of Pie Chart*/}
            <MyPieChart />
          </View>
        </View>
      
    </SafeAreaView>
  );
};
const MyPieChart = () => {
  return (
    <>
      <Text style={styles.header}>Histórico de Entregas</Text>
      <PieChart
        data={[
          {
            name: 'Entregas',
            population: 10,
            color: '#2ECC71',
            legendFontColor: '#7F7F7F',
            legendFontSize: 15,
          },
          {
            name: 'Ocorrências',
            population: 5,
            color: '#F29035',
            legendFontColor: '#7F7F7F',
            legendFontSize: 15,
          },
          {
            name: 'Devoluções',
            population: 8,
            color: '#E92525',
            legendFontColor: '#7F7F7F',
            legendFontSize: 15,
          }
        ]}
      width={300/*Dimensions.get('window').width - 16*/}
        height={200}
        chartConfig={{
          backgroundColor: '#1cc910',
          backgroundGradientFrom: '#eff3ff',
          backgroundGradientTo: '#efefef',
          decimalPlaces: 2,
          color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          style: {
            borderRadius: 16,
          },
        }}
        style={{
          marginVertical: 8,
          borderRadius: 16,
        }}
        accessor="population"
        backgroundColor="transparent"
        paddingLeft="15"
        absolute //for the absolute number remove if you want percentage
      />
    </>
  );
};
/*
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    padding: 10,
  },
  header: {
    textAlign: 'center',
    fontSize: 18,
    padding: 16,
    marginTop: 16,
  },
});*/

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

            <Graphic/>

          <View style={styles.container1}>

            {/* linha para a separação das seções (acima ficara o grafico)
            <View style={{width: '85%', height: '0,4%', backgroundColor: '#C8C8C8'}}></View> */}
            
            <Text style={{fontSize:'20%'}}>Pesquisar nota</Text>

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
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    padding: 10,
  },
  header: {
    textAlign: 'center',
    fontSize: 18,
    padding: 16,
    marginTop: 16,
  },
        container: {
        flex: 1,
        backgroundColor: '#F7F7F7',
        alignItems: 'center',
        justifyContent: 'center',
         }, 
        container1: {
            flex: 1,
            backgroundColor: '#F7F7F7',
            alignItems: 'center',
            justifyContent: 'flex-start',
            padding: '5%',
            width: '100%'
            }, 
           input : {
            height: '13%', 
            width: '45%',
            borderColor: 'black',
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
              }, containergrap: {
                flex: 1,
                backgroundColor: '#F7F7F7',
                alignItems: 'center',
                justifyContent: 'center',
              }
  
});
const chartConfig = {
  backgroundGradientFrom: "#1E2923",
  backgroundGradientFromOpacity: 0,
  backgroundGradientTo: "#08130D",
  backgroundGradientToOpacity: 0.5,
  color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
  strokeWidth: 2, // optional, default 3
  //barPercentage: 0.5,
  useShadowColorFromDataset: false // optional
  
};

export default Historico;