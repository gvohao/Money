import React, {useState, useEffect} from 'react';
import {CanvasJS, CanvasJSChart} from "canvasjs-react-charts";
import axios from "axios";

const Chart = () => {
    const [stockData, setStockData] = useState([]);

    useEffect(() => {
        const getData = async () => {
            let res = await axios.get(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=SPY&apikey=Y49HXAAEH220BBZC`)
            console.log(formatStockData(res.data['Time Series (Daily)']))
            setStockData(formatStockData(res.data['Time Series (Daily)']))
        }
        getData()
    }, []);

    // console.log(stockData)

    return (
        <><div>
            S&P 500 SPDR (SPY)
        </div>
            <CanvasJSChart
                options = { {
                    axisY:{
                        minimum: Math.min(...stockData.map(data => data.low)) /1.1, //max empty space below lowest data point
                        maximum: Math.max(...stockData.map(data => data.high)) *1.1, //max empty space above highest data point
                        crosshair: {
                            enabled: true,
                            snapToDataPoint: true
                        }
                    },
                    axisX: {
                        crosshair: {
                            enabled: true,
                            snapToDataPoint: true
                        },
                        scaleBreaks: {
                            spacing: 0,
                            fillOpacity: 0,
                            lineThickness: 0,
                            customBreaks: stockData.reduce((breaks, value, index, array) => {
                                if(index === 0) return breaks;

                                const currentDataPointUnix = Number(new Date(value.date));
                                const previousDataPointUnix = Number(new Date(array[index - 1].date));

                                const oneDayInMs = 86400000; //milliseconds in a day

                                const difference = previousDataPointUnix - currentDataPointUnix; //time diff between previous data point and current data point

                                return difference === oneDayInMs
                                    ? breaks //if time diff is one day, dont do anything
                                    : [ //else use scale break
                                        ...breaks,
                                        {
                                            startValue: currentDataPointUnix,
                                            endValue: previousDataPointUnix - oneDayInMs
                                        }
                                    ]
                            }, [])
                        }
                    },
                    data: [
                        {
                            type: 'candlestick',
                            dataPoints: stockData.map(stockData => ({
                                x: new Date (stockData.date),
                                y: [
                                    stockData.open,
                                    stockData.high,
                                    stockData.low,
                                    stockData.close
                                ]
                            }))
                        }
                    ]
                } }
            /></>
    );
};

// TODO: FIX THIS RETURN SO THAT IT MAPS MY ARRAY AND PULLS OUT THE OPEN HIGH LOW CLOSE AND DATE
function formatStockData(stockData) { // turn res.data['Time Series (Daily)] data from string to number
    let datePriceArray = Object.entries(stockData) //returns array of [key, value] from object(in the API data)
    console.log(Object.entries(stockData))
    return datePriceArray.map(entries => {
        const [date, priceData] = entries;
        return {
            date : date,
            open: Number(priceData['1. open']),
            high: Number(priceData['2. high']),
            low: Number(priceData['3. low']),
            close: Number(priceData['4. close'])
        };
    })
};

export default Chart;
