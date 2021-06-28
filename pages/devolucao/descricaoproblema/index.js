import React, { useState } from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Picker } from 'react-native-ui-lib'; //eslint-disable-line
import Toast from 'react-native-toast-message';

const options = [
    {
        key: 0,
        value: 0,
        label: "Produto com defeito"
    },
    {
        key: 1,
        value: 1,
        label: "Produto danificado no transporte"
    },
    {
        key: 2,
        value: 2,
        label: "Arrependimento"
    },
    {
        key: 3,
        value: 3,
        label: "Produto diferente do solicitado"
    }
]

const DescricaoProblema = ({ navigation, route }) => {

    const [reasonDevolution, setReasonDevolution] = useState(-1);

    const prosseguir = () => {
        if (reasonDevolution === -1)
            Toast.show({
                text1: "Campos obrigatórios",
                text2: "Informe a data e a hora da devolução!",
                type: "error"
            });
        else
            navigation.navigate('confirmadevolucao', {
                accessKey: route.params.accessKey,
                day: route.params.day,
                month: route.params.month,
                year: route.params.year,
                hour: route.params.hour,
                minutes: route.params.minutes,
                reasonDevolution: reasonDevolution,
                evidenceUri: route.params.evidenceUri
            });
    }

    const Home = () => {
        navigation.navigate('home')
    }

    return (
        <View style={{ flex: 1 }}>
            <Toast ref={(ref) => Toast.setRef(ref)} style={{ zIndex: 99999 }} />
            <View style={styles.nav}>

                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                >
                    <Ionicons
                        name="chevron-back-outline" color='white' size={25}
                    />
                </TouchableOpacity>

                <Text style={{ color: 'white', fontWeight: 'bold', fontFamily: 'Segoe UI' }}>Selecione o motivo</Text>

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

            <View style={{ justifyContent: 'center', alignItems: 'center' }}>

                <Text style={[styles.title, { marginVertical: 30 }]}>Motivo da devolução</Text>
                <View style={{ width: "90%", alignItems: "center" }}>
                    <Picker
                        style={{ width: "100%" }}
                        getLabel={item => item.label}
                        placeholder={reasonDevolution === -1 ? "Motivo da devolução" : reasonDevolution === 0 ? "Produto com defeito" : reasonDevolution === 1 ? "Produto danificado no transporte" : reasonDevolution === 2 ? "Arrependimento" : "Produto diferente do solicitado"}
                        floatingPlaceholder
                        value="Motivo da devolução"
                        enableModalBlur={false}
                        onChange={item => setReasonDevolution(item.value)}
                        topBarProps={{ title: 'Motivo da devolução' }}
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
    input: {
        borderWidth: 1,
        borderRadius: 5,
        borderColor: "#C8C8C8",
        padding: 5
    },
    title: {
        fontSize: 25,
        fontWeight: "700"
    }
});

export default DescricaoProblema;