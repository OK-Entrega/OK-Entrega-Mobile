import AsyncStorage from "@react-native-async-storage/async-storage";

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

export const createInit = (method, data, type = "json") => {
    AsyncStorage.getItem("jwt")
        .then(data => {
            const headersForm = {
                "authorization": `Bearer ${jwt !== null ? jwt : null}`
            }

            const headersJson = {
                "content-type": "application/json",
                "authorization": `Bearer ${jwt !== null ? jwt : null}`
            }

            return {
                method: method,
                body: method === "GET" ? null : type === "form" ? data : JSON.stringify(data),
                headers: type === "json" ? headersJson : headersForm
            }
        });
}