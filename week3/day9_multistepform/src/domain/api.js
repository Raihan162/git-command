import axios from 'axios';

const baseUrl = 'http://www.themealdb.com/api/json/v1/1'

export const callAPI = async (endpoint, method, headers = {}, params = {}, data = {}) => {
    const options = {
        url: baseUrl + endpoint,
        method,
        headers,
        params,
        data
    }

    return axios(options).then((response) => {
        const responseAPI = response?.data;
        return responseAPI;
    })
}