import React, { useState } from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons'
import { TextInput } from 'react-native-paper';
import { Picker } from 'react-native-ui-lib'; //eslint-disable-line
import Toast from 'react-native-toast-message';

const options = [
    {
        key: 0,
        value: 0,
        label: "Acidente de trânsito"
    },
    {
        key: 1,
        value: 1,
        label: "Roubo de carga"
    },
    {
        key: 2,
        value: 2,
        label: "Endereço errado"
    },
    {
        key: 3,
        value: 3,
        label: "Reentrega"
    }
]

const MotivoDevolucao = ({ navigation }) => {

    const [reasonOccurrence, setReasonOccurrence] = useState(-1);

    const Home = () => {
        navigation.navigate('home')
    }

    const prosseguir = () => {
        if (reasonDevolution === -1)
            Toast.show({
                text1: "Campos obrigatórios",
                text2: "Informe a data e a hora da devolução!",
                type: "error"
            });
        else
            navigation.navigate('ocorrenciaconfirmacao', {
                accessKey: route.params.accessKey,
                day: route.params.day,
                month: route.params.month,
                year: route.params.year,
                hour: route.params.hour,
                minutes: route.params.minutes,
                reasonOccurrence: reasonOccurrence,
                evidenceUri: route.params.evidenceUri
            });
    }

    return (
        <View style={{ flex: 1, backgroundColor: 'white', }}>

            <View style={styles.nav}>

                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Ionicons
                        name="chevron-back-outline" color='white' size={25}
                    />
                </TouchableOpacity>

                <Text style={styles.textodbutton}> Motivo da devolução</Text>

                <TouchableOpacity
                    onPress={() => Home()}
                >
                    <Image
                        style={styles.logo}
                        source={require('../../../assets/logo.png')}
                    />
                </TouchableOpacity>
            </View>

            <View style={{ width: '100%', height: '0.5%', backgroundColor: '#2ECC71' }}></View>


            <View style={{ width: "90%", alignItems: "center" }}>
                <Picker
                    style={{ width: "100%" }}
                    getLabel={item => item.label}
                    placeholder={reasonOccurrence === -1 ? "Motivo da ocorrência" : reasonOccurrence === 0 ? "Acidente de trânsito" : reasonOccurrence === 1 ? "Roubo de carga" : reasonOccurrence === 2 ? "Endereço errado" : "Reentrega"}
                    floatingPlaceholder
                    value="Motivo da ocorrência"
                    enableModalBlur={false}
                    onChange={item => setReasonOccurrence(item.value)}
                    topBarProps={{ title: 'Motivo da ocorrência' }}
                    showSearch
                    searchPlaceholder={'Procurar'}
                >
                    {
                        options.map(o => {
                            return <Picker.Item key={o.key} value={o.value} disabled={false} label={o.label} />
                        })
                    }
                </Picker>
            </View>


            <View style={{ height: '35%', width: '100%', alignItems: 'center', marginTop: 50 }}>
                <TouchableOpacity
                    onPress={() => prosseguir()}
                    style={{ width: '55%', height: 30, backgroundColor: '#2ECC71', borderRadius: 8, alignItems: 'center', justifyContent: 'center', marginBottom: 15 }}>
                    <Text style={styles.textodbutton}>Prosseguir</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => Home()}
                    style={{ width: '55%', height: 30, backgroundColor: '#E92525', borderRadius: 8, alignItems: 'center', justifyContent: 'center', }}>
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
        height: '10%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 14

    }, logo: {
        width: 35,
        height: 35
    },
    textodbutton: {
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

export default MotivoDevolucao;