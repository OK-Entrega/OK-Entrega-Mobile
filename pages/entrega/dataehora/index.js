import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Image, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons'
import DateTimePicker from '@react-native-community/datetimepicker';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Toast from 'react-native-toast-message';

const DataeHora = ({ navigation, route }) => {
    const [date, setDate] = useState(null);
    const [hour, setHour] = useState(null);

    const [showDatePicker, setShowDatePicker] = useState(false);
    const [showHourPicker, setShowHourPicker] = useState(false);

    const Home = () => {
        navigation.navigate('home')
    }

    const FotoCanhoto = () => {
        if(date === null || hour === null)
            Toast.show({
                text1: "Campos obrigatórios",
                text2: "Informe a data e a hora da entrega constantes no canhoto!",
                type: "error"
            });
        else
            navigation.navigate('fotocanhoto', {
                accessKey: route.params.accessKey,
                date: date,
                hour: hour
            });
    }

    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <Toast ref={(ref) => Toast.setRef(ref)} style={{zIndex: 99999}} />
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

            <View style={{ width: '100%', height: '0.5%', backgroundColor: '#2ECC71' }}></View>

            <View style={{ justifyContent: 'center', alignItems: 'center' }}>

                <Text style={{ fontSize: 24 }}>Data e hora da entrega</Text>
                <View style={{ width: "90%", flexDirection: "row", justifyContent: "space-between", marginTop: 10 }}>
                    <View style={[styles.input, { flexDirection: "row", justifyContent: "space-between", alignItems: "center", width: "45%", padding: 8 }]} onTouchStart={() => setShowDatePicker(true)}>
                        <Text style={{ opacity: 0.4 }}>{date === null ? "Data" : (date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear())}</Text>
                        <Text><Icon name="angle-down" /></Text>
                    </View>
                    <View style={[styles.input, { flexDirection: "row", justifyContent: "space-between", alignItems: "center", width: "45%", padding: 8 }]} onTouchStart={() => setShowHourPicker(true)}>
                        <Text style={{ opacity: 0.4 }}>{hour === null ? "Hora" : (hour.getHours() + ":" + hour.getMinutes())}</Text>
                        <Text><Icon name="angle-down" /></Text>
                    </View>
                </View>
            </View>
            {
                showDatePicker
                &&
                <DateTimePicker
                    testID="date"
                    value={date === null ? new Date() : date}
                    mode="datetime"
                    is24Hour={true}
                    display="spinner"
                    minimumDate={new Date(2021, 0, 1)}
                    maximumDate={new Date()}
                    onChange={(event, selectedDate) => {
                        const currentDate = selectedDate || date;
                        setShowDatePicker(false);
                        setDate(currentDate);
                    }}
                />
            }
            {
                showHourPicker
                &&
                <DateTimePicker
                    testID="hour"
                    value={hour === null ? new Date() : hour}
                    mode="time"
                    is24Hour={true}
                    display="spinner"
                    minimumDate={new Date(2021, 0, 1, 0, 0, 0)}
                    maximumDate={new Date()}
                    onChange={(event, selectedDate) => {
                        const currentDate = selectedDate || hour;
                        setShowHourPicker(false);
                        setHour(currentDate);
                    }}
                />
            }
            <View style={{ height: '35%', width: '100%', alignItems: 'center', justifyContent: 'space-evenly' }}>
                <TouchableOpacity
                    onPress={() => FotoCanhoto()}
                    style={{ width: '55%', height: '15%', backgroundColor: '#2ECC71', borderRadius: 8, alignItems: 'center', justifyContent: 'center', }}>
                    <Text style={styles.textodbutton}>Prosseguir</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => Home()}
                    style={{ width: '55%', height: '15%', backgroundColor: '#E92525', borderRadius: 8, alignItems: 'center', justifyContent: 'center', }}>
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

    },
    logo: {
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
    },
    input: {
        borderWidth: 1,
        borderRadius: 5,
        borderColor: "#C8C8C8",
        padding: 5
    }
});

export default DataeHora;