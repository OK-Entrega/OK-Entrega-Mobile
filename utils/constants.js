import AsyncStorage from "@react-native-async-storage/async-storage";
import jwt_decode from "jwt-decode";

export const url_api = "http://192.168.1.104:5000/api/v1";

export const resize = (uri) => {
    ImageResizer.createResizedImage(uri, 8, 6, 'JPEG', 80)
        .then(({ uri }) => {
            return uri;
        })
        .catch(err => {
            console.log(err);
        });
}

export const jwt = /*AsyncStorage.getItem("jwt")*/null;
export const discriminator = /*jwt !== null ? jwt_decode(jwt).discriminator : null*/null;

const headersForm = {
    "authorization": `Bearer ${jwt !== null ? jwt : null}`
}

const headersJson = {
    "content-type": "application/json",
    "authorization": `Bearer ${jwt !== null ? jwt : null}`
}

export const createInit = (method, data, type = "json") => {
    return {
        method: method,
        body: method === "GET" ? null : type === "form" ? data : JSON.stringify(data),
        headers: {}//type === "json" ? headersJson : headersForm
    }
}