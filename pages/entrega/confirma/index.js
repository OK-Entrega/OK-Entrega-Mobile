import React, { useEffect, useState } from 'react';
import { Text, View, TouchableOpacity, ActivityIndicator, Image, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { resize, url_api } from '../../../utils/constants';
import * as Location from 'expo-location';
import AsyncStorage from "@react-native-async-storage/async-storage";

const Confirma = ({ navigation, route }) => {

    useEffect(() => {
        (async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') return;

            Location.getCurrentPositionAsync({}).then(location => {
                let formData = new FormData();

                // const uriEvidences = resize(route.params.evidenceUri);
                const uriEvidences = route.params.evidenceUri;
                const fileName = uriEvidences?.split("/").pop();
                const ext = uriEvidences?.split(".").pop();

                // const uriVoucher = resize(route.params.voucherUri);
                const uriVoucher = route.params.voucherUri;
                const fileNameVoucher = uriVoucher.split("/").pop();
                const extVoucher = uriVoucher.split(".").pop();

                if (uriEvidences !== null)
                    formData.append("evidences", {
                        uri: uriEvidences,
                        name: fileName,
                        type: "image/" + ext
                    });

                formData.append("voucher", {
                    uri: uriVoucher,
                    name: fileNameVoucher,
                    type: "image/" + extVoucher
                });

                formData.append("finishType", 0);
                formData.append("finishedAtYear", route.params.year);
                formData.append("finishedAtMonth", route.params.month);
                formData.append("finishedAtDay", route.params.day);
                formData.append("finishedAtHour", route.params.hour);
                formData.append("finishedAtMinutes", route.params.minutes);
                formData.append("accessKey", route.params.accessKey);
                formData.append("latitudeDeliverer", location.coords.latitude)
                formData.append("longitudeDeliverer", location.coords.longitude)

                AsyncStorage.getItem("jwt")
                    .then(token => {
                        fetch(`${url_api}/order/finish-order`, {
                            method: "POST",
                            body: formData,
                            headers: {
                                "authorization": `Bearer ${token}`
                            }
                        })
                            .then(response => response.json())
                            .then(data => {
                                setData(data);

                                setTimeout(() => {
                                    setCount(4)
                                }, 1000)
                                setTimeout(() => {
                                    setCount(3)
                                }, 2000)
                                setTimeout(() => {
                                    setCount(2)
                                }, 3000)
                                setTimeout(() => {
                                    setCount(1)
                                }, 4000)
                                setTimeout(() => {
                                    setCount(0)
                                    navigation.navigate("home");
                                }, 5000)
                            })
                    })
            });
        })();
    }, []);

    const [count, setCount] = useState(5);
    const [data, setData] = useState({});

    const home = () => {
        navigation.navigate('home')
    }

    return (
        <View style={{ flex: 1 }}>
            <View style={styles.nav}>
                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                >
                    <Ionicons
                        name="chevron-back-outline" color='white' size={25}
                    />
                </TouchableOpacity>
                <Text style={{ color: 'white', fontWeight: 'bold' }}> Confirmação</Text>
                <TouchableOpacity
                    onPress={() => home()}
                >
                    <Image
                        style={styles.logo}
                        source={require('../../../assets/logo.png')}
                    />
                </TouchableOpacity>
            </View>
            <View style={{ width: '100%', height: '0.5%', backgroundColor: '#2ECC71' }}></View>
            {
                data.data === undefined && data.statusCode === undefined
                    ?
                    <View style={{ height: "90%", justifyContent: "center" }}>
                        <ActivityIndicator size="large" color="#2ECC71" />
                    </View>
                    :
                    <>
                        <View style={{ width: '100%', height: '0.5%', backgroundColor: '#2ECC71' }}></View>
                        <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 65 }}>
                            <Text style={[styles.title, { marginVertical: 30, textAlign: "center" }]}>{data?.message}</Text>
                            <Text style={[styles.fontNormal, { textAlign: "center" }]}>{data.success ? "Mais uma pra conta!" : data.data}</Text>
                        </View>
                        <View style={{ height: '35%', width: '100%', alignItems: 'center', marginTop: 200 }}>
                            <Text style={styles.fontNormal}>Voltando em {count} segundos</Text>
                        </View>
                    </>
            }
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
    title: {
        fontSize: 25,
        fontWeight: "700"
    },
    fontNormal: {
        fontSize: 17
    }
});

export default Confirma;