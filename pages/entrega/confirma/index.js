import React, { useEffect, useState } from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { resize } from '../../../utils/constants';
import { finish } from '../../../services/order-services';
import * as Location from 'expo-location';

const Confirma = ({ navigation, route }) => {

    useEffect(() => {
        (async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') return;

            let location = await Location.getCurrentPositionAsync({});
            setLocation(location);
            post();
        })();
    }, []);

    const post = async () => {
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
        formData.append("finishedAt", new Date(route.params.year, route.params.month, route.params.day, route.params.hour, route.params.minutes, 0, 0));
        formData.append("accessKey", route.params.accessKey);
        formData.append("latitudeDeliverer", location.coords.latitude)
        formData.append("longitudeDeliverer", location.coords.longitude)

        console.log(location)

        finish(formData)
            .then(response => response.json())
            .then(data => {
                console.log(data)
                setData(data);

                // setTimeout(() => {
                //     setCount(4)
                // }, 1000)
                // setTimeout(() => {
                //     setCount(3)
                // }, 2000)
                // setTimeout(() => {
                //     setCount(2)
                // }, 3000)
                // setTimeout(() => {
                //     setCount(1)
                // }, 4000)
                // setTimeout(() => {
                //     setCount(0)
                //     navigation.navigate("home");
                // }, 5000)
            })
    }

    const [count, setCount] = useState(5);
    const [data, setData] = useState({});
    const [location, setLocation] = useState({});

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
            <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 65 }}>
                <Text style={[styles.title, { marginVertical: 30, textAlign: "center" }]}>{data?.message}</Text>
                <Text style={[styles.fontNormal, { textAlign: "center" }]}>Mais uma pra conta!</Text>
            </View>
            <View style={{ height: '35%', width: '100%', alignItems: 'center', marginTop: 200 }}>
                <Text style={styles.fontNormal}>Voltando em {count} segundos</Text>
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
    title: {
        fontSize: 25,
        fontWeight: "700"
    },
    fontNormal: {
        fontSize: 17
    }
});

export default Confirma;