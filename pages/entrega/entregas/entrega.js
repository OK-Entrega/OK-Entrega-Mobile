import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Camera } from 'expo-camera';
import { Ionicons } from '@expo/vector-icons'

import * as ScreenOrientation from 'expo-screen-orientation';

const ImagemCamera = ({ navigation }) => {

    const [hasPermission, setHasPermission] = useState(null);

    useEffect(() => {
        (async () => {
            const { status } = await Camera.requestPermissionsAsync();
            setHasPermission(status === 'granted');
        })();

        navigation.addListener("focus", () => {
            ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE_LEFT);
        });

        navigation.addListener("blur", () => {
            ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT);
        });
    }, []);

    if (hasPermission === false) {
        navigation.navigate("home");
    }

    const Home = () => {
        navigation.navigate('home')
    }

    const DateAndHour = (data) => {
        navigation.navigate("dataehora", {
            accessKey: data
        })
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

                <Text style={{ color: 'white', fontWeight: 'bold', fontFamily: 'Segoe UI' }}> Escaneie o código de barras</Text>

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

            <View style={{ flex: 1 }}>
                <Camera style={{ width: '100%', height: '100%', justifyContent: "center" }}
                    type={Camera.Constants.Type.back}
                    ref={ref => {
                        camera = ref;
                    }}
                    onBarCodeScanned={(result) => {
                        DateAndHour(result);
                    }}>
                    <View style={styles.layerTop} />
                    <View style={styles.layerCenter}>
                        <View style={styles.layerLeft} />
                        <View style={styles.focused} />
                        <View style={styles.layerRight} />
                    </View>
                    <View style={styles.layerBottom} />
                </Camera>
            </View>
            <View style={{ width: '100%', height: '0.5%', backgroundColor: '#2ECC71' }}></View>
            <View style={{ width: '100%', height: '20%', backgroundColor: '#031F3C', alignItems: 'flex-end', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>
                <TouchableOpacity
                    onPress={() => Home()}
                    style={{ width: '40%', height: '35%', backgroundColor: '#E92525', borderRadius: 8, alignItems: 'center', justifyContent: 'center', }}>
                    <Text style={{ fontWeight: 'bold', fontFamily: 'Segoe UI', color: 'white' }}>Cancelar</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const opacity = 'rgba(0, 0, 0, .6)';
const styles = StyleSheet.create({
    layerTop: {
        flex: 2,
        backgroundColor: opacity
    },
    layerCenter: {
        flex: 1,
        flexDirection: 'row'
    },
    layerLeft: {
        flex: 1,
        backgroundColor: opacity
    },
    focused: {
        width: "100%",
        minHeight: 200,
        height: 200
    },
    layerRight: {
        flex: 1,
        backgroundColor: opacity
    },
    layerBottom: {
        flex: 2,
        backgroundColor: opacity
    },
    nav: {
        backgroundColor: '#031F3C',
        width: '100%',
        height: '13%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 14

    }, logo: {
        width: 35,
        height: 35
    }
});

export default ImagemCamera;