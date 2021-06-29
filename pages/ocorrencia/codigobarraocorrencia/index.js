import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Camera } from 'expo-camera';
import { Ionicons } from '@expo/vector-icons'
import * as ScreenOrientation from 'expo-screen-orientation';


const CodigoBarraOcorrencia = ({ navigation }) => {

    const [imagemUri, setImagemUri] = useState(null);
    const [hasPermission, setHasPermission] = useState(null);

    useEffect(() => {
        (async () => {
            const { status } = await Camera.requestPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
        navigation.addListener("focus", () => {
            ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE_RIGHT);
        });

        navigation.addListener("blur", () => {
            ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT);
        });
    }, []);

    if (hasPermission === null) {
        return <View />;
    }
    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }

    const DateAndHour = (data) => {
        navigation.navigate('datahoraocorrencia', {
            accessKey: data
        })
    }

    const Home = () => {
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

            <Camera style={{ flex: 1, width: "100%", justifyContent: "center" }}
                autoFocus={true}
                type={Camera.Constants.Type.back}
                ref={ref => {
                    camera = ref;
                }}
                onBarCodeScanned={(result) => {
                    DateAndHour(result.data);
                }}>
                <View style={styles.layerTop} />
                <View style={styles.layerCenter}>
                    <View style={styles.layerLeft} />
                    <View style={styles.focused} />
                    <View style={styles.layerRight} />
                </View>
                <View style={styles.layerBottom} />
            </Camera>
            <View style={{ width: '100%', height: '0.5%', backgroundColor: '#2ECC71' }}></View>

            <View style={{ width: '100%', height: '15%', backgroundColor: '#031F3C', alignItems: 'flex-end', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>
                <TouchableOpacity
                    onPress={() => Home()}
                    style={{ width: 120, height: 30, backgroundColor: '#E92525', borderRadius: 8, alignItems: 'center', justifyContent: 'center', }}>
                    <Text style={{ fontWeight: 'bold', fontFamily: 'Segoe UI', color: 'white' }}>Cancelar</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const opacity = 'rgba(0, 0, 0, .6)';
const styles = StyleSheet.create({
    layerTop: {
        height: "30%",
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
        width: "80%",
    },
    layerRight: {
        flex: 1,
        backgroundColor: opacity
    },
    layerBottom: {
        height: "30%",
        backgroundColor: opacity
    },
    nav: {
        backgroundColor: '#031F3C',
        width: '100%',
        height: '15%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 14

    }, logo: {
        width: 35,
        height: 35
    }
});

export default CodigoBarraOcorrencia;