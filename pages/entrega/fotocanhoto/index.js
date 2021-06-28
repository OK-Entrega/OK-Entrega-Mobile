import React, { useState, useEffect, useRef } from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Image, ActivityIndicator } from 'react-native';
import { Camera } from 'expo-camera';
import { Ionicons } from '@expo/vector-icons';

import * as ScreenOrientation from 'expo-screen-orientation';
import { date } from 'yup';

const FotoCanhoto = ({ navigation, route }) => {

    const [imagemUri, setImagemUri] = useState(null);
    const [hasPermission, setHasPermission] = useState(null);
    const [loading, setLoading] = useState(false);

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

    const Home = () => {
        navigation.navigate('home')
    }

    const FotoDosProdutos = () => {
        navigation.navigate('fotodosprodutos', {
            accessKey: route.params.accessKey,
            day: route.params.day,
            month: route.params.month,
            year: route.params.year,
            hour: route.params.hour,
            minutes: route.params.minutes,
            voucherUri: imagemUri
        })
    }

    const tirarFoto = async () => {
        if (camera) {
            setLoading(true);
            let foto = await camera.takePictureAsync();
            setImagemUri(foto.uri);
            setLoading(false);
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
                <Text style={{ color: 'white', fontWeight: 'bold', fontFamily: 'Segoe UI' }}> {imagemUri === null ? "Fotografe o canhoto da nota" : "Confira a foto do canhoto"}</Text>
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
                {
                    imagemUri === null
                        ?
                        <Camera style={{ width: '100%', height: '100%' }}
                            type={Camera.Constants.Type.back}
                            ref={ref => {
                                camera = ref;
                            }}>
                        </Camera>
                        :
                        <Image source={{ uri: imagemUri }} style={{ width: '100%', height: '100%' }} />
                }
            </View>
            <View style={{ width: '100%', height: '0.5%', backgroundColor: '#2ECC71' }}></View>
            <View style={{ width: '100%', height: '15%', backgroundColor: '#031F3C', alignItems: 'flex-end', flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center' }}>

                <TouchableOpacity
                    onPress={() => Home()}
                    style={{ width: 120, height: 30, backgroundColor: '#E92525', borderRadius: 8, alignItems: 'center', justifyContent: 'center', }}>
                    <Text style={{ fontWeight: 'bold', fontFamily: 'Segoe UI', color: 'white' }}>Cancelar</Text>
                </TouchableOpacity>

                {
                    imagemUri === null
                        ?
                        <>
                            <TouchableOpacity

                                style={{ width: 120, height: 30, backgroundColor: '#2ECC71', borderRadius: 8, alignItems: 'center', justifyContent: "center", flexDirection: "row" }}
                                onPress={() => tirarFoto()}>
                                {loading && <ActivityIndicator size="small" color="white" style={{marginRight: 5, height: 10}} />}
                                <Text style={{ fontWeight: 'bold', fontFamily: 'Segoe UI', color: 'white' }}>Tirar foto</Text>
                            </TouchableOpacity>
                        </>
                        :
                        <>
                            <TouchableOpacity
                                style={{ width: 120, height: 30, backgroundColor: '#2ECC71', borderRadius: 8, alignItems: 'center', justifyContent: 'center' }}
                                onPress={() => FotoDosProdutos()}>

                                <Text style={{ fontWeight: 'bold', fontFamily: 'Segoe UI', color: 'white' }}>Confirmar</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={{ width: 120, height: 30, backgroundColor: '#3071D3', borderRadius: 8, alignItems: 'center', justifyContent: 'center' }}
                                onPress={() => setImagemUri(null)}>

                                <Text style={{ fontWeight: 'bold', fontFamily: 'Segoe UI', color: 'white' }}>Tirar outra</Text>
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

export default FotoCanhoto;