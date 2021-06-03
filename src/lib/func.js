import axios from "axios";

export const getData = async (ticker) => {
    let res = await axios.get(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${ticker}&apikey=Y49HXAAEH220BBZC`)
    console.log(res.data['Meta Data'])
    if(res.data['Meta Data']){
        return formatStockData(res.data['Time Series (Daily)'])
    }else{
        console.log('data is invalid')
        return []
    }
}



export function formatStockData(stockData) { // turn res.data['Time Series (Daily)] data from string to number
    // console.log(Object.entries(stockData))
    return Object.entries(stockData).map(entries => {
        const [date, priceData] = entries; //WHAT DOES THIS MEAN???
        return {
            date,
            open: Number(priceData['1. open']),
            high: Number(priceData['2. high']),
            low: Number(priceData['3. low']),
            close: Number(priceData['4. close'])
        };
    })
};
