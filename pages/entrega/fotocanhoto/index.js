import React, { useState, useEffect, useRef } from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Image, Modal } from 'react-native';
import { Camera } from 'expo-camera';
import { Ionicons } from '@expo/vector-icons';

import * as ScreenOrientation from 'expo-screen-orientation';
import { date } from 'yup';

const FotoCanhoto = ({ navigation, route }) => {

    const [imagemUri, setImagemUri] = useState(null);
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

    if (hasPermission === null) {
        return <View />;
    }
    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }

    const Home = () => {
        navigation.navigate('home')
    }

    const FotoDosProdutos = () => {
        navigation.navigate('fotodosprodutos')
    }

    const tirarFoto = async () => {
        if (camera) {
            let foto = await camera.takePictureAsync();
            setImagemUri(foto.uri);
        }
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
                <Text style={{ color: 'white', fontWeight: 'bold', fontFamily: 'Segoe UI' }}> Fotografe o canhoto da nota</Text>
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
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Camera style={{ width: '100%', height: '100%' }}
                    type={Camera.Constants.Type.back}
                    ref={ref => {
                        camera = ref;
                    }}>
                </Camera>
            </View>
            <View style={{ width: '100%', height: '0.5%', backgroundColor: '#2ECC71' }}></View>
            <View style={{ width: '100%', height: '20%', backgroundColor: '#031F3C', alignItems: 'flex-end', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>

                <TouchableOpacity
                    onPress={() => Home()}
                    style={{ width: '40%', height: '35%', backgroundColor: '#E92525', borderRadius: 8, alignItems: 'center', justifyContent: 'center', }}>
                    <Text style={{ fontWeight: 'bold', fontFamily: 'Segoe UI', color: 'white' }}>Cancelar</Text>
                </TouchableOpacity>

                {
                    imagemUri === null
                        ?
                        <>
                            <TouchableOpacity
                                style={{ width: '40%', height: '35%', backgroundColor: '#2ECC71', borderRadius: 8, alignItems: 'center', justifyContent: 'center' }}
                                onPress={() => tirarFoto()}>

                                <Text style={{ fontWeight: 'bold', fontFamily: 'Segoe UI', color: 'white' }}>Tirar foto</Text>
                            </TouchableOpacity>
                        </>
                        :
                        <>
                            <TouchableOpacity
                                style={{ width: '40%', height: '35%', backgroundColor: '#2ECC71', borderRadius: 8, alignItems: 'center', justifyContent: 'center' }}
                                onPress={() => FotoDosProdutos()}>

                                <Text style={{ fontWeight: 'bold', fontFamily: 'Segoe UI', color: 'white' }}>Confirmar</Text>
                            </TouchableOpacity>
                        </>
                }

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

    }, logo: {
        width: 35,
        height: 35
    }
});

export default FotoCanhoto;