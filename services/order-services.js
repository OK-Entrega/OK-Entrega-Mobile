import {url_api, createInit} from "../utils/constants";

const url_api_order = `${url_api}/order`;

export const finish = async (data) => {
    const response = await fetch(`${url_api_order}/finish-order`, createInit("POST", data, "form"));
    return response;
}