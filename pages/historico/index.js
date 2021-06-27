import React, { useState } from "react";
import { StyleSheet, View, Text, TextInput, FlatList, SafeAreaView, ScrollView } from 'react-native';

import Cabecalho from "../../components/cabecalho";


const Historico = () => {
    return (
        <View style={styles.container}>

            <Cabecalho />

            <View style={{ width: '100%', height: '0.5%', backgroundColor: '#2ECC71' }}></View>

            <Graphic />

            <View style={styles.container1}>


                <Text style={{ fontSize: '20%' }}>Pesquisar nota</Text>

                <View style={styles.input}>
                    <TextInput
                        style={styles.inputinterno}
                    />

                </View>


                <SafeAreaView>
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
    input: {
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

export default Historico;