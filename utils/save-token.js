import AsyncStorage from '@react-native-async-storage/async-storage';

export const save_token = async (token) => {
    try {
        await AsyncStorage.setItem("jwt", token);
        console.log(token)
    }
    catch (error) {
        console.error(error);
    }
}