import axios from "axios";
import { setupCache } from 'axios-cache-adapter'
import localForage from "localforage";

const cache = setupCache({
    maxAge: 60 * 60 * 1000,
    store: localForage,
    exclude: {
        query: false

    }
}); //make no calls to the API by cache the data

const axiosInstance = axios.create({
    baseURL: 'https://www.alphavantage.co/query',
    adapter: cache.adapter
});

export const getDailyChartForSymbol = (symbol) => {
    return axiosInstance.get('', {
        params: {
            function: 'TIME_SERIES_DAILY',
            symbol,
            apikey: 'Y49HXAAEH220BBZC'

        }
    })
}

// import axios from "axios";
//
// const axiosInstance = axios.create({
//     baseURL: 'https://www.alphavantage.co/query',
// });
//
// export const getDailyChartForSymbol = (symbol) => {
//     return axiosInstance.get('', {
//         params: {
//             function: 'TIME_SERIES_DAILY',
//             symbol,
//             apikey: 'Y49HXAAEH220BBZC'
//         }
//     })
// }
